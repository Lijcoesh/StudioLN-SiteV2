import { Box, Link, List, ListItem, Typography } from '@mui/material';
import { Link as RouterLink } from 'react-router';
import { makeStyles } from 'tss-react/mui';

import { onNavyMuted } from 'src/colors';
import CanvasField from 'src/Components/CanvasField/CanvasField';
import PageWidth from 'src/Components/PageWidth/PageWidth';
import Seam from 'src/Components/Seam/Seam';
import Wordmark from 'src/Components/Wordmark/Wordmark';
import {
    btwId,
    businessName,
    email,
    emailHref,
    kvk,
    phoneDisplay,
    phoneHref,
} from 'src/Config/contact';
import { mainNavigation, paths } from 'src/Config/navigation';

const useStyles = makeStyles()(theme => ({
    root: {
        paddingTop: theme.spacing(9),
        paddingBottom: theme.spacing(5),
        [theme.breakpoints.down('md')]: {
            paddingTop: theme.spacing(7),
        },
    },
    columns: {
        display: 'grid',
        gridTemplateColumns: '1.4fr 1fr 1fr',
        gap: theme.spacing(6),
        paddingBottom: theme.spacing(7),
        [theme.breakpoints.down('md')]: {
            gridTemplateColumns: '1fr 1fr',
        },
        [theme.breakpoints.down('sm')]: {
            gridTemplateColumns: '1fr',
            gap: theme.spacing(5),
        },
    },
    intro: {
        [theme.breakpoints.down('md')]: {
            gridColumn: '1 / -1',
        },
    },
    tagline: {
        marginTop: theme.spacing(2),
        maxWidth: '30ch',
        color: onNavyMuted,
    },
    heading: {
        marginBottom: theme.spacing(2),
    },
    list: {
        padding: 0,
    },
    listItem: {
        padding: 0,
        minHeight: 40,
    },
    link: {
        '&:hover': {
            textDecorationLine: 'underline',
        },
    },
    muted: {
        color: onNavyMuted,
    },
    bottom: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        gap: theme.spacing(2),
        paddingTop: theme.spacing(3),
        color: onNavyMuted,
    },
}));

export default function SiteFooter() {
    const { classes } = useStyles();

    const year = new Date().getFullYear();

    return (
        <CanvasField component="footer" className={classes.root}>
            <PageWidth>
                <Box className={classes.columns}>
                    <Box className={classes.intro}>
                        <Wordmark variant="onDark" />
                        <Typography className={classes.tagline}>
                            Websites op maat voor vakmensen en kleine ondernemers. Ontwerp, bouw,
                            hosting en e-mail bij één persoon.
                        </Typography>
                    </Box>
                    <Box component="nav" aria-label="Pagina's">
                        <Typography variant="h4" component="h2" className={classes.heading}>
                            Pagina’s
                        </Typography>
                        <List className={classes.list}>
                            {mainNavigation.map(item => (
                                <ListItem key={item.to} className={classes.listItem}>
                                    <Link
                                        component={RouterLink}
                                        to={item.to}
                                        underline="none"
                                        className={classes.link}
                                    >
                                        {item.label}
                                    </Link>
                                </ListItem>
                            ))}
                        </List>
                    </Box>
                    <Box>
                        <Typography variant="h4" component="h2" className={classes.heading}>
                            Contact
                        </Typography>
                        <List className={classes.list}>
                            <ListItem className={classes.listItem}>
                                <Link href={phoneHref} underline="none" className={classes.link}>
                                    {phoneDisplay}
                                </Link>
                            </ListItem>
                            <ListItem className={classes.listItem}>
                                <Link href={emailHref} underline="none" className={classes.link}>
                                    {email}
                                </Link>
                            </ListItem>
                            <ListItem className={classes.listItem}>
                                <Typography component="span" className={classes.muted}>
                                    KvK {kvk}
                                </Typography>
                            </ListItem>
                            <ListItem className={classes.listItem}>
                                <Typography component="span" className={classes.muted}>
                                    Btw {btwId}
                                </Typography>
                            </ListItem>
                        </List>
                    </Box>
                </Box>
                <Seam tone="navy" />
                <Box className={classes.bottom}>
                    <Typography variant="body2">
                        © {year} {businessName}
                    </Typography>
                    <Link
                        component={RouterLink}
                        to={paths.privacy}
                        variant="body2"
                        underline="none"
                        className={classes.link}
                    >
                        Privacyverklaring
                    </Link>
                </Box>
            </PageWidth>
        </CanvasField>
    );
}
