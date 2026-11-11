import type { Theme } from '@mui/material/styles';

import { accent, label, navy, navyRaised, onNavy, peachSoft } from 'src/colors';
import { headerHeight, headerHeightCompact } from 'src/Theme/sizes';

type Overrides = NonNullable<Theme['components']>;

// Browseroppervlakken in de huisstijl: selectie, cursor, focus en scrollbalk.
export function overrideMuiCssBaseline(theme: Theme): Overrides['MuiCssBaseline'] {
    return {
        styleOverrides: {
            // Onder de footer (groot scherm, of doorscrollen op de telefoon) loopt het canvas door
            // in plaats van een witte band; body houdt zijn eigen achtergrond.
            // De scroll-padding houdt ankers en de toetsenbordfocus vrij van de vaste header.
            html: {
                backgroundColor: navy,
                scrollPaddingTop: headerHeight + 16,
                [theme.breakpoints.down('md')]: {
                    scrollPaddingTop: headerHeightCompact + 16,
                },
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
