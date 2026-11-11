export const defaultSizeMapping: { [key: string]: number } = {
    small: 30,
    medium: 35,
    large: 40,
};

// Kleding heeft geen afgeronde kaarten: hoeken blijven vrijwel recht.
export const borderRadius = 2;

// Hoogte van de vaste header (de pasnaad zit erbinnen); compact onder md
export const headerHeight = 96;
export const headerHeightCompact = 80;

// Paginabreedte en zijmarges
export const pageMaxWidth = 1240;

// Stiknaad: steeklengte, tussenruimte en draaddikte
export const stitchLength = 10;
export const stitchGap = 7;
export const stitchWidth = 2;

// Minimale hoogte van een aanklikbaar vak (ruim boven de 44px voor een vinger)
export const tapTarget = 56;
