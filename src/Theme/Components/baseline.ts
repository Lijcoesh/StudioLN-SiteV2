import type { Theme } from '@mui/material/styles';

import { accent, label, navy, navyRaised, onNavy, peachSoft } from 'src/colors';

type Overrides = NonNullable<Theme['components']>;

// Browseroppervlakken in de huisstijl: selectie, cursor, focus en scrollbalk.
export function overrideMuiCssBaseline(): Overrides['MuiCssBaseline'] {
    return {
        styleOverrides: {
            html: {
                scrollbarColor: `${navyRaised} ${peachSoft}`,
                WebkitTextSizeAdjust: '100%',
            },
            body: {
                caretColor: accent,
                fontVariantNumeric: 'tabular-nums',
                WebkitFontSmoothing: 'antialiased',
            },
            '::selection': {
                backgroundColor: navy,
                color: label,
            },
            ':focus-visible': {
                outline: `3px solid ${accent}`,
                outlineOffset: 3,
            },
            '[data-surface="dark"] :focus-visible': {
                outline: `3px solid ${onNavy}`,
            },
            'h1, h2, h3, h4': {
                textWrap: 'balance',
            },
            p: {
                textWrap: 'pretty',
            },
        },
    };
}
