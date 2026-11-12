import { Box, Link, Typography } from '@mui/material';
import { Link as RouterLink } from 'react-router';
import { makeStyles } from 'tss-react/mui';

import { navy, peach } from 'src/colors';
import PageWidth from 'src/Components/PageWidth/PageWidth';
import PhotoPatch from 'src/Components/PhotoPatch/PhotoPatch';
import { paths } from 'src/Config/navigation';

// De tekst is concept (12-11-2026) tot Luca akkoord geeft. Staat als openstaand punt in de launch-checklist.
const useStyles = makeStyles()(theme => ({
    root: {
        backgroundColor: peach,
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
                    <PhotoPatch />
                    <Box>
                        <Typography variant="h2" id="about-title" className={classes.title}>
                            Ik ben Luca
                        </Typography>
                        <Box className={classes.body}>
                            <Typography>
                                Ik maak websites voor kleine ondernemers en doe het hele traject
                                zelf: ontwerp, bouw, hosting, domein en e-mail. Je hebt één
                                aanspreekpunt, en je kunt me gewoon bellen. Ik bouw websites voor
                                ondernemers die zich liever met hun eigen vak bezighouden. Alles wat
                                daarbij komt kijken, regel ik.
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
