import ArrowForward from '@mui/icons-material/ArrowForward';
import AutoAwesome from '@mui/icons-material/AutoAwesome';
import Bolt from '@mui/icons-material/Bolt';
import MenuRounded from '@mui/icons-material/MenuRounded';
import RocketLaunchOutlined from '@mui/icons-material/RocketLaunchOutlined';
import ShieldOutlined from '@mui/icons-material/ShieldOutlined';
import { Box, Typography } from '@mui/material';
import { alpha } from '@mui/material/styles';
import type { ReactNode } from 'react';
import { makeStyles } from 'tss-react/mui';

import {
    slopGround,
    slopLavender,
    slopMuted,
    slopPink,
    slopRaised,
    slopText,
    slopViolet,
} from 'src/colors';
import {
    templateDescription,
    templateSiteName,
    type TemplatePatternKey,
} from 'src/Config/templatePatterns';

import TackingStitch from './TackingStitch';

interface IProps {
    active: TemplatePatternKey;
    /** Pas na een keuze van de bezoeker stikt de rijgsteek zich dicht; bij het openen ligt hij er al. */
    sew?: boolean;
}

// De letter van het sjabloon: de systeemletter van het apparaat, zoals bij zoveel sites.
const templateFont = '"Segoe UI", system-ui, -apple-system, Roboto, Helvetica, Arial, sans-serif';

const gradient = `linear-gradient(90deg, ${slopViolet}, ${slopPink})`;

const cards = [
    {
        key: 'fast',
        icon: <Bolt />,
        title: 'Razendsnel',
        text: 'Optimale prestaties voor jouw bedrijf.',
    },
    {
        key: 'safe',
        icon: <ShieldOutlined />,
        title: 'Veilig',
        text: 'Betrouwbaar en toekomstbestendig.',
    },
    {
        key: 'grow',
        icon: <RocketLaunchOutlined />,
        title: 'Schaalbaar',
        text: 'Groeit moeiteloos met je mee.',
    },
];

const steps = ['Kennismaken', 'Ontwerpen', 'Lanceren'];

// De verzonnen sjabloonsite in de paskamer: precies de "trendstof" die Luca's tekst bekritiseert,
// gebouwd in code zodat hij scherp blijft. Alles schaalt mee met de breedte van het afdrukje
// (cqi); onder sm is het de telefoonversie van dezelfde site. Voor schermlezers is het één
// afbeelding met een beschrijving; het lijstje ernaast benoemt de patronen.
const useStyles = makeStyles()(theme => ({
    frame: {
        containerType: 'inline-size',
    },
    site: {
        position: 'relative',
        overflow: 'hidden',
        fontFamily: templateFont,
        fontSize: 'clamp(9px, 2.15cqi, 16px)',
        lineHeight: 1.4,
        color: slopText,
        backgroundColor: slopGround,
        backgroundImage: [
            `radial-gradient(circle at 78% 4%, ${alpha(slopViolet, 0.5)}, transparent 46%)`,
            `radial-gradient(circle at 8% 96%, ${alpha(slopPink, 0.22)}, transparent 40%)`,
        ].join(', '),
        padding: '1.6em 2.2em 2.2em',
        [theme.breakpoints.down('sm')]: {
            fontSize: 'clamp(11px, 3.9cqi, 15px)',
            padding: '1.2em 1.4em 1.6em',
        },
    },
    topBar: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '1.5em',
        marginBottom: '2.6em',
        [theme.breakpoints.down('sm')]: {
            marginBottom: '1.8em',
        },
    },
    brand: {
        display: 'flex',
        alignItems: 'center',
        gap: '0.5em',
        fontWeight: 700,
        fontSize: '1.05em',
        '& svg': {
            fontSize: '1.6em',
            padding: '0.2em',
            borderRadius: '0.35em',
            background: gradient,
        },
    },
    nav: {
        display: 'flex',
        gap: '1.8em',
        fontSize: '0.8em',
        color: slopMuted,
        [theme.breakpoints.down('sm')]: {
            display: 'none',
        },
    },
    navButton: {
        fontSize: '0.8em',
        fontWeight: 600,
        padding: '0.5em 1.2em',
        borderRadius: 999,
        border: `1px solid ${alpha(slopText, 0.3)}`,
        [theme.breakpoints.down('sm')]: {
            display: 'none',
        },
    },
    menu: {
        display: 'none',
        fontSize: '1.6em',
        color: slopMuted,
        [theme.breakpoints.down('sm')]: {
            display: 'block',
        },
    },
    hero: {
        display: 'grid',
        gridTemplateColumns: 'minmax(0, 1.15fr) minmax(0, 1fr)',
        columnGap: '2.4em',
        alignItems: 'center',
        [theme.breakpoints.down('sm')]: {
            gridTemplateColumns: 'minmax(0, 1fr)',
            rowGap: '1.8em',
        },
    },
    target: {
        position: 'relative',
        display: 'inline-block',
    },
    targetBlock: {
        display: 'block',
    },
    pill: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: '0.5em',
        padding: '0.45em 1em',
        borderRadius: 999,
        border: `1px solid ${alpha(slopViolet, 0.7)}`,
        backgroundColor: alpha(slopViolet, 0.12),
        color: slopLavender,
        fontSize: '0.72em',
        fontWeight: 600,
        letterSpacing: '0.14em',
        textTransform: 'uppercase',
        '& svg': {
            fontSize: '1.3em',
        },
    },
    title: {
        display: 'block',
        margin: '0.55em 0 0',
        fontFamily: templateFont,
        fontSize: '2.45em',
        fontWeight: 800,
        lineHeight: 1.06,
        letterSpacing: '-0.03em',
        color: slopText,
    },
    gradientText: {
        background: gradient,
        WebkitBackgroundClip: 'text',
        backgroundClip: 'text',
        color: 'transparent',
    },
    sub: {
        display: 'block',
        marginTop: '0.9em',
        maxWidth: '30ch',
        fontFamily: templateFont,
        fontSize: '0.95em',
        lineHeight: 1.5,
        color: slopMuted,
    },
    button: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: '0.5em',
        marginTop: '1.5em',
        padding: '0.8em 1.6em',
        borderRadius: 999,
        background: gradient,
        fontWeight: 700,
        fontSize: '0.95em',
        boxShadow: `0 0 2.2em ${alpha(slopPink, 0.6)}, 0 0 0.6em ${alpha(slopViolet, 0.7)}`,
        '& svg': {
            fontSize: '1.15em',
        },
    },
    cards: {
        display: 'grid',
        rowGap: '0.8em',
    },
    card: {
        display: 'flex',
        alignItems: 'center',
        gap: '1em',
        padding: '0.9em 1.1em',
        borderRadius: '1em',
        backgroundColor: alpha(slopText, 0.07),
        border: `1px solid ${alpha(slopText, 0.16)}`,
        backdropFilter: 'blur(12px)',
        [theme.breakpoints.down('sm')]: {
            padding: '0.7em 0.9em',
        },
    },
    tile: {
        flexShrink: 0,
        display: 'grid',
        placeItems: 'center',
        width: '2.6em',
        height: '2.6em',
        borderRadius: '0.75em',
        background: `linear-gradient(135deg, ${slopViolet}, ${slopRaised})`,
        '& svg': {
            fontSize: '1.4em',
        },
    },
    cardTitle: {
        display: 'block',
        fontFamily: templateFont,
        fontWeight: 700,
        fontSize: '1em',
        lineHeight: 1.25,
    },
    cardText: {
        display: 'block',
        fontFamily: templateFont,
        fontSize: '0.8em',
        lineHeight: 1.35,
        color: slopMuted,
    },
    stepsWrap: {
        position: 'relative',
        marginTop: '2.2em',
        [theme.breakpoints.down('sm')]: {
            marginTop: '1.6em',
        },
    },
    steps: {
        display: 'grid',
        gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
        gap: '1em',
        padding: '1em 1.4em',
        borderRadius: '1em',
        border: `1px solid ${alpha(slopText, 0.14)}`,
        backgroundColor: alpha(slopText, 0.04),
    },
    number: {
        display: 'block',
        fontWeight: 800,
        fontSize: '1.9em',
        lineHeight: 1.1,
        color: slopViolet,
    },
    stepName: {
        display: 'block',
        fontWeight: 600,
        fontSize: '0.85em',
    },
}));

export default function TemplateSite(props: IProps) {
    const { active, sew = true } = props;

    const { classes, cx } = useStyles();

    // Een stuk van de site dat bij een patroon hoort; de rijgsteek ligt erom als het aanstaat.
    // De key laat de steek opnieuw dichtstikken bij elke keuze.
    const target = (key: TemplatePatternKey, children: ReactNode, block = false) => (
        <Box
            component={block ? 'div' : 'span'}
            data-pattern={key}
            className={cx(classes.target, block && classes.targetBlock)}
        >
            {children}
            {active === key && <TackingStitch key={key} sew={sew} tight={key === 'gradientText'} />}
        </Box>
    );

    return (
        <Box className={classes.frame}>
            <Box role="img" aria-label={templateDescription} className={classes.site}>
                <Box className={classes.topBar} aria-hidden>
                    <Box className={classes.brand}>
                        <AutoAwesome />
                        {templateSiteName}
                    </Box>
                    <Box className={classes.nav}>
                        <span>Diensten</span>
                        <span>Over ons</span>
                        <span>Prijzen</span>
                    </Box>
                    <Box className={classes.navButton}>Aan de slag</Box>
                    <MenuRounded className={classes.menu} />
                </Box>
                <Box className={classes.hero} aria-hidden>
                    <Box>
                        {target(
                            'eyebrow',
                            <Box component="span" className={classes.pill}>
                                <AutoAwesome />
                                Nieuw: AI-gedreven groei
                            </Box>,
                        )}
                        <Typography component="span" className={classes.title}>
                            Til jouw bedrijf naar een{' '}
                            {target(
                                'gradientText',
                                <Box component="span" className={classes.gradientText}>
                                    hoger niveau
                                </Box>,
                            )}
                        </Typography>
                        <Typography component="span" className={classes.sub}>
                            Wij combineren innovatie, strategie en technologie om jouw digitale
                            groei te versnellen.
                        </Typography>
                        {target(
                            'glow',
                            <Box component="span" className={classes.button}>
                                Start vandaag
                                <ArrowForward />
                            </Box>,
                        )}
                    </Box>
                    {target(
                        'glass',
                        <Box className={classes.cards}>
                            {cards.map(card => (
                                <Box key={card.key} className={classes.card}>
                                    <Box component="span" className={classes.tile}>
                                        {card.icon}
                                    </Box>
                                    <Box>
                                        <Typography component="span" className={classes.cardTitle}>
                                            {card.title}
                                        </Typography>
                                        <Typography component="span" className={classes.cardText}>
                                            {card.text}
                                        </Typography>
                                    </Box>
                                </Box>
                            ))}
                        </Box>,
                        true,
                    )}
                </Box>
                <Box className={classes.stepsWrap} aria-hidden>
                    {target(
                        'numbers',
                        <Box className={classes.steps}>
                            {steps.map((step, index) => (
                                <Box key={step} component="span">
                                    <Box component="span" className={classes.number}>
                                        {String(index + 1).padStart(2, '0')}
                                    </Box>
                                    <Box component="span" className={classes.stepName}>
                                        {step}
                                    </Box>
                                </Box>
                            ))}
                        </Box>,
                        true,
                    )}
                </Box>
            </Box>
        </Box>
    );
}
