import { useEffect, useRef, useState } from 'react';
import type { FormEvent } from 'react';

import { contactEndpoint, contactFormText, contactLimits } from 'src/Config/contactForm';

export type ContactField = 'name' | 'email' | 'phone' | 'message';
export type ContactValues = Record<ContactField, string>;
export type ContactErrors = Partial<Record<ContactField, string>>;
export type ContactStatus = 'idle' | 'sending' | 'sent' | 'failed';

const emptyValues: ContactValues = { name: '', email: '', phone: '', message: '' };
const fieldOrder: ContactField[] = ['name', 'email', 'phone', 'message'];
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
// Cijfers met eventueel +, spaties, streepjes en haakjes; 10 tot 15 cijfers
const phoneCharacters = /^\+?[\d\s\-()]+$/;

function isValidPhone(phone: string) {
    const digits = phone.replace(/\D/g, '');

    return (
        phone.length <= contactLimits.phone &&
        phoneCharacters.test(phone) &&
        digits.length >= 10 &&
        digits.length <= 15
    );
}

function validate(values: ContactValues): ContactErrors {
    const { errors } = contactFormText;
    const result: ContactErrors = {};

    const name = values.name.trim();
    const email = values.email.trim();
    const phone = values.phone.trim();
    const message = values.message.trim();

    if (!name) result.name = errors.name;
    else if (name.length > contactLimits.name) result.name = errors.nameTooLong;

    if (!email) result.email = errors.email;
    else if (email.length > contactLimits.email || !emailPattern.test(email))
        result.email = errors.emailInvalid;

    if (phone && !isValidPhone(phone)) result.phone = errors.phoneInvalid;

    if (!message) result.message = errors.message;
    else if (message.length > contactLimits.message) result.message = errors.messageTooLong;

    return result;
}

async function send(values: ContactValues, honeypot: string) {
    const response = await fetch(contactEndpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            name: values.name.trim(),
            email: values.email.trim(),
            // De API verwacht een leeg optioneel veld als null, niet als ""
            phone: values.phone.trim() || null,
            message: values.message.trim(),
            website: honeypot,
        }),
    });

    if (!response.ok) throw new Error(`Contact endpoint answered ${response.status}`);
}

// Het contactformulier: controle pas bij versturen (niet tijdens het typen), focus naar het eerste
// foute veld, en wat er is ingevuld blijft altijd staan. Een fout verdwijnt zodra het veld wordt
// aangepast.
export function useContactForm() {
    const [values, setValues] = useState<ContactValues>(emptyValues);
    const [errors, setErrors] = useState<ContactErrors>({});
    const [status, setStatus] = useState<ContactStatus>('idle');
    const [honeypot, setHoneypot] = useState('');
    const fieldRefs = useRef<
        Partial<Record<ContactField, HTMLInputElement | HTMLTextAreaElement | null>>
    >({});
    const focusMessage = useRef(false);

    const change = (field: ContactField, value: string) => {
        setValues(current => ({ ...current, [field]: value }));
        if (errors[field]) setErrors(current => ({ ...current, [field]: undefined }));
    };

    const register =
        (field: ContactField) => (element: HTMLInputElement | HTMLTextAreaElement | null) => {
            fieldRefs.current[field] = element;
        };

    const submit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (status === 'sending') return;

        const found = validate(values);
        setErrors(found);

        const firstInvalid = fieldOrder.find(field => found[field]);
        if (firstInvalid) {
            fieldRefs.current[firstInvalid]?.focus();
            return;
        }

        setStatus('sending');
        try {
            await send(values, honeypot);
            setStatus('sent');
        } catch {
            setStatus('failed');
        }
    };

    // Nog een bericht: naam, e-mail en telefoon blijven staan, het bericht is leeg en krijgt de focus
    const again = () => {
        setValues(current => ({ ...current, message: '' }));
        setStatus('idle');
        focusMessage.current = true;
    };

    useEffect(() => {
        if (status === 'idle' && focusMessage.current) {
            focusMessage.current = false;
            fieldRefs.current.message?.focus();
        }
    }, [status]);

    // Met hoofdletter, ook als de bezoeker zijn naam klein typte
    const first = values.name.trim().split(/\s+/)[0] ?? '';
    const firstName = first.charAt(0).toLocaleUpperCase('nl') + first.slice(1);

    return {
        values,
        errors,
        status,
        honeypot,
        setHoneypot,
        change,
        register,
        submit,
        again,
        firstName,
    };
}
