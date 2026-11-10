import { Box, Link, Typography } from '@mui/material';
import { Link as RouterLink } from 'react-router';
import { makeStyles } from 'tss-react/mui';

import { navy, peach, peachSoft, stitchOnLight } from 'src/colors';
import PageWidth from 'src/Components/PageWidth/PageWidth';
import Seam from 'src/Components/Seam/Seam';
import { paths } from 'src/Config/navigation';
import { services, websiteFromPrice } from 'src/Config/services';

const bartack = { width: 3, height: 16 };

// Eén kledingstuk met vier opgestikte zakken: een perzik paneel met lichtere zakken erop. Elke zak is
// aan drie kanten vastgestikt, heeft een dubbele naad als zakrand en trensjes op de bovenhoeken.
// Geen losse kaarten, geen iconen.
const useStyles = makeStyles()(theme => ({
    root: {
        paddingTop: theme.spacing(14),
        paddingBottom: theme.spacing(12),
        [theme.breakpoints.down('md')]: {
            paddingTop: theme.spacing(9),
            paddingBottom: theme.spacing(8),
        },
    },
    head: {
        display: 'grid',
        gridTemplateColumns: 'minmax(0, 5fr) minmax(0, 6fr)',
        columnGap: theme.spacing(8),
        alignItems: 'end',
        marginBottom: theme.spacing(6),
        [theme.breakpoints.down('md')]: {
            gridTemplateColumns: '1fr',
            rowGap: theme.spacing(2.5),
            marginBottom: theme.spacing(4),
        },
    },
    title: {
        color: navy,
    },
    intro: {
        maxWidth: '44ch',
    },
    panel: {
        position: 'relative',
        backgroundColor: peach,
        padding: theme.spacing(6),
        [theme.breakpoints.down('md')]: {
            padding: theme.spacing(3),
        },
        [theme.breakpoints.down('sm')]: {
            padding: theme.spacing(2),
        },
    },
    pockets: {
        display: 'grid',
        gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
        gap: theme.spacing(5),
        [theme.breakpoints.down('md')]: {
            gridTemplateColumns: '1fr',
            gap: theme.spacing(4),
        },
    },
    pocket: {
        position: 'relative',
        padding: theme.spacing(5, 4.5, 4.5),
        // Een opgestikte zak van lichtere stof dan het paneel
        backgroundColor: peachSoft,
        borderLeft: `2px dashed ${stitchOnLight}`,
        borderRight: `2px dashed ${stitchOnLight}`,
        borderBottom: `2px dashed ${stitchOnLight}`,
        // Trensjes: korte, dichte steken die de bovenhoeken van de zak versterken
        '&::before, &::after': {
            content: '""',
            position: 'absolute',
            top: 0,
            width: bartack.width,
            height: bartack.height,
            backgroundColor: stitchOnLight,
        },
        '&::before': {
            left: -2,
        },
        '&::after': {
            right: -2,
        },
        [theme.breakpoints.down('sm')]: {
            padding: theme.spacing(4.5, 2.5, 3.5),
        },
    },
    hem: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        display: 'grid',
        gap: 6,
    },
    pocketTitle: {
        color: navy,
        marginBottom: theme.spacing(1.5),
    },
    pocketText: {
        maxWidth: '40ch',
    },
    price: {
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'baseline',
        columnGap: theme.spacing(3),
        rowGap: theme.spacing(1),
        marginTop: theme.spacing(4),
    },
    priceText: {
        fontFamily: theme.typography.h1.fontFamily,
        fontSize: 'clamp(1.375rem, 1.2rem + 0.5vw, 1.625rem)',
        color: navy,
    },
}));

export default function HomeServices() {
    const { classes } = useStyles();

    return (
        <Box component="section" aria-labelledby="services-title" className={classes.root}>
            <PageWidth>
                <Box className={classes.head}>
                    <Typography variant="h2" id="services-title" className={classes.title}>
                        Wat ik voor je doe
                    </Typography>
                    <Typography className={classes.intro}>
                        Je krijgt alles bij één persoon. Geen helpdesk en geen doorverwijzen: je
                        belt of mailt gewoon met mij.
                    </Typography>
                </Box>
                <Box className={classes.panel}>
                    <Box className={classes.pockets}>
                        {services.map(service => (
                            <Box key={service.title} className={classes.pocket}>
                                <Box className={classes.hem} aria-hidden>
                                    <Seam tone="light" />
                                    <Seam tone="light" />
                                </Box>
                                <Typography variant="h3" className={classes.pocketTitle}>
                                    {service.title}
                                </Typography>
                                <Typography className={classes.pocketText}>
                                    {service.text}
                                </Typography>
                            </Box>
                        ))}
                    </Box>
                </Box>
                <Box className={classes.price}>
                    <Typography className={classes.priceText}>
                        Een website laten maken kan vanaf {websiteFromPrice}, excl. btw.
                    </Typography>
                    <Link component={RouterLink} to={paths.pricing}>
                        Bekijk alle prijzen
                    </Link>
                </Box>
            </PageWidth>
        </Box>
    );
}
