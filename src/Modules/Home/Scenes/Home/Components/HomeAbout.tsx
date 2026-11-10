import { Box, Link, Typography } from '@mui/material';
import { Link as RouterLink } from 'react-router';
import { makeStyles } from 'tss-react/mui';

import { navy, peachSoft, stitchOnLight } from 'src/colors';
import PageWidth from 'src/Components/PageWidth/PageWidth';
import { paths } from 'src/Config/navigation';
import portraitPlaceholder from 'src/Resources/Images/portrait-placeholder.svg';

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
        gridTemplateColumns: 'minmax(0, 4fr) minmax(0, 7fr)',
        columnGap: theme.spacing(10),
        alignItems: 'center',
        [theme.breakpoints.down('md')]: {
            gridTemplateColumns: '1fr',
            rowGap: theme.spacing(5),
        },
    },
    photoFrame: {
        position: 'relative',
        maxWidth: 400,
        '&::after': {
            content: '""',
            position: 'absolute',
            inset: -12,
            border: `2px dashed ${stitchOnLight}`,
            pointerEvents: 'none',
        },
        [theme.breakpoints.down('md')]: {
            maxWidth: 300,
            marginInline: theme.spacing(1.5),
        },
    },
    photo: {
        display: 'block',
        width: '100%',
        aspectRatio: '4 / 5',
        objectFit: 'cover',
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
