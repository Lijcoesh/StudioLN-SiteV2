import ArrowForwardOutlined from '@mui/icons-material/ArrowForwardOutlined';
import ChatBubbleOutlineOutlined from '@mui/icons-material/ChatBubbleOutlineOutlined';
import MailOutlined from '@mui/icons-material/MailOutlined';
import PhoneOutlined from '@mui/icons-material/PhoneOutlined';
import { Box, Link, List, ListItem, Typography } from '@mui/material';
import type { ReactNode } from 'react';
import { Link as RouterLink } from 'react-router';
import { makeStyles } from 'tss-react/mui';

import { accent, accentHover, white } from 'src/colors';
import PageWidth from 'src/Components/PageWidth/PageWidth';
import Seam from 'src/Components/Seam/Seam';
import { email, emailHref, phoneDisplay, phoneHref } from 'src/Config/contact';
import { paths } from 'src/Config/navigation';
import { tapTarget } from 'src/Theme/sizes';

interface IProps {
    /** Laat de bovenste naad zich dichtstikken bij het laden (alleen in de hero). */
    sew?: boolean;
    /** Toegankelijke naam van de lijst, uniek per pagina. */
    label: string;
}

interface ContactRoute {
    key: string;
    verb: string;
    value?: string;
    icon: ReactNode;
    href?: string;
    to?: string;
}

// Het werkwoord staat in dezelfde regel als de waarde: geen labeltje erboven.
const routes: ContactRoute[] = [
    { key: 'call', verb: 'Bel', value: phoneDisplay, icon: <PhoneOutlined />, href: phoneHref },
    { key: 'mail', verb: 'Mail', value: email, icon: <MailOutlined />, href: emailHref },
    {
        key: 'message',
        verb: 'Stuur een bericht',
        icon: <ChatBubbleOutlineOutlined />,
        to: paths.contact,
    },
];

// De oranje contrastbaan van de werkjas: de enige plek waar acties wonen.
// Drie gelijke vakken, gescheiden en omzoomd door stiknaden.
const useStyles = makeStyles()(theme => ({
    band: {
        position: 'relative',
        backgroundColor: accent,
        color: white,
        paddingBlock: theme.spacing(1.5),
    },
    list: {
        display: 'grid',
        gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
        padding: 0,
        [theme.breakpoints.down('lg')]: {
            gridTemplateColumns: '1fr',
        },
    },
    item: {
        position: 'relative',
        display: 'flex',
        alignItems: 'stretch',
        padding: 0,
    },
    divider: {
        position: 'absolute',
        left: 0,
        top: theme.spacing(2.5),
        height: `calc(100% - ${theme.spacing(5)})`,
        [theme.breakpoints.down('lg')]: {
            display: 'none',
        },
    },
    dividerMobile: {
        display: 'none',
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        [theme.breakpoints.down('lg')]: {
            display: 'block',
        },
    },
    route: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        minHeight: tapTarget * 2,
        padding: theme.spacing(3.5, 2.75),
        color: white,
        textDecoration: 'none',
        transition: 'background-color 180ms cubic-bezier(0.16, 1, 0.3, 1)',
        '&:hover': {
            backgroundColor: accentHover,
        },
        '&:hover .contact-arrow': {
            transform: 'translateX(6px)',
        },
        '&:focus-visible': {
            outlineOffset: -6,
        },
        [theme.breakpoints.down('lg')]: {
            minHeight: tapTarget * 1.75,
            padding: theme.spacing(2.75, 0.5),
            '&:hover': {
                backgroundColor: 'transparent',
            },
        },
    },
    routeText: {
        display: 'flex',
        alignItems: 'center',
        gap: theme.spacing(1.25),
        fontFamily: theme.typography.h1.fontFamily,
        // Zo gemaat dat "Mail contact@studioln.nl" vanaf 1200px op één regel past in een derde van de pagina.
        fontSize: 'clamp(1.375rem, 0.125rem + 1.667vw, 1.625rem)',
        lineHeight: 1.15,
        [theme.breakpoints.down('lg')]: {
            fontSize: 'clamp(1.375rem, 1.1rem + 1vw, 1.75rem)',
        },
    },
    icon: {
        flexShrink: 0,
        display: 'flex',
        '& svg': {
            fontSize: 28,
        },
    },
    words: {
        display: 'flex',
        flexWrap: 'nowrap',
        columnGap: '0.3em',
        [theme.breakpoints.down('sm')]: {
            flexWrap: 'wrap',
        },
    },
    nowrap: {
        whiteSpace: 'nowrap',
    },
    arrow: {
        flexShrink: 0,
        fontSize: 28,
        transition: 'transform 220ms cubic-bezier(0.16, 1, 0.3, 1)',
        '@media (prefers-reduced-motion: reduce)': {
            transition: 'none',
        },
    },
}));

export default function ContactBand(props: IProps) {
    const { sew = false, label } = props;

    const { classes, cx } = useStyles();

    return (
        <Box className={classes.band}>
            <Seam tone="accent" sew={sew} />
            <PageWidth>
                <List aria-label={label} className={classes.list}>
                    {routes.map((route, index) => {
                        const content = (
                            <Typography component="span" className={classes.routeText}>
                                <Box component="span" className={classes.icon} aria-hidden>
                                    {route.icon}
                                </Box>
                                <Box component="span" className={classes.words}>
                                    <Box component="span" className={classes.nowrap}>
                                        {route.verb}
                                    </Box>
                                    {route.value && (
                                        <Box component="span" className={classes.nowrap}>
                                            {route.value}
                                        </Box>
                                    )}
                                </Box>
                                <ArrowForwardOutlined
                                    className={cx(classes.arrow, 'contact-arrow')}
                                    aria-hidden
                                />
                            </Typography>
                        );

                        return (
                            <ListItem key={route.key} className={classes.item}>
                                {index > 0 && (
                                    <Seam
                                        tone="accent"
                                        orientation="vertical"
                                        className={classes.divider}
                                    />
                                )}
                                {index > 0 && (
                                    <Seam tone="accent" className={classes.dividerMobile} />
                                )}
                                {route.to ? (
                                    <Link
                                        component={RouterLink}
                                        to={route.to}
                                        underline="none"
                                        className={classes.route}
                                    >
                                        {content}
                                    </Link>
                                ) : (
                                    <Link
                                        href={route.href}
                                        underline="none"
                                        className={classes.route}
                                    >
                                        {content}
                                    </Link>
                                )}
                            </ListItem>
                        );
                    })}
                </List>
            </PageWidth>
            <Seam tone="accent" sew={sew} />
        </Box>
    );
}
