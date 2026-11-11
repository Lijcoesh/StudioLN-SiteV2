import {
    projectTintKamerbreed,
    projectTintPlaceholder,
    projectTintStefVanZanten,
} from 'src/colors';
import kamerbreedHome from 'src/Resources/Projects/kamerbreed-home.jpg';
import stefVanZantenHome from 'src/Resources/Projects/stefvanzanten-home.jpg';

// Gemaakt werk op Projecten. Alleen projecten die Luca heeft vrijgegeven (PRODUCT.md);
// WaterZacht, LMVW en andere niet tonen tot hij ze vrijgeeft.
// Screenshots: homepagina van de live site, 1200x750, gemaakt op 11-11-2026.

export interface Project {
    slug: string;
    name: string;
    /** Eén regel: wat het bedrijf doet en waar. */
    summary: string;
    /** Eén zin: wat ik gemaakt heb, in gewone woorden. */
    made: string;
    /** Adres van de live site, zonder https:// (wordt ook in de balk boven het screenshot getoond). */
    domain?: string;
    image?: string;
    imageAlt?: string;
    /** Kleur van de lap onder het screenshot (uit `src/colors.ts`). */
    tint: string;
    /** Tijdelijk voorbeeld om de opbouw te testen. Moet vóór livegang weg (launch-checklist). */
    placeholder?: boolean;
}

export const projects: Project[] = [
    {
        slug: 'kamerbreed-interieur',
        name: 'Kamerbreed Interieur',
        summary: 'Vloeren en raambekleding in het Westland.',
        made: 'Een rustige site waarop klanten op hun telefoon meteen zien wat Kamerbreed doet, en met één tik bellen of mailen.',
        domain: 'kamerbreedinterieur.nl',
        image: kamerbreedHome,
        imageAlt:
            'De homepagina van Kamerbreed Interieur: de kop ‘Thuis kiezen en u thuis voelen!’, knoppen om te bellen en te mailen, en een foto van een woonkamer met een houten vloer',
        tint: projectTintKamerbreed,
    },
    {
        slug: 'stef-van-zanten',
        name: 'Stef van Zanten',
        summary: 'Portfolio van een maker van video, muziek, audio en graphics.',
        made: 'Een donkere site in Stefs eigen kleuren, waarop video en audio op de site zelf afspelen en mailen vanaf elke pagina één klik is.',
        domain: 'stefvanzanten.nl',
        image: stefVanZantenHome,
        imageAlt:
            'De homepagina van Stef van Zanten: zijn naam groot op een donkere achtergrond, de zin ‘Ik maak video en muziek met een verhaal.’ en een portret',
        tint: projectTintStefVanZanten,
    },
    {
        slug: 'plaatshouder-schilder',
        name: 'Schilder',
        summary: 'Plaatshouder voor een schildersbedrijf.',
        made: 'Hier komt een echt project. Dit voorbeeld verdwijnt voordat de site online gaat.',
        tint: projectTintPlaceholder,
        placeholder: true,
    },
    {
        slug: 'plaatshouder-loodgieter',
        name: 'Loodgieter',
        summary: 'Plaatshouder voor een loodgietersbedrijf.',
        made: 'Hier komt een echt project. Dit voorbeeld verdwijnt voordat de site online gaat.',
        tint: projectTintPlaceholder,
        placeholder: true,
    },
    {
        slug: 'plaatshouder-hovenier',
        name: 'Hovenier',
        summary: 'Plaatshouder voor een hoveniersbedrijf.',
        made: 'Hier komt een echt project. Dit voorbeeld verdwijnt voordat de site online gaat.',
        tint: projectTintPlaceholder,
        placeholder: true,
    },
];
