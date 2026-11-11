import { Box } from '@mui/material';
import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router';
import { makeStyles } from 'tss-react/mui';

import CanvasField from 'src/Components/CanvasField/CanvasField';
import SiteFooter from 'src/Components/SiteFooter/SiteFooter';
import SiteHeader from 'src/Components/SiteHeader/SiteHeader';
import SkipLink from 'src/Components/SkipLink/SkipLink';
import { fabricShadowLight } from 'src/Theme/shadow';

// De header blijft bovenaan staan tijdens het scrollen. Hij ligt dan als los stuk stof over de
// pagina, dus met de lichte stof-op-stof-schaduw.
const useStyles = makeStyles()(theme => ({
    header: {
        position: 'sticky',
        top: 0,
        zIndex: theme.zIndex.appBar,
        boxShadow: fabricShadowLight,
    },
}));

export default function Layout() {
    const location = useLocation();

    const { classes } = useStyles();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location.pathname]);

    return (
        <>
            <SkipLink />
            <CanvasField component="header" className={classes.header}>
                <SiteHeader />
            </CanvasField>
            <Box component="main" id="main" tabIndex={-1} sx={{ outline: 'none' }}>
                <Outlet />
            </Box>
            <SiteFooter />
        </>
    );
}
