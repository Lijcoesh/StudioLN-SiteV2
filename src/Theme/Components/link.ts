import type { Theme } from '@mui/material/styles';

type Overrides = NonNullable<Theme['components']>;

// Links zijn altijd onderstreept: de doelgroep moet zonder zoeken zien wat aanklikbaar is.
export function overrideMuiLink(theme: Theme): Overrides['MuiLink'] {
    return {
        defaultProps: {
            underline: 'always',
        },
        styleOverrides: {
            root: {
                color: 'inherit',
                fontWeight: 700,
                textDecorationThickness: 2,
                textUnderlineOffset: '0.22em',
                textDecorationColor: theme.palette.primary.main,
                transition:
                    'text-decoration-color 160ms ease-out, text-underline-offset 160ms ease-out',
                '&:hover': {
                    textUnderlineOffset: '0.32em',
                },
            },
        },
    };
}
