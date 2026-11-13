import { Box, Drawer, Link, List, ListItem } from '@mui/material';
import { useState } from 'react';
import { NavLink } from 'react-router';
import { makeStyles } from 'tss-react/mui';

import { accent, label, navy, onNavy, onNavyMuted, stitchOnNavy } from 'src/colors';
import CanvasField from 'src/Components/CanvasField/CanvasField';
import PageWidth from 'src/Components/PageWidth/PageWidth';
import Seam from 'src/Components/Seam/Seam';
import Wordmark from 'src/Components/Wordmark/Wordmark';
import { email, emailHref, phoneDisplay, phoneHref } from 'src/Config/contact';
import { mainNavigation, paths } from 'src/Config/navigation';
import { headerHeight, headerHeightCompact } from 'src/Theme/sizes';

import MenuLabel from './MenuLabel';

// Contact staat in de balk los achter een naad; in de lade gewoon in de rij.
const pageLinks = mainNavigation.filter(item => item.to !== paths.contact);

// Hoogtes op een veelvoud van 8, zodat het canvas naadloos doorloopt in het veld eronder.
// Onderaan de pas van de jas: een dubbele stiknaad over de volle breedte, zodat de vaste header
// ook boven een donker vlak zichtbaar loskomt van de pagina.
const useStyles = makeStyles()(theme => ({
    bar: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: headerHeight,
        paddingBottom: theme.spacing(1.5),
        [theme.breakpoints.down('md')]: {
            height: headerHeightCompact,
        },
    },
    yoke: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 6,
        display: 'grid',
        rowGap: '6px',
        pointerEvents: 'none',
    },
    // Rustige links in Bree Serif, gedempt tot je ze aanraakt of erop staat; Contact staat
    // los achter een korte naad.
    nav: {
        display: 'flex',
        alignItems: 'center',
        padding: 0,
        [theme.breakpoints.down('md')]: {
            display: 'none',
        },
    },
    navItem: {
        width: 'auto',
        padding: 0,
    },
    navLink: {
        display: 'inline-flex',
        alignItems: 'center',
        minHeight: 48,
        paddingInline: theme.spacing(1.25),
        fontFamily: theme.typography.h1.fontFamily,
        fontSize: '1.1875rem',
        fontWeight: 400,
        lineHeight: 1,
        color: onNavyMuted,
        textDecorationLine: 'underline',
        textDecorationColor: 'transparent',
        textDecorationThickness: 3,
        textUnderlineOffset: '0.42em',
        transition: 'text-decoration-color 160ms ease-out, color 160ms ease-out',
        '&:hover': {
            color: onNavy,
            textDecorationColor: stitchOnNavy,
        },
        '&[aria-current="page"]': {
            color: onNavy,
            textDecorationColor: accent,
        },
    },
    navSeam: {
        display: 'flex',
        height: 24,
        marginInline: theme.spacing(1.5),
    },
    menuButton: {
        display: 'none',
        [theme.breakpoints.down('md')]: {
            display: 'inline-flex',
        },
    },
    drawerPaper: {
        width: '100%',
        maxWidth: 440,
        backgroundColor: navy,
    },
    drawerInner: {
        minHeight: '100%',
        display: 'flex',
        flexDirection: 'column',
        padding: theme.spacing(2.5, 3, 5),
    },
    drawerTop: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 64,
        marginBottom: theme.spacing(3),
    },
    drawerList: {
        padding: 0,
    },
    drawerItem: {
        display: 'block',
        padding: 0,
    },
    drawerLink: {
        display: 'flex',
        alignItems: 'center',
        minHeight: 64,
        fontFamily: theme.typography.h1.fontFamily,
        fontSize: '2rem',
        color: onNavy,
        textDecoration: 'none',
        '&[aria-current="page"]': {
            color: label,
            textDecoration: 'underline',
            textDecorationColor: accent,
            textDecorationThickness: 3,
            textUnderlineOffset: '0.25em',
        },
    },
    drawerContact: {
        marginTop: 'auto',
        paddingTop: theme.spacing(5),
        display: 'flex',
        flexDirection: 'column',
        gap: theme.spacing(1.5),
        fontSize: '1.1875rem',
    },
}));

export default function SiteHeader() {
    const { classes } = useStyles();

    const [menuOpen, setMenuOpen] = useState(false);

    const closeMenu = () => setMenuOpen(false);

    return (
        <>
            <Box className={classes.yoke} aria-hidden>
                <Seam tone="navy" />
                <Seam tone="navy" />
            </Box>
            <PageWidth>
                <Box className={classes.bar}>
                    <Wordmark variant="onDark" />
                    <Box component="nav" aria-label="Hoofdmenu">
                        <List className={classes.nav}>
                            {pageLinks.map(item => (
                                <ListItem key={item.to} className={classes.navItem}>
                                    <Link
                                        component={NavLink}
                                        to={item.to}
                                        end={item.to === paths.home}
                                        underline="none"
                                        className={classes.navLink}
                                    >
                                        {item.label}
                                    </Link>
                                </ListItem>
                            ))}
                            <ListItem className={classes.navItem}>
                                <Box className={classes.navSeam} aria-hidden>
                                    <Seam tone="navy" orientation="vertical" />
                                </Box>
                                <Link
                                    component={NavLink}
                                    to={paths.contact}
                                    underline="none"
                                    className={classes.navLink}
                                >
                                    Contact
                                </Link>
                            </ListItem>
                        </List>
                    </Box>
                    <MenuLabel
                        action="open"
                        className={classes.menuButton}
                        onClick={() => setMenuOpen(true)}
                        expanded={menuOpen}
                        controls="site-menu"
                    />
                </Box>
                <Drawer
                    id="site-menu"
                    anchor="right"
                    open={menuOpen}
                    onClose={closeMenu}
                    slotProps={{ paper: { className: classes.drawerPaper } }}
                >
                    <CanvasField className={classes.drawerInner}>
                        <Box className={classes.drawerTop}>
                            <Wordmark variant="onDark" />
                            <MenuLabel action="close" onClick={closeMenu} />
                        </Box>
                        <Box component="nav" aria-label="Hoofdmenu">
                            <List className={classes.drawerList}>
                                {mainNavigation.map(item => (
                                    <ListItem key={item.to} className={classes.drawerItem}>
                                        <Link
                                            component={NavLink}
                                            to={item.to}
                                            end={item.to === paths.home}
                                            className={classes.drawerLink}
                                            onClick={closeMenu}
                                        >
                                            {item.label}
                                        </Link>
                                        <Seam tone="navy" />
                                    </ListItem>
                                ))}
                            </List>
                        </Box>
                        <Box className={classes.drawerContact}>
                            <Link href={phoneHref}>Bel {phoneDisplay}</Link>
                            <Link href={emailHref}>Mail {email}</Link>
                        </Box>
                    </CanvasField>
                </Drawer>
            </PageWidth>
        </>
    );
}
