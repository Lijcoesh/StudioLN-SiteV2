import { Box, Link, Typography } from '@mui/material';
import { Link as RouterLink } from 'react-router';
import { makeStyles } from 'tss-react/mui';

import { accent, graphite, navy, peach, stitchOnLight, white } from 'src/colors';
import { paths } from 'src/Config/navigation';
import { websiteFromPrice } from 'src/Config/services';
import { fabricShadowLight } from 'src/Theme/shadow';

const threadLength = 50;
const sway = 'cubic-bezier(0.16, 1, 0.3, 1)';

// Het prijskaartje dat met een oranje draad aan de onderrand van het binnenlabel hangt. Het hele
// kaartje is één link naar Prijzen, zodat het op de telefoon makkelijk aan te tikken is.
const useStyles = makeStyles<void, 'more'>()((theme, _params, classes) => ({
    hanger: {
        position: 'absolute',
        top: '100%',
        right: theme.spacing(12),
        width: 288,
        transformOrigin: '50% 0',
        transform: 'rotate(-4deg)',
        transition: `transform 420ms ${sway}`,
        '&:has(a:hover), &:has(a:focus-visible)': {
            transform: 'rotate(-1.5deg)',
        },
        '@media (prefers-reduced-motion: reduce)': {
            transition: 'none',
        },
        [theme.breakpoints.down('md')]: {
            right: 'auto',
            left: theme.spacing(3),
            transform: 'rotate(-3deg)',
        },
        [theme.breakpoints.down('sm')]: {
            width: 260,
            left: theme.spacing(2),
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
    tag: {
        position: 'relative',
        display: 'block',
        marginTop: -22,
        padding: theme.spacing(5, 3.5, 3.5),
        backgroundColor: white,
        boxShadow: fabricShadowLight,
        textDecoration: 'none',
        color: navy,
        [`&:hover .${classes.more}, &:focus-visible .${classes.more}`]: {
            textUnderlineOffset: '0.32em',
        },
    },
    hole: {
        position: 'absolute',
        top: 10,
        left: '50%',
        width: 14,
        height: 14,
        marginLeft: -7,
        borderRadius: '50%',
        backgroundColor: peach,
        border: `2px solid ${stitchOnLight}`,
    },
    from: {
        display: 'block',
        color: graphite,
    },
    price: {
        display: 'block',
        fontFamily: theme.typography.h1.fontFamily,
        fontSize: '3.25rem',
        lineHeight: 1,
        margin: theme.spacing(1, 0, 0.5),
        color: navy,
    },
    more: {
        display: 'inline-block',
        marginTop: theme.spacing(2),
        fontWeight: 700,
        color: navy,
        textDecoration: 'underline',
        textDecorationThickness: 2,
        textDecorationColor: accent,
        textUnderlineOffset: '0.22em',
        transition: 'text-underline-offset 160ms ease-out',
    },
}));

export default function PriceTag() {
    const { classes } = useStyles();

    return (
        <Box className={classes.hanger}>
            {/* De draad hangt met wat speling en loopt door het gaatje van het kaartje */}
            <Box
                component="svg"
                viewBox={`0 0 24 ${threadLength}`}
                className={classes.thread}
                aria-hidden
                focusable="false"
            >
                <path
                    d={`M12 0 C 5 14, 17 30, 12 ${threadLength}`}
                    fill="none"
                    stroke={accent}
                    strokeWidth={2}
                    strokeLinecap="round"
                />
            </Box>
            <Link
                component={RouterLink}
                to={paths.pricing}
                underline="none"
                className={classes.tag}
            >
                <Box component="span" className={classes.hole} aria-hidden />
                <Typography component="span" variant="body2" className={classes.from}>
                    Een website vanaf
                </Typography>
                <Typography component="span" className={classes.price}>
                    {websiteFromPrice}
                </Typography>
                <Typography component="span" variant="body2" className={classes.from}>
                    excl. btw
                </Typography>
                <Typography component="span" className={classes.more}>
                    Bekijk alle prijzen
                </Typography>
            </Link>
        </Box>
    );
}
