import type { PaletteOptions } from '@mui/material/styles';

import {
    accent,
    accentHover,
    error,
    graphite,
    navy,
    navyRaised,
    onNavy,
    stitchOnLight,
    success,
    text,
    warning,
    white,
} from 'src/colors';

const palette: PaletteOptions = {
    primary: {
        main: accent,
        dark: accentHover,
        contrastText: white,
    },
    secondary: {
        main: navy,
        light: navyRaised,
        contrastText: onNavy,
    },
    error: { main: error },
    warning: { main: warning },
    success: { main: success },
    background: {
        default: white,
        paper: white,
    },
    text: {
        primary: text,
        secondary: graphite,
    },
    divider: stitchOnLight,
};

export default palette;
