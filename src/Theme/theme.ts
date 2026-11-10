import { createTheme } from '@mui/material/styles';

import { overrideMuiCssBaseline } from './Components/baseline';
import { overrideMuiButton, overrideMuiIconButton } from './Components/buttons';
import { overrideMuiLink } from './Components/link';
import { overrideMuiPaper } from './Components/paper';
import palette from './palette';
import overrideShadows from './shadow';
import { borderRadius } from './sizes';
import typography from './typography';

const theme = createTheme({
    palette,
    typography,
    shape: {
        borderRadius,
    },
});

theme.components = {
    MuiCssBaseline: overrideMuiCssBaseline(),
    MuiButton: overrideMuiButton(theme),
    MuiIconButton: overrideMuiIconButton(),
    MuiLink: overrideMuiLink(theme),
    MuiPaper: overrideMuiPaper(theme),
};

theme.shadows = overrideShadows();

export default theme;
