import { Box } from '@mui/material';
import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router';

import CanvasField from 'src/Components/CanvasField/CanvasField';
import SiteFooter from 'src/Components/SiteFooter/SiteFooter';
import SiteHeader from 'src/Components/SiteHeader/SiteHeader';
import SkipLink from 'src/Components/SkipLink/SkipLink';

export default function Layout() {
    const location = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location.pathname]);

    return (
        <>
            <SkipLink />
            <CanvasField component="header">
                <SiteHeader />
            </CanvasField>
            <Box component="main" id="main" tabIndex={-1} sx={{ outline: 'none' }}>
                <Outlet />
            </Box>
            <SiteFooter />
        </>
    );
}
