import CloseOutlined from '@mui/icons-material/CloseOutlined';
import MenuOutlined from '@mui/icons-material/MenuOutlined';
import { Box, Button, Drawer, Link, List, ListItem } from '@mui/material';
import { useState } from 'react';
import { NavLink } from 'react-router';
import { makeStyles } from 'tss-react/mui';

import { accent, label, navy, onNavy, stitchOnNavy } from 'src/colors';
import CanvasField from 'src/Components/CanvasField/CanvasField';
import PageWidth from 'src/Components/PageWidth/PageWidth';
import Seam from 'src/Components/Seam/Seam';
import Wordmark from 'src/Components/Wordmark/Wordmark';
import { email, emailHref, phoneDisplay, phoneHref } from 'src/Config/contact';
import { mainNavigation } from 'src/Config/navigation';

// Hoogtes op een veelvoud van 8, zodat het canvas naadloos doorloopt in het veld eronder.
const useStyles = makeStyles()(theme => ({
    bar: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: 96,
        [theme.breakpoints.down('md')]: {
            height: 80,
        },
    },
    nav: {
        display: 'flex',
        gap: theme.spacing(1),
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
        paddingInline: theme.spacing(1.5),
        fontSize: '1.0625rem',
        fontWeight: 700,
        color: onNavy,
        textDecorationLine: 'underline',
        textDecorationColor: 'transparent',
        textDecorationThickness: 3,
        textUnderlineOffset: '0.45em',
        transition: 'text-decoration-color 160ms ease-out',
        '&:hover': {
            textDecorationColor: stitchOnNavy,
        },
        '&[aria-current="page"]': {
            textDecorationColor: accent,
        },
    },
    menuButton: {
        display: 'none',
        color: onNavy,
        borderColor: stitchOnNavy,
        borderWidth: 2,
        gap: theme.spacing(1),
        '&:hover': {
            borderWidth: 2,
            borderColor: onNavy,
        },
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
        <PageWidth>
            <Box className={classes.bar}>
                <Wordmark variant="onDark" />
                <Box component="nav" aria-label="Hoofdmenu">
                    <List className={classes.nav}>
                        {mainNavigation.map(item => (
                            <ListItem key={item.to} className={classes.navItem}>
                                <Link
                                    component={NavLink}
                                    to={item.to}
                                    underline="none"
                                    className={classes.navLink}
                                >
                                    {item.label}
                                </Link>
                            </ListItem>
                        ))}
                    </List>
                </Box>
                <Button
                    variant="outlined"
                    className={classes.menuButton}
                    onClick={() => setMenuOpen(true)}
                    aria-expanded={menuOpen}
                    aria-controls="site-menu"
                    startIcon={<MenuOutlined />}
                >
                    Menu
                </Button>
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
                        <Button
                            variant="outlined"
                            className={classes.menuButton}
                            onClick={closeMenu}
                            startIcon={<CloseOutlined />}
                        >
                            Sluiten
                        </Button>
                    </Box>
                    <Box component="nav" aria-label="Hoofdmenu">
                        <List className={classes.drawerList}>
                            {mainNavigation.map(item => (
                                <ListItem key={item.to} className={classes.drawerItem}>
                                    <Link
                                        component={NavLink}
                                        to={item.to}
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
    );
}
