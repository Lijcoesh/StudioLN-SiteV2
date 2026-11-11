import type { Theme } from '@mui/material/styles';

import { accent, error, graphite, stitchOnLight, text, white } from 'src/colors';
import { tapTarget } from 'src/Theme/sizes';

type Overrides = NonNullable<Theme['components']>;

// Invulvelden: wit, rechte hoeken, een duidelijke rand van 2px in draadkleur (4,3:1 op wit), en
// een label erboven in plaats van in het veld, zodat het nooit verdwijnt tijdens het typen.
export function overrideMuiOutlinedInput(theme: Theme): Overrides['MuiOutlinedInput'] {
    return {
        styleOverrides: {
            root: {
                backgroundColor: white,
                color: text,
                fontSize: theme.typography.body1.fontSize,
                borderRadius: 2,
                '& .MuiOutlinedInput-notchedOutline': {
                    borderWidth: 2,
                    borderColor: stitchOnLight,
                },
                '&:hover .MuiOutlinedInput-notchedOutline': {
                    borderColor: graphite,
                },
                '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                    borderWidth: 2,
                    borderColor: accent,
                },
                '&.Mui-focused': {
                    outline: `3px solid ${accent}`,
                    outlineOffset: 3,
                },
                '&.Mui-error .MuiOutlinedInput-notchedOutline': {
                    borderColor: error,
                },
            },
            input: {
                minHeight: tapTarget - 4,
                boxSizing: 'border-box',
                padding: theme.spacing(1.5, 2),
                'textarea&': {
                    resize: 'vertical',
                },
                '&::placeholder': {
                    color: graphite,
                    opacity: 1,
                },
            },
        },
    };
}

export function overrideMuiFormHelperText(theme: Theme): Overrides['MuiFormHelperText'] {
    return {
        styleOverrides: {
            root: {
                marginInline: 0,
                marginTop: theme.spacing(0.75),
                fontSize: theme.typography.body2.fontSize,
                lineHeight: 1.4,
                color: graphite,
                '&.Mui-error': {
                    color: error,
                    fontWeight: 700,
                },
            },
        },
    };
}
