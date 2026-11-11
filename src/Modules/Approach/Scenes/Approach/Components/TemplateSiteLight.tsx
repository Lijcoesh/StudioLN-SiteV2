import ArrowForward from '@mui/icons-material/ArrowForward';
import AutoAwesome from '@mui/icons-material/AutoAwesome';
import ElectricalServicesOutlined from '@mui/icons-material/ElectricalServicesOutlined';
import HandymanOutlined from '@mui/icons-material/HandymanOutlined';
import PlumbingOutlined from '@mui/icons-material/PlumbingOutlined';
import ThermostatOutlined from '@mui/icons-material/ThermostatOutlined';
import { Box, Typography } from '@mui/material';
import { alpha } from '@mui/material/styles';
import { makeStyles } from 'tss-react/mui';

import {
    slopBlue,
    slopEmerald,
    slopEmeraldDeep,
    slopLightGround,
    slopLightInk,
    slopLightLine,
    slopLightMuted,
} from 'src/colors';
import { templateLightDescription, templateLightSiteName } from 'src/Config/templatePatterns';

// De letter van het sjabloon: de systeemletter van het apparaat, zoals bij zoveel sites.
const templateFont = '"Segoe UI", system-ui, -apple-system, Roboto, Helvetica, Arial, sans-serif';

const gradient = `linear-gradient(90deg, ${slopEmerald}, ${slopBlue})`;

const services = [
    {
        key: 'plumbing',
        icon: <PlumbingOutlined />,
        title: 'Loodgieterswerk',
        text: 'Snel en vakkundig opgelost.',
    },
    {
        key: 'power',
        icon: <ElectricalServicesOutlined />,
        title: 'Elektra',
        text: 'Veilig en volgens de norm.',
    },
    {
        key: 'heat',
        icon: <ThermostatOutlined />,
        title: 'Verwarming',
        text: 'Comfortabel het hele jaar.',
    },
];

// Het tweede voorbeeld, naast de tekst bovenaan Werkwijze: geen paarse karikatuur maar een nette,
// lichte vakmansite zoals bezoekers ze bij concurrenten tegenkomen, met precies dezelfde trucjes
// (labeltje boven de kop, kleurverloop in de kop, gloeiende knop, icoontjes in tegeltjes). Statisch;
// alles schaalt mee met de breedte van het afdrukje (cqi). Voor schermlezers één afbeelding.
const useStyles = makeStyles()(() => ({
    frame: {
        containerType: 'inline-size',
    },
    site: {
        position: 'relative',
        overflow: 'hidden',
        fontFamily: templateFont,
        fontSize: 'clamp(9px, 2.15cqi, 16px)',
        lineHeight: 1.4,
        color: slopLightInk,
        backgroundColor: slopLightGround,
        backgroundImage: [
            `radial-gradient(circle at 92% 8%, ${alpha(slopEmerald, 0.18)}, transparent 38%)`,
            `radial-gradient(circle at 70% 40%, ${alpha(slopBlue, 0.12)}, transparent 42%)`,
        ].join(', '),
        padding: '1.5em 2.2em 2.2em',
    },
    topBar: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '1.5em',
        marginBottom: '3em',
    },
    brand: {
        display: 'flex',
        alignItems: 'center',
        gap: '0.55em',
        fontWeight: 700,
        fontSize: '1.05em',
        '& svg': {
            fontSize: '1.6em',
            padding: '0.22em',
            borderRadius: '0.4em',
            color: slopLightGround,
            background: gradient,
        },
    },
    nav: {
        display: 'flex',
        gap: '1.8em',
        fontSize: '0.8em',
        color: slopLightMuted,
    },
    navButton: {
        fontSize: '0.8em',
        fontWeight: 600,
        padding: '0.55em 1.2em',
        borderRadius: 999,
        color: slopLightGround,
        background: gradient,
    },
    pill: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: '0.5em',
        padding: '0.45em 1em',
        borderRadius: 999,
        backgroundColor: alpha(slopEmerald, 0.1),
        border: `1px solid ${alpha(slopEmerald, 0.35)}`,
        color: slopEmeraldDeep,
        fontSize: '0.72em',
        fontWeight: 600,
        letterSpacing: '0.12em',
        textTransform: 'uppercase',
        '& svg': {
            fontSize: '1.3em',
        },
    },
    title: {
        display: 'block',
        maxWidth: '15ch',
        margin: '0.5em 0 0',
        fontFamily: templateFont,
        fontSize: '2.7em',
        fontWeight: 800,
        lineHeight: 1.06,
        letterSpacing: '-0.03em',
        color: slopLightInk,
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
        maxWidth: '38ch',
        fontFamily: templateFont,
        fontSize: '0.95em',
        lineHeight: 1.5,
        color: slopLightMuted,
    },
    actions: {
        display: 'flex',
        alignItems: 'center',
        gap: '0.8em',
        marginTop: '1.5em',
    },
    button: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: '0.5em',
        padding: '0.8em 1.5em',
        borderRadius: 999,
        background: gradient,
        color: slopLightGround,
        fontWeight: 700,
        fontSize: '0.92em',
        boxShadow: `0 0.6em 1.6em ${alpha(slopBlue, 0.4)}`,
        '& svg': {
            fontSize: '1.15em',
        },
    },
    ghost: {
        padding: '0.8em 1.4em',
        borderRadius: 999,
        border: `1px solid ${slopLightLine}`,
        backgroundColor: slopLightGround,
        fontWeight: 600,
        fontSize: '0.92em',
    },
    cards: {
        display: 'grid',
        gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
        gap: '0.9em',
        marginTop: '2.4em',
    },
    card: {
        padding: '1.1em',
        borderRadius: '1em',
        backgroundColor: alpha(slopLightGround, 0.7),
        border: `1px solid ${slopLightLine}`,
        boxShadow: `0 0.5em 1.5em ${alpha(slopLightInk, 0.06)}`,
        backdropFilter: 'blur(10px)',
    },
    tile: {
        display: 'grid',
        placeItems: 'center',
        width: '2.4em',
        height: '2.4em',
        borderRadius: '0.7em',
        backgroundColor: alpha(slopEmerald, 0.12),
        color: slopEmeraldDeep,
        '& svg': {
            fontSize: '1.3em',
        },
    },
    cardTitle: {
        display: 'block',
        marginTop: '0.8em',
        fontFamily: templateFont,
        fontWeight: 700,
        fontSize: '0.95em',
    },
    cardText: {
        display: 'block',
        marginTop: '0.2em',
        fontFamily: templateFont,
        fontSize: '0.78em',
        lineHeight: 1.4,
        color: slopLightMuted,
    },
}));

export default function TemplateSiteLight() {
    const { classes } = useStyles();

    return (
        <Box className={classes.frame}>
            <Box role="img" aria-label={templateLightDescription} className={classes.site}>
                <Box className={classes.topBar} aria-hidden>
                    <Box className={classes.brand}>
                        <HandymanOutlined />
                        {templateLightSiteName}
                    </Box>
                    <Box className={classes.nav}>
                        <span>Diensten</span>
                        <span>Werkwijze</span>
                        <span>Contact</span>
                    </Box>
                    <Box className={classes.navButton}>Offerte aanvragen</Box>
                </Box>
                <Box aria-hidden>
                    <Box component="span" className={classes.pill}>
                        <AutoAwesome />
                        Uw vakman in de regio
                    </Box>
                    <Typography component="span" className={classes.title}>
                        Vakwerk waar u op kunt{' '}
                        <Box component="span" className={classes.gradientText}>
                            bouwen
                        </Box>
                    </Typography>
                    <Typography component="span" className={classes.sub}>
                        Van kleine klus tot complete renovatie: wij regelen het, snel en vakkundig.
                    </Typography>
                    <Box className={classes.actions}>
                        <Box component="span" className={classes.button}>
                            Vraag offerte aan
                            <ArrowForward />
                        </Box>
                        <Box component="span" className={classes.ghost}>
                            Bekijk diensten
                        </Box>
                    </Box>
                    <Box className={classes.cards}>
                        {services.map(service => (
                            <Box key={service.key} className={classes.card}>
                                <Box component="span" className={classes.tile}>
                                    {service.icon}
                                </Box>
                                <Typography component="span" className={classes.cardTitle}>
                                    {service.title}
                                </Typography>
                                <Typography component="span" className={classes.cardText}>
                                    {service.text}
                                </Typography>
                            </Box>
                        ))}
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}
