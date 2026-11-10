import type { TypographyVariantsOptions } from '@mui/material/styles';

// Bree Serif (huisstijl) voor koppen; Atkinson Hyperlegible Next voor tekst, gekozen omdat de
// doelgroep (40-50+, niet digitaal vaardig) baat heeft bij een letter die op leesbaarheid is ontworpen.
export const displayFont = '"Bree Serif", Georgia, serif';
export const textFont =
    '"Atkinson Hyperlegible Next Variable", system-ui, -apple-system, "Segoe UI", sans-serif';

const typography: TypographyVariantsOptions = {
    fontFamily: textFont,
    fontSize: 16,
    h1: {
        fontFamily: displayFont,
        fontWeight: 400,
        fontSize: 'clamp(2.75rem, 1.4rem + 4.4vw, 5.5rem)',
        lineHeight: 1.02,
        letterSpacing: '-0.01em',
        textWrap: 'balance',
    },
    h2: {
        fontFamily: displayFont,
        fontWeight: 400,
        fontSize: 'clamp(2.125rem, 1.5rem + 2.1vw, 3.375rem)',
        lineHeight: 1.08,
        letterSpacing: '-0.005em',
        textWrap: 'balance',
    },
    h3: {
        fontFamily: displayFont,
        fontWeight: 400,
        fontSize: 'clamp(1.5rem, 1.3rem + 0.6vw, 1.875rem)',
        lineHeight: 1.15,
    },
    h4: {
        fontFamily: displayFont,
        fontWeight: 400,
        fontSize: '1.375rem',
        lineHeight: 1.2,
    },
    subtitle1: {
        fontSize: 'clamp(1.25rem, 1.1rem + 0.5vw, 1.5rem)',
        lineHeight: 1.5,
        fontWeight: 400,
    },
    body1: { fontSize: '1.1875rem', lineHeight: 1.65 },
    body2: { fontSize: '1.0625rem', lineHeight: 1.6 },
    button: { textTransform: 'none', fontWeight: 700, fontSize: '1.0625rem' },
};

export default typography;
