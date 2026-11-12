import ArrowForwardOutlined from '@mui/icons-material/ArrowForwardOutlined';
import { Box, Link, List, ListItem, Typography } from '@mui/material';
import { Link as RouterLink } from 'react-router';
import { makeStyles } from 'tss-react/mui';

import { accent, accentHover, white } from 'src/colors';
import Seam from 'src/Components/Seam/Seam';
import { contactRoutes } from 'src/Config/contactRoutes';
import { tapTarget } from 'src/Theme/sizes';

interface IProps {
    className?: string;
}

// De contactlap: een oranje lap, recht en zonder schaduw, rondom vastgestikt, met de drie
// contactroutes onder elkaar, gescheiden door naden van zijnaad tot zijnaad. Staat in de afsluiting
// en in de opening van Over mij.
const inset = 8;

const useStyles = makeStyles()(theme => ({
    patch: {
        position: 'relative',
        backgroundColor: accent,
        color: white,
        padding: theme.spacing(1.5, 0),
    },
    stitches: {
        position: 'absolute',
        inset,
        pointerEvents: 'none',
    },
    stitchTop: {
        position: 'absolute',
        top: 0,
        left: 0,
    },
    stitchBottom: {
        position: 'absolute',
        bottom: 0,
        left: 0,
    },
    stitchLeft: {
        position: 'absolute',
        top: 0,
        left: 0,
    },
    stitchRight: {
        position: 'absolute',
        top: 0,
        right: 0,
    },
    list: {
        padding: 0,
    },
    item: {
        position: 'relative',
        display: 'flex',
        padding: 0,
    },
    divider: {
        position: 'absolute',
        top: 0,
        left: inset,
        // Een svg zonder breedte valt terug op 300px: de naad loopt van zijnaad tot zijnaad.
        width: `calc(100% - ${inset * 2}px)`,
    },
    route: {
        flex: 1,
        display: 'flex',
        alignItems: 'center',
        gap: theme.spacing(1.5),
        minHeight: tapTarget * 1.75,
        padding: theme.spacing(2, 4.5),
        color: white,
        transition: 'background-color 180ms cubic-bezier(0.16, 1, 0.3, 1)',
        '&:hover': {
            backgroundColor: accentHover,
        },
        '&:hover .patch-arrow': {
            transform: 'translateX(6px)',
        },
        '&:focus-visible': {
            outlineOffset: -6,
        },
        [theme.breakpoints.down('sm')]: {
            padding: theme.spacing(2, 3),
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
        fontSize: 'clamp(1.375rem, 1.1rem + 0.8vw, 1.75rem)',
        lineHeight: 1.15,
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

export default function ContactPatch(props: IProps) {
    const { className } = props;

    const { classes, cx } = useStyles();

    return (
        <Box className={cx(classes.patch, className)}>
            <Box className={classes.stitches} aria-hidden>
                <Seam tone="accent" className={classes.stitchTop} />
                <Seam tone="accent" className={classes.stitchBottom} />
                <Seam tone="accent" orientation="vertical" className={classes.stitchLeft} />
                <Seam tone="accent" orientation="vertical" className={classes.stitchRight} />
            </Box>
            <List aria-label="Neem contact op met Luca" className={classes.list}>
                {contactRoutes.map((route, index) => {
                    const content = (
                        <>
                            <Box component="span" className={classes.icon} aria-hidden>
                                {route.icon}
                            </Box>
                            <Typography component="span" className={classes.words}>
                                <Box component="span" className={classes.nowrap}>
                                    {route.verb}
                                </Box>
                                {route.value && (
                                    <Box component="span" className={classes.nowrap}>
                                        {route.value}
                                    </Box>
                                )}
                            </Typography>
                            <ArrowForwardOutlined
                                className={cx(classes.arrow, 'patch-arrow')}
                                aria-hidden
                            />
                        </>
                    );

                    return (
                        <ListItem key={route.key} className={classes.item}>
                            {index > 0 && <Seam tone="accent" className={classes.divider} />}
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
                                <Link href={route.href} underline="none" className={classes.route}>
                                    {content}
                                </Link>
                            )}
                        </ListItem>
                    );
                })}
            </List>
        </Box>
    );
}
