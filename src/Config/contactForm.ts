// Het contactformulier. Teksten zijn concept (11-11-2026); de belofte van één werkdag is van Luca.

/** Endpoint in de dashboard-API (StudioLN.API). Bestaat nog niet; zonder waarde staat het formulier uit. */
export const contactEndpoint = import.meta.env.VITE_CONTACT_ENDPOINT;

/** Lokaal mag het formulier zonder endpoint getoond worden om het te kunnen beoordelen. */
export const contactFormPreview = import.meta.env.DEV && !contactEndpoint;

export const contactFormEnabled = Boolean(contactEndpoint) || contactFormPreview;

export const responsePromise = 'Je hoort binnen één werkdag van me.';

export const contactFormText = {
    title: 'Stuur een bericht',
    name: 'Naam',
    email: 'E-mailadres',
    phone: 'Telefoonnummer',
    phoneHint: 'niet verplicht',
    message: 'Je bericht',
    messageHint: 'Vertel kort wat je doet en wat je zoekt. Meer hoeft niet.',
    privacy: 'Ik gebruik je gegevens alleen om je te antwoorden.',
    privacyLink: 'Lees de privacyverklaring',
    submit: 'Verstuur bericht',
    sending: 'Bezig met versturen…',
    errors: {
        name: 'Vul je naam in.',
        email: 'Vul je e-mailadres in.',
        emailInvalid:
            'Dit e-mailadres klopt niet helemaal. Kijk even of er een @ en een punt in staan.',
        message: 'Schrijf een kort bericht.',
    },
    sentTitle: (firstName: string) => (firstName ? `Bedankt, ${firstName}.` : 'Bedankt.'),
    sentText: `Je bericht is binnen. ${responsePromise}`,
    failed: 'Het versturen lukte niet. Bel of mail me gerust, dan kom je er net zo snel:',
    offline:
        'Het formulier staat binnenkort online. Tot die tijd: bel of mail me, dat werkt net zo goed.',
};
