// De patronen die de verzonnen sjabloonsite op Werkwijze laat zien, in gewone woorden. Volgorde
// = volgorde in het lijstje. Concepttekst (11-11-2026); Luca mag de namen aanpassen.

export type TemplatePatternKey = 'eyebrow' | 'gradientText' | 'glow' | 'glass' | 'numbers';

export interface TemplatePattern {
    key: TemplatePatternKey;
    title: string;
}

export const templatePatterns: TemplatePattern[] = [
    { key: 'eyebrow', title: 'Een labeltje boven de kop' },
    { key: 'gradientText', title: 'Een kleurverloop in de kop' },
    { key: 'glow', title: 'Een gloeiende knop' },
    { key: 'glass', title: 'Glazen kaarten met icoontjes' },
    { key: 'numbers', title: 'Alles genummerd: 01, 02, 03' },
];

export const templateSiteName = 'Jouw Bedrijf';

// In de balk boven het afdrukje, zodat niemand het voor een echte site aanziet.
export const templateBarLabel = 'Verzonnen voorbeeld';

export const templateCaption = 'Een verzonnen website. Je komt hem overal tegen.';

export const templateDescription =
    'Verzonnen voorbeeld van een website zoals je ze vaak ziet: donkerpaars, met een labeltje boven de kop, een kleurverloop in de kop, een gloeiende knop, glazen kaarten met icoontjes en genummerde stappen 01, 02 en 03.';

// Het tweede, lichtere voorbeeld naast de tekst bovenaan: dezelfde trucjes in een net ander jasje.
export const templateLightSiteName = 'Jouw Klusbedrijf';

export const templateLightDescription =
    'Verzonnen voorbeeld van een nette, lichte vakmansite volgens hetzelfde recept: een labeltje boven de kop, een kleurverloop in de kop, een knop met gekleurde gloed en drie kaartjes met icoontjes.';
