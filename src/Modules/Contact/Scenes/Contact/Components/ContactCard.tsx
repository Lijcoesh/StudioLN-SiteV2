import ArrowForwardOutlined from '@mui/icons-material/ArrowForwardOutlined';
import { Box, Link, List, ListItem, Typography } from '@mui/material';
import { makeStyles } from 'tss-react/mui';

import { accent, graphite, navy, peach, stitchOnLight, white } from 'src/colors';
import Seam from 'src/Components/Seam/Seam';
import { businessName, ownerName } from 'src/Config/contact';
import { contactRoutes } from 'src/Config/contactRoutes';
import { fabricShadowLight } from 'src/Theme/shadow';
import { tapTarget } from 'src/Theme/sizes';

const threadLength = 104;
const sway = 'cubic-bezier(0.16, 1, 0.3, 1)';
// Trensje: een korte, dichte zigzagsteek (8 x 24px), hier dwars over het begin van de draad
const bartackPoints = Array.from({ length: 16 }, (_, i) => `${i % 2 ? 7 : 1},${1 + i * 1.47}`).join(
    ' ',
);

// Bellen en mailen staan alleen op het kaartje; het bericht heeft zijn eigen zak ernaast.
const routes = contactRoutes.filter(route => route.href);

// Luca's visitekaartje: wit karton met een geponst gaatje, aan een slappe oranje draad die met een
// trensje op het perzik vlak is vastgezet. Het kaartje hangt licht scheef en zwaait bij aanraken
// of toetsenbordfocus naar -1,5° (niet bij prefers-reduced-motion). Elke regel is een eigen link.
const useStyles = makeStyles()(theme => ({
    hanger: {
        position: 'relative',
        maxWidth: 440,
        transformOrigin: '50% 0',
        transform: 'rotate(-3deg)',
        transition: `transform 420ms ${sway}`,
        '&:hover, &:focus-within': {
            transform: 'rotate(-1.5deg)',
        },
        '@media (prefers-reduced-motion: reduce)': {
            transition: 'none',
        },
        [theme.breakpoints.down('sm')]: {
            transform: 'rotate(-2deg)',
            '&:hover, &:focus-within': {
                transform: 'rotate(-1deg)',
            },
        },
    },
    thread: {
        position: 'relative',
        zIndex: 1,
        display: 'block',
        width: 24,
        height: threadLength,
        marginInline: 'auto',
        overflow: 'visible',
    },
    card: {
        position: 'relative',
        marginTop: -22,
        padding: theme.spacing(6.5, 5, 2),
        backgroundColor: white,
        boxShadow: fabricShadowLight,
        [theme.breakpoints.down('sm')]: {
            padding: theme.spacing(6, 3, 1.5),
        },
    },
    hole: {
        position: 'absolute',
        top: 12,
        left: '50%',
        width: 16,
        height: 16,
        marginLeft: -8,
        borderRadius: '50%',
        backgroundColor: peach,
        border: `2px solid ${stitchOnLight}`,
    },
    name: {
        color: navy,
        fontSize: '1.875rem',
        lineHeight: 1.1,
    },
    role: {
        marginTop: theme.spacing(0.5),
        marginBottom: theme.spacing(2),
        color: graphite,
    },
    list: {
        padding: 0,
    },
    item: {
        display: 'block',
        padding: 0,
    },
    route: {
        display: 'flex',
        alignItems: 'center',
        gap: theme.spacing(1.5),
        minHeight: tapTarget + 16,
        paddingBlock: theme.spacing(1.5),
        color: navy,
        '&:hover .card-arrow': {
            transform: 'translateX(6px)',
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
        flex: 1,
        display: 'flex',
        flexWrap: 'wrap',
        columnGap: '0.3em',
        fontFamily: theme.typography.h1.fontFamily,
        fontSize: 'clamp(1.375rem, 1.15rem + 0.6vw, 1.625rem)',
        lineHeight: 1.2,
    },
    nowrap: {
        whiteSpace: 'nowrap',
    },
    arrow: {
        flexShrink: 0,
        fontSize: 26,
        color: accent,
        transition: `transform 220ms ${sway}`,
        '@media (prefers-reduced-motion: reduce)': {
            transition: 'none',
        },
    },
}));

export default function ContactCard() {
    const { classes, cx } = useStyles();

    return (
        <Box className={classes.hanger}>
            <Box
                component="svg"
                viewBox={`0 0 24 ${threadLength}`}
                className={classes.thread}
                aria-hidden
                focusable="false"
            >
                <path
                    d={`M12 14 C 4 40, 19 70, 12 ${threadLength}`}
                    fill="none"
                    stroke={accent}
                    strokeWidth={2}
                    strokeLinecap="round"
                />
                <polyline
                    points={bartackPoints}
                    transform="translate(8 0)"
                    fill="none"
                    stroke={stitchOnLight}
                    strokeWidth={1.5}
                    strokeLinejoin="round"
                />
            </Box>
            <Box className={classes.card}>
                <Box component="span" className={classes.hole} aria-hidden />
                <Typography variant="h3" component="h2" className={classes.name}>
                    {ownerName}
                </Typography>
                <Typography variant="body2" className={classes.role}>
                    {businessName}, websites op maat
                </Typography>
                <List aria-label="Bel of mail Luca" className={classes.list}>
                    {routes.map(route => (
                        <ListItem key={route.key} className={classes.item}>
                            <Seam tone="light" />
                            <Link href={route.href} underline="none" className={classes.route}>
                                <Box component="span" className={classes.icon} aria-hidden>
                                    {route.icon}
                                </Box>
                                <Typography component="span" className={classes.words}>
                                    <Box component="span" className={classes.nowrap}>
                                        {route.verb}
                                    </Box>
                                    <Box component="span" className={classes.nowrap}>
                                        {route.value}
                                    </Box>
                                </Typography>
                                <ArrowForwardOutlined
                                    className={cx(classes.arrow, 'card-arrow')}
                                    aria-hidden
                                />
                            </Link>
                        </ListItem>
                    ))}
                </List>
            </Box>
        </Box>
    );
}
