import '@fontsource/bree-serif';
import '@fontsource-variable/atkinson-hyperlegible-next';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router';

import theme from 'src/Theme/theme';

import App from './App';

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <BrowserRouter basename={import.meta.env.BASE_URL}>
                <App />
            </BrowserRouter>
        </ThemeProvider>
    </StrictMode>,
);
