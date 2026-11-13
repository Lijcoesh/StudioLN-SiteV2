// Wat StudioLN doet, in de taal van de klant. Bron: de catalogus in het dashboard (PROJECT.md §9).

export interface Service {
    title: string;
    text: string;
}

export const services: Service[] = [
    {
        title: 'Een website op maat',
        text: 'Ik ontwerp en bouw je website rond jouw vak en jouw klanten. Geen sjabloon met jouw logo erop. Hij werkt op de computer én op de telefoon.',
    },
    {
        title: 'Hosting en domein',
        text: 'Je website draait op mijn eigen server in Amsterdam. Ik zorg dat hij bereikbaar is op je eigen domein, zoals jouwbedrijf.nl, en dat alles blijft werken.',
    },
    {
        title: 'Zakelijke e-mail',
        text: 'Een mailadres op je eigen naam, zoals info@jouwbedrijf.nl. Ik stel het in, of verhuis je bestaande mail zonder dat er iets kwijtraakt.',
    },
    {
        title: 'Aanpassingen achteraf',
        text: 'Nieuwe foto’s, andere openingstijden of een extra pagina? Je belt of mailt, en ik pas het aan.',
    },
];

// Prijzen excl. btw; de volledige lijst staat op de pagina Prijzen.
export const websiteFromPrice = '€ 500';
