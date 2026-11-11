import { useRef, useState } from 'react';
import type { FormEvent } from 'react';

import { contactEndpoint, contactFormText } from 'src/Config/contactForm';

export type ContactField = 'name' | 'email' | 'phone' | 'message';
export type ContactValues = Record<ContactField, string>;
export type ContactErrors = Partial<Record<ContactField, string>>;
export type ContactStatus = 'idle' | 'sending' | 'sent' | 'failed';

const emptyValues: ContactValues = { name: '', email: '', phone: '', message: '' };
const fieldOrder: ContactField[] = ['name', 'email', 'phone', 'message'];
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validate(values: ContactValues): ContactErrors {
    const { errors } = contactFormText;
    const result: ContactErrors = {};

    if (!values.name.trim()) result.name = errors.name;
    if (!values.email.trim()) result.email = errors.email;
    else if (!emailPattern.test(values.email.trim())) result.email = errors.emailInvalid;
    if (!values.message.trim()) result.message = errors.message;

    return result;
}

async function send(values: ContactValues, honeypot: string) {
    // Zonder endpoint (alleen lokaal): doen alsof, zodat de toestanden te beoordelen zijn.
    if (!contactEndpoint) {
        await new Promise(resolve => setTimeout(resolve, 900));
        return;
    }

    const response = await fetch(contactEndpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            name: values.name.trim(),
            email: values.email.trim(),
            phone: values.phone.trim(),
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

    const firstName = values.name.trim().split(/\s+/)[0] ?? '';

    return { values, errors, status, honeypot, setHoneypot, change, register, submit, firstName };
}
