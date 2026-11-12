import { Box, Link, Typography } from '@mui/material';
import { Link as RouterLink } from 'react-router';
import { makeStyles } from 'tss-react/mui';

import { navy, peach } from 'src/colors';
import PageWidth from 'src/Components/PageWidth/PageWidth';
import PhotoPatch from 'src/Components/PhotoPatch/PhotoPatch';
import { paths } from 'src/Config/navigation';

// De tekst is nog lorem ipsum tot Luca die aanlevert. Staat als openstaand punt in de launch-checklist.
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
