// Titels en beschrijvingen voor zoekmachines, per pagina. De beschrijving is wat Google onder de
// titel laat zien: kort (rond 150 tekens), in gewone woorden, zonder claims of cijfers die kunnen
// verouderen. Concept (12-11-2026). Geen imports: vite.config.ts leest dit bestand ook.

export const siteUrl = 'https://studioln.nl';

export const siteName = 'StudioLN';

export interface PageMeta {
    /** Zonder titel krijgt de pagina de titel van de homepagina. */
    title?: string;
    description: string;
}

export const homeTitle = `${siteName} · Websites op maat voor vakmensen`;

export const pageMeta = {
    home: {
        description:
            'Een website op maat voor je zaak, en ik regel de rest: hosting, domein en zakelijke e-mail. Voor vakmensen en kleine ondernemers.',
    },
    approach: {
        title: 'Werkwijze',
        description:
            'Simpel, maar nooit standaard. Hoe ik een website maak die past bij jouw bedrijf, in plaats van een template met een ander logo erop.',
    },
    pricing: {
        title: 'Prijzen',
        description:
            'Wat een website bij mij kost: de eenmalige prijzen, wat je los kunt nemen en de pakketten per maand. Alle bedragen staan erbij, exclusief btw.',
    },
    projects: {
        title: 'Projecten',
        description:
            'Websites die ik voor ondernemers heb gemaakt, met wat ik voor ze gemaakt heb en een link naar de live site.',
    },
    about: {
        title: 'Over mij',
        description:
            'Ik ben Luca van StudioLN. Ik maak websites voor kleine ondernemers en regel alles zelf, van het ontwerp tot de hosting en je e-mail.',
    },
    contact: {
        title: 'Contact',
        description:
            'Bel, mail of stuur een bericht over je website. Je hoort binnen één werkdag van me.',
    },
    privacy: {
        title: 'Privacyverklaring',
        description:
            'Hoe ik met je gegevens omga: geen cookies, geen tracking, en je bericht gebruik ik alleen om je te antwoorden.',
    },
} satisfies Record<string, PageMeta>;
