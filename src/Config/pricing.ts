// Prijzen van StudioLN, alle bedragen excl. btw. Bron: de catalogus in het dashboard
// (stand 11-11-2026). Prijzen veranderen in het dashboard; deze lijst volgt dat, niet andersom.

export type PackageKey = 'basis' | 'plus' | 'compleet';

export interface PricingPackage {
    key: PackageKey;
    name: string;
    /** Pakketprijs per maand */
    price: number;
}

export interface PackageFeature {
    name: string;
    /** Wat de bezoeker eraan heeft, in gewone woorden */
    note: string;
    /** Los per maand; null als het bij een andere dienst inbegrepen is */
    price: number | null;
    includedIn: PackageKey[];
}

export interface PriceItem {
    name: string;
    note: string;
    price: number;
    /** Leeg bij eenmalige bedragen */
    unit?: string;
}

export const packages: PricingPackage[] = [
    { key: 'basis', name: 'Basis', price: 25 },
    { key: 'plus', name: 'Plus', price: 35 },
    { key: 'compleet', name: 'Compleet', price: 49.5 },
];

export const packageFeatures: PackageFeature[] = [
    {
        name: 'Websitehosting',
        note: 'Je website online, op mijn eigen server in Amsterdam.',
        price: 25,
        includedIn: ['basis', 'plus', 'compleet'],
    },
    {
        name: 'Mail vanuit je contactformulier',
        note: 'Vult iemand je formulier in, dan krijg jij een mail.',
        price: null,
        includedIn: ['basis', 'plus', 'compleet'],
    },
    {
        name: 'Bestel- en bevestigingsmails',
        note: 'Een automatische mail bij een nieuwe bestelling, voor jou en je klant.',
        price: 10,
        includedIn: ['plus', 'compleet'],
    },
    {
        name: 'Websitestatistieken',
        note: 'Hoeveel mensen je website bezoeken en wat ze bekijken.',
        price: 7.5,
        includedIn: ['plus', 'compleet'],
    },
    {
        // Harde koppeltekens (U+2011): de naam breekt op de telefoon niet af na "e-"
        name: 'E‑mailautomatisering',
        note: 'Herinneringen en nieuwsbrieven die vanzelf verstuurd worden.',
        price: 15,
        includedIn: ['compleet'],
    },
    {
        name: '1 uur aanpassingen per maand',
        note: 'Nieuwe foto’s, andere tijden of een extra stukje tekst.',
        price: 35,
        includedIn: ['compleet'],
    },
];

export const oneOffItems: PriceItem[] = [
    {
        name: 'Een website op maat',
        note: 'Ontwerp en bouw van je website.',
        price: 500,
    },
    {
        name: 'Online zetten en domein koppelen',
        note: 'Je website op mijn server zetten en aan je domeinnaam koppelen.',
        price: 100,
    },
    {
        name: 'Zakelijke e‑mail instellen',
        note: 'Mailadressen op je eigen naam, zoals info@jouwbedrijf.nl.',
        price: 75,
    },
    {
        name: 'Bestaande e‑mail verhuizen',
        note: 'Je huidige mailboxen overzetten naar je nieuwe adressen.',
        price: 100,
    },
];

export const extraItems: PriceItem[] = [
    {
        name: 'Aanpassingen en extra werk',
        note: 'Alles wat na de oplevering nog verandert of erbij komt.',
        price: 35,
        unit: 'per uur',
    },
    {
        name: 'Zakelijke e‑mailhosting',
        note: 'Ik beheer je mailadressen op je eigen naam.',
        price: 10,
        unit: 'per maand',
    },
];

/** Wat de diensten in een pakket los per maand zouden kosten. */
export function separatePrice(key: PackageKey): number {
    return packageFeatures
        .filter(feature => feature.includedIn.includes(key))
        .reduce((sum, feature) => sum + (feature.price ?? 0), 0);
}
