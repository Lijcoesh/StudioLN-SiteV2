// Het contactformulier. Teksten zijn concept (11-11-2026); de belofte van één werkdag is van Luca.

// De API in /server. Op de VPS serveert Caddy de site en /api op hetzelfde adres; in development
// stuurt de Vite-proxy /api door naar `dotnet run`.
export const contactEndpoint = '/api/contact-messages';

// Grenzen van het formulier. De API (server/Commands/AddContactMessage.cs) heeft dezelfde of ruimere
// grenzen, zodat een bezoeker nooit een fout krijgt voor iets wat het formulier goedkeurt. Wijzig ze samen.
export const contactLimits = {
    name: 100,
    email: 254,
    phone: 20,
    message: 2000,
};

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
        nameTooLong: `Je naam mag maximaal ${contactLimits.name} tekens zijn.`,
        email: 'Vul je e-mailadres in.',
        emailInvalid:
            'Dit e-mailadres klopt niet helemaal. Kijk even of er een @ en een punt in staan.',
        phoneInvalid:
            'Dit telefoonnummer klopt niet helemaal. Gebruik alleen cijfers, bijvoorbeeld 06 12345678.',
        message: 'Schrijf een kort bericht.',
        messageTooLong: `Je bericht mag maximaal ${contactLimits.message} tekens zijn.`,
    },
    sentTitle: (firstName: string) => (firstName ? `Bedankt, ${firstName}.` : 'Bedankt.'),
    sentText: `Je bericht is binnen. ${responsePromise}`,
    // Na versturen: een doorslag van wat de bezoeker stuurde, en wat hij daarna kan doen (concept, 12-11-2026)
    copyTitle: 'Wat je me stuurde',
    copyFrom: 'Van',
    again: 'Iets vergeten?',
    againLink: 'Stuur nog een bericht',
    browse: 'Of kijk intussen rond bij',
    browseLink: 'mijn projecten',
    failed: 'Het versturen lukte niet. Bel of mail me gerust, dan kom je er net zo snel:',
};
