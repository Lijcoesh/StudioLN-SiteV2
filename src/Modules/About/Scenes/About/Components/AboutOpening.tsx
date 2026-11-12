import { Box, Typography } from '@mui/material';
import { makeStyles } from 'tss-react/mui';

import { navy, peach, text } from 'src/colors';
import ContactPatch from 'src/Components/ContactPatch/ContactPatch';
import PageWidth from 'src/Components/PageWidth/PageWidth';
import PhotoPatch from 'src/Components/PhotoPatch/PhotoPatch';
import { aboutLead, aboutTitle } from 'src/Config/about';

import NameBand from './NameBand';

// De opening van Over mij op het perzik vlak: de naamband loopt van rand tot rand direct onder de
// header; rechts ligt de fotolap half over de band, links onder de band de kop, één zin en de
// contactlap. Onder md ligt een kleinere foto rechts over het eind van de band, zodat de kop en de
// lap in het eerste scherm van een telefoon passen.
//
// --name-size zet de naam op de band; de bandhoogte is die maat x 0,9 plus de binnenruimte. De foto
// schuift met dezelfde rekensom omhoog, zodat hij altijd 32px onder de bovenrand van de band begint.
const bandGap = 48;

const useStyles = makeStyles()(theme => ({
    root: {
        '--name-size': 'clamp(4.75rem, 2rem + 10vw, 11.5rem)',
        '--band-height': 'calc(var(--name-size) * 0.9 + 56px)',
        backgroundColor: peach,
        overflowX: 'clip',
        paddingTop: theme.spacing(6),
        paddingBottom: theme.spacing(14),
        [theme.breakpoints.down('md')]: {
            '--band-height': 'calc(var(--name-size) * 0.9 + 40px)',
            paddingTop: theme.spacing(4),
            paddingBottom: theme.spacing(9),
        },
    },
    grid: {
        display: 'grid',
        gridTemplateColumns: 'minmax(0, 7fr) minmax(0, 5fr)',
        columnGap: theme.spacing(8),
        alignItems: 'start',
        marginTop: bandGap,
        [theme.breakpoints.down('md')]: {
            gridTemplateColumns: 'minmax(0, 1fr)',
            rowGap: theme.spacing(5),
            marginTop: theme.spacing(4),
        },
    },
    text: {
        position: 'relative',
        zIndex: 1,
    },
    title: {
        color: navy,
    },
    clause: {
        display: 'block',
    },
    lead: {
        marginTop: theme.spacing(2.5),
        maxWidth: '40ch',
        color: text,
    },
    patch: {
        marginTop: theme.spacing(5),
        maxWidth: 600,
        [theme.breakpoints.down('md')]: {
            marginTop: theme.spacing(4),
        },
    },
    photoColumn: {
        position: 'relative',
        zIndex: 1,
        marginTop: `calc(-1 * (var(--band-height) + ${bandGap}px - 32px))`,
        [theme.breakpoints.down('md')]: {
            order: -1,
            justifySelf: 'end',
            width: 200,
            marginTop: `calc(-1 * (var(--band-height) + ${theme.spacing(4)} - 24px))`,
            marginBottom: theme.spacing(-1),
        },
        [theme.breakpoints.down('sm')]: {
            width: 180,
        },
    },
    photo: {
        transform: 'rotate(2deg)',
        marginInlineStart: 'auto',
        [theme.breakpoints.down('md')]: {
            maxWidth: 'none',
            padding: theme.spacing(1.5),
        },
        [theme.breakpoints.down('sm')]: {
            maxWidth: 'none',
        },
    },
}));

export default function AboutOpening() {
    const { classes } = useStyles();

    return (
        <Box component="section" aria-labelledby="about-title" className={classes.root}>
            <NameBand name="Luca" />
            <PageWidth>
                <Box className={classes.grid}>
                    <Box className={classes.text}>
                        <Typography
                            variant="h2"
                            component="h1"
                            id="about-title"
                            className={classes.title}
                        >
                            {aboutTitle.map(clause => (
                                <Box component="span" key={clause} className={classes.clause}>
                                    {clause}
                                </Box>
                            ))}
                        </Typography>
                        <Typography variant="subtitle1" className={classes.lead}>
                            {aboutLead}
                        </Typography>
                        <ContactPatch className={classes.patch} />
                    </Box>
                    <Box className={classes.photoColumn}>
                        <PhotoPatch withNameTape={false} className={classes.photo} />
                    </Box>
                </Box>
            </PageWidth>
        </Box>
    );
}
