import type { Theme } from '@mui/material/styles';

import { borderRadius, tapTarget } from 'src/Theme/sizes';

type Overrides = NonNullable<Theme['components']>;

export function overrideMuiButton(theme: Theme): Overrides['MuiButton'] {
    return {
        defaultProps: {
            disableElevation: true,
        },
        styleOverrides: {
            root: {
                borderRadius,
                minHeight: tapTarget - 8,
                padding: theme.spacing(1.25, 2.5),
            },
        },
    };
}

export function overrideMuiIconButton(): Overrides['MuiIconButton'] {
    return {
        styleOverrides: {
            root: {
                borderRadius,
            },
        },
    };
}
