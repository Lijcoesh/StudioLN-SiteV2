import { Box, Link, Typography } from '@mui/material';
import { Link as RouterLink } from 'react-router';
import { makeStyles } from 'tss-react/mui';

import { navy, peach, peachSoft, stitchOnLight } from 'src/colors';
import PageWidth from 'src/Components/PageWidth/PageWidth';
import { paths } from 'src/Config/navigation';
import portraitPlaceholder from 'src/Resources/Images/portrait-placeholder.svg';

import NameTape from './NameTape';

// Placeholderfoto en lorem ipsum op verzoek van Luca (10-11-2026), tot hij zijn eigen foto en tekst aanlevert.
// Staat als openstaand punt in de launch-checklist.
const useStyles = makeStyles()(theme => ({
    root: {
        backgroundColor: peachSoft,
        paddingBlock: theme.spacing(14),
        [theme.breakpoints.down('md')]: {
            paddingBlock: theme.spacing(9),
        },
    },
    grid: {
        display: 'grid',
        gridTemplateColumns: 'minmax(0, 5fr) minmax(0, 6fr)',
        columnGap: theme.spacing(10),
        alignItems: 'center',
        [theme.breakpoints.down('md')]: {
            gridTemplateColumns: '1fr',
            rowGap: theme.spacing(7),
        },
    },
    // De foto zit groot op een opgestikt stuk perzik stof, licht scheef aangezet. Over de
    // onderhoek is een naamband gestikt.
    photoFrame: {
        position: 'relative',
        maxWidth: 480,
        padding: theme.spacing(2.5),
        backgroundColor: peach,
        transform: 'rotate(-1.5deg)',
        '&::after': {
            content: '""',
            position: 'absolute',
            inset: 8,
            border: `2px dashed ${stitchOnLight}`,
            pointerEvents: 'none',
        },
        [theme.breakpoints.down('md')]: {
            maxWidth: 360,
        },
        [theme.breakpoints.down('sm')]: {
            maxWidth: 'calc(100% - 24px)',
        },
    },
    photo: {
        display: 'block',
        width: '100%',
        aspectRatio: '4 / 5',
        objectFit: 'cover',
    },
    nameTape: {
        position: 'absolute',
        zIndex: 1,
        right: theme.spacing(-3),
        bottom: theme.spacing(5),
        transform: 'rotate(3deg)',
    },
    title: {
        color: navy,
        marginBottom: theme.spacing(3),
    },
    body: {
        display: 'grid',
        gap: theme.spacing(2.5),
        maxWidth: '58ch',
    },
    link: {
        justifySelf: 'start',
        marginTop: theme.spacing(1),
    },
}));

export default function HomeAbout() {
    const { classes } = useStyles();

    return (
        <Box component="section" aria-labelledby="about-title" className={classes.root}>
            <PageWidth>
                <Box className={classes.grid}>
                    <Box className={classes.photoFrame}>
                        <Box
                            component="img"
                            src={portraitPlaceholder}
                            alt="Plaatshouder: hier komt een foto van Luca"
                            className={classes.photo}
                        />
                        <NameTape name="Luca" className={classes.nameTape} />
                    </Box>
                    <Box>
                        <Typography variant="h2" id="about-title" className={classes.title}>
                            Ik ben Luca
                        </Typography>
                        <Box className={classes.body}>
                            <Typography>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                                ad minim veniam, quis nostrud exercitation ullamco laboris.
                            </Typography>
                            <Typography>
                                Duis aute irure dolor in reprehenderit in voluptate velit esse
                                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                                cupidatat non proident.
                            </Typography>
                            <Link component={RouterLink} to={paths.about} className={classes.link}>
                                Meer over mij
                            </Link>
                        </Box>
                    </Box>
                </Box>
            </PageWidth>
        </Box>
    );
}
