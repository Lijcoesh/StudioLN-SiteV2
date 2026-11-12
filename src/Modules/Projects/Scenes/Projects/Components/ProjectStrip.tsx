import OpenInNewOutlined from '@mui/icons-material/OpenInNewOutlined';
import { Box, Link, Typography } from '@mui/material';
import { makeStyles } from 'tss-react/mui';

import { accent, graphite, label, navy, stitchOnLight } from 'src/colors';
import type { Project } from 'src/Config/projects';
import labelRib from 'src/Resources/Textures/label-rib.svg';
import { fabricShadowLight } from 'src/Theme/shadow';

interface IProps {
    project: Project;
    /** Eerste strook staat in het eerste beeld: afbeelding niet lui laden. */
    eager?: boolean;
    /** Kanteling van het losse afdrukje; wisselt per strook. */
    tilt?: 'left' | 'right';
}

const seam = `2px dashed ${stitchOnLight}`;
const inset = 8;
const ease = 'cubic-bezier(0.16, 1, 0.3, 1)';

// Eén project als strook stof over de volle breedte: links een lap in de kleur van de klant met
// het screenshot erop als los, licht gekanteld afdrukje, rechts een stuk geribde labelstof met
// naam, tekst en link. Eén naad rondom de hele strook en één naad waar de twee stukken aan elkaar
// zitten; het afdrukje ligt helemaal binnen de naden. De strook ligt los op het perzik vlak (lichte
// stof-op-stof-schaduw). De hele strook is één klikdoel (de link rekt zich uit over de strook).
const useStyles = makeStyles()(theme => ({
    root: {
        position: 'relative',
        display: 'grid',
        gridTemplateColumns: 'minmax(0, 7fr) minmax(0, 5fr)',
        gridTemplateAreas: '"shot text"',
        boxShadow: fabricShadowLight,
        '&::before': {
            content: '""',
            position: 'absolute',
            inset,
            border: seam,
            pointerEvents: 'none',
        },
        '&:has(a:focus-visible)': {
            outline: `3px solid ${accent}`,
            outlineOffset: 3,
        },
        [theme.breakpoints.down('md')]: {
            gridTemplateColumns: 'minmax(0, 1fr)',
            gridTemplateAreas: '"shot" "text"',
        },
    },
    lap: {
        gridArea: 'shot',
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(6),
        [theme.breakpoints.down('md')]: {
            padding: theme.spacing(5, 4),
        },
        [theme.breakpoints.down('sm')]: {
            padding: theme.spacing(4, 3),
        },
    },
    // Het afdrukje ligt los op de lap, binnen de naden
    print: {
        position: 'relative',
        zIndex: 1,
        width: '100%',
        backgroundColor: label,
        boxShadow: fabricShadowLight,
        transform: 'rotate(var(--tilt))',
        transition: `transform 220ms ${ease}`,
        '@media (prefers-reduced-motion: reduce)': {
            transition: 'none',
        },
    },
    tiltLeft: {
        '--tilt': '-1deg',
        [theme.breakpoints.down('md')]: {
            '--tilt': '-0.5deg',
        },
    },
    tiltRight: {
        '--tilt': '0.8deg',
        [theme.breakpoints.down('md')]: {
            '--tilt': '0.5deg',
        },
    },
    printLifted: {
        '@media (hover: hover) and (prefers-reduced-motion: no-preference)': {
            '[data-strip]:hover &': {
                transform: 'translateY(-6px) rotate(var(--tilt))',
            },
        },
    },
    bar: {
        display: 'flex',
        alignItems: 'center',
        height: 36,
        paddingInline: theme.spacing(2),
        color: graphite,
        fontSize: '0.9375rem',
        lineHeight: 1,
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
    },
    image: {
        display: 'block',
        width: '100%',
        height: 'auto',
        aspectRatio: '1200 / 750',
        objectFit: 'cover',
        objectPosition: 'top',
    },
    empty: {
        display: 'grid',
        placeItems: 'center',
        aspectRatio: '1200 / 750',
        backgroundColor: theme.palette.common.white,
        color: graphite,
    },
    // De naad waar lap en labelstof aan elkaar zitten, als los element in het rastervak van het
    // labelstuk: dat stuk zelf mag geen position krijgen, anders rekt de link zich alleen over
    // dat stuk uit in plaats van over de strook.
    joinSeam: {
        gridArea: 'text',
        position: 'absolute',
        top: inset,
        bottom: inset,
        left: 0,
        borderLeft: seam,
        pointerEvents: 'none',
        [theme.breakpoints.down('md')]: {
            top: 0,
            bottom: 'auto',
            left: inset,
            right: inset,
            borderLeft: 0,
            borderTop: seam,
        },
    },
    text: {
        gridArea: 'text',
        display: 'flex',
        flexDirection: 'column',
        // Bovenaan uitgelijnd: de naam staat op de hoogte van de domeinbalk, en naam, tekst en
        // link van de eerste strook blijven zo in het eerste beeld
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        padding: theme.spacing(9, 7, 7),
        backgroundColor: label,
        backgroundImage: `url("${labelRib}")`,
        backgroundSize: '4px 6px',
        [theme.breakpoints.down('lg')]: {
            padding: theme.spacing(6, 5),
        },
        [theme.breakpoints.down('sm')]: {
            padding: theme.spacing(4.5, 3.5, 5),
        },
    },
    name: {
        color: navy,
        fontSize: 'clamp(1.75rem, 1.4rem + 1.1vw, 2.375rem)',
        lineHeight: 1.1,
        textWrap: 'balance',
    },
    summary: {
        marginTop: theme.spacing(1.5),
        maxWidth: '40ch',
    },
    made: {
        marginTop: theme.spacing(1.5),
        maxWidth: '40ch',
        color: graphite,
    },
    link: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: theme.spacing(1),
        minHeight: 48,
        marginTop: theme.spacing(2),
        overflowWrap: 'anywhere',
        // De link rekt zich uit over de hele strook; de focusring komt op de strook
        '&::after': {
            content: '""',
            position: 'absolute',
            inset: 0,
            zIndex: 2,
        },
        '&:focus-visible': {
            outline: 'none',
        },
    },
    linkIcon: {
        fontSize: '1.125rem',
        flexShrink: 0,
    },
    srOnly: {
        position: 'absolute',
        width: 1,
        height: 1,
        overflow: 'hidden',
        clip: 'rect(0 0 0 0)',
        whiteSpace: 'nowrap',
    },
}));

export default function ProjectStrip(props: IProps) {
    const { project, eager = false, tilt = 'left' } = props;

    const { classes, cx } = useStyles();

    const { name, summary, made, domain, image, imageAlt, tint } = project;
    const href = domain ? `https://${domain}` : undefined;

    return (
        <Box component="article" data-strip className={classes.root}>
            <Box className={classes.text}>
                <Typography variant="h3" component="h2" className={classes.name}>
                    {name}
                </Typography>
                <Typography className={classes.summary}>{summary}</Typography>
                <Typography variant="body2" className={classes.made}>
                    {made}
                </Typography>
                {href && (
                    <Link href={href} target="_blank" rel="noopener" className={classes.link}>
                        Bekijk {domain}
                        <OpenInNewOutlined aria-hidden className={classes.linkIcon} />
                        <Box component="span" className={classes.srOnly}>
                            (opent in een nieuw tabblad)
                        </Box>
                    </Link>
                )}
            </Box>
            <Box className={classes.joinSeam} aria-hidden />
            <Box className={classes.lap} sx={{ backgroundColor: tint }}>
                <Box
                    className={cx(
                        classes.print,
                        tilt === 'left' ? classes.tiltLeft : classes.tiltRight,
                        href && classes.printLifted,
                    )}
                >
                    <Box className={classes.bar} aria-hidden>
                        {domain ?? 'voorbeeld'}
                    </Box>
                    {image ? (
                        <Box
                            component="img"
                            src={image}
                            alt={imageAlt ?? ''}
                            width={1200}
                            height={750}
                            loading={eager ? 'eager' : 'lazy'}
                            decoding="async"
                            className={classes.image}
                        />
                    ) : (
                        <Box className={classes.empty}>
                            <Typography variant="body2">Screenshot volgt</Typography>
                        </Box>
                    )}
                </Box>
            </Box>
        </Box>
    );
}
