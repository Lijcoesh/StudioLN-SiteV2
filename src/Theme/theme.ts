import { createTheme } from '@mui/material/styles';

import { overrideMuiCssBaseline } from './Components/baseline';
import { overrideMuiButton, overrideMuiIconButton } from './Components/buttons';
import { overrideMuiFormHelperText, overrideMuiOutlinedInput } from './Components/inputs';
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
    MuiCssBaseline: overrideMuiCssBaseline(theme),
    MuiButton: overrideMuiButton(theme),
    MuiFormHelperText: overrideMuiFormHelperText(theme),
    MuiIconButton: overrideMuiIconButton(),
    MuiLink: overrideMuiLink(theme),
    MuiOutlinedInput: overrideMuiOutlinedInput(theme),
    MuiPaper: overrideMuiPaper(theme),
};

theme.shadows = overrideShadows();

export default theme;
