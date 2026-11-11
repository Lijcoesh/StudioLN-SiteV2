import { Box, List, ListItem, Typography } from '@mui/material';
import { makeStyles } from 'tss-react/mui';

import { graphite, label, labelFold, navy, peach, stitchOnLight } from 'src/colors';
import LogoMark from 'src/Components/LogoMark/LogoMark';
import PageWidth from 'src/Components/PageWidth/PageWidth';
import Seam from 'src/Components/Seam/Seam';
import { businessName } from 'src/Config/contact';
import { services } from 'src/Config/services';
// Zachtere rib dan het kleine hero-label: over een vlak van 1240px kleurt de marineblauwe rib de crème grijs.
import labelRib from 'src/Resources/Textures/label-rib-soft.svg';
import { fabricShadowLight } from 'src/Theme/shadow';

import PriceTag from './PriceTag';

const foldWidth = 16;
const seam = `2px dashed ${stitchOnLight}`;

// Het binnenlabel: wat er in een website van mij zit, op één breed ingenaaid label van dezelfde
// geribde stof als het label in de hero. Bovenaan ingestikt, korte kanten omgeslagen en gestikt.
// Het prijskaartje hangt aan de onderrand.
const useStyles = makeStyles()(theme => ({
    root: {
        backgroundColor: peach,
        paddingTop: theme.spacing(14),
        // Ruimte voor het kaartje dat onder het label hangt
        paddingBottom: theme.spacing(42),
        [theme.breakpoints.down('md')]: {
            paddingTop: theme.spacing(9),
            paddingBottom: theme.spacing(46),
        },
    },
    head: {
        display: 'grid',
        gridTemplateColumns: 'minmax(0, 5fr) minmax(0, 6fr)',
        columnGap: theme.spacing(8),
        alignItems: 'end',
        marginBottom: theme.spacing(7),
        [theme.breakpoints.down('md')]: {
            gridTemplateColumns: '1fr',
            rowGap: theme.spacing(2.5),
            marginBottom: theme.spacing(5),
        },
    },
    title: {
        color: navy,
        maxWidth: '18ch',
    },
    intro: {
        maxWidth: '40ch',
    },
    label: {
        position: 'relative',
        backgroundColor: label,
        backgroundImage: `url("${labelRib}")`,
        backgroundSize: '4px 6px',
        boxShadow: fabricShadowLight,
        padding: theme.spacing(6.5, 9, 3),
        // Omgeslagen korte kanten, alleen daar vastgestikt
        '&::before, &::after': {
            content: '""',
            position: 'absolute',
            top: 0,
            bottom: 0,
            width: foldWidth,
            backgroundColor: labelFold,
            pointerEvents: 'none',
        },
        '&::before': {
            left: 0,
            borderRight: seam,
        },
        '&::after': {
            right: 0,
            borderLeft: seam,
        },
        [theme.breakpoints.down('md')]: {
            padding: theme.spacing(5.5, 5, 2),
        },
        [theme.breakpoints.down('sm')]: {
            padding: theme.spacing(5, 3.5, 1),
        },
    },
    topSeam: {
        position: 'absolute',
        top: 14,
        left: foldWidth,
        width: `calc(100% - ${foldWidth * 2}px)`,
    },
    labelHead: {
        display: 'flex',
        alignItems: 'center',
        flexWrap: 'wrap',
        columnGap: theme.spacing(2),
        rowGap: theme.spacing(0.5),
        paddingBottom: theme.spacing(2.5),
        borderBottom: seam,
    },
    brand: {
        fontFamily: theme.typography.h1.fontFamily,
        fontSize: '1.875rem',
        lineHeight: 1,
        color: navy,
    },
    maker: {
        flexBasis: '100%',
        paddingLeft: 60,
        marginTop: -6,
        color: graphite,
        [theme.breakpoints.up('sm')]: {
            flexBasis: 'auto',
            paddingLeft: theme.spacing(1),
            marginTop: 0,
        },
    },
    rows: {
        display: 'grid',
        gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
        columnGap: theme.spacing(9),
        padding: 0,
        [theme.breakpoints.down('lg')]: {
            gridTemplateColumns: '1fr',
        },
    },
    row: {
        display: 'grid',
        rowGap: theme.spacing(1),
        alignItems: 'start',
        alignContent: 'start',
        padding: theme.spacing(3, 0),
        borderTop: seam,
        // Eerste regel van elke kolom sluit direct op de naad onder de kop aan
        '&:nth-of-type(-n+2)': {
            borderTop: 0,
        },
        [theme.breakpoints.down('lg')]: {
            '&:nth-of-type(2)': {
                borderTop: seam,
            },
        },
    },
    rowTitle: {
        color: navy,
    },
    rowText: {
        maxWidth: '46ch',
    },
}));

export default function HomeServices() {
    const { classes } = useStyles();

    return (
        <Box component="section" aria-labelledby="services-title" className={classes.root}>
            <PageWidth>
                <Box className={classes.head}>
                    <Typography variant="h2" id="services-title" className={classes.title}>
                        Waar ik je mee help
                    </Typography>
                    <Typography className={classes.intro}>
                        Je krijgt alles bij één persoon. Geen helpdesk en geen doorverwijzen: je
                        belt of mailt gewoon met mij.
                    </Typography>
                </Box>
                <Box className={classes.label}>
                    <Seam tone="light" className={classes.topSeam} />
                    <Box className={classes.labelHead}>
                        <LogoMark size={44} variant="onLight" />
                        <Typography component="span" className={classes.brand}>
                            {businessName}
                        </Typography>
                        <Typography component="span" variant="body2" className={classes.maker}>
                            gemaakt op maat, door Luca
                        </Typography>
                    </Box>
                    <List className={classes.rows}>
                        {services.map(service => (
                            <ListItem key={service.title} disablePadding className={classes.row}>
                                <Typography variant="h3" className={classes.rowTitle}>
                                    {service.title}
                                </Typography>
                                <Typography className={classes.rowText}>{service.text}</Typography>
                            </ListItem>
                        ))}
                    </List>
                    <PriceTag />
                </Box>
            </PageWidth>
        </Box>
    );
}
