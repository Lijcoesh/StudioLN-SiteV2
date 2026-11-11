import { Box, Typography } from '@mui/material';
import { makeStyles } from 'tss-react/mui';

import { onNavyMuted } from 'src/colors';
import CanvasField from 'src/Components/CanvasField/CanvasField';
import PageWidth from 'src/Components/PageWidth/PageWidth';

// Bovenaan op het canvas onder de pasnaad: kop links, één zin rechts op het 5fr / 6fr-raster.
const useStyles = makeStyles()(theme => ({
    root: {
        paddingTop: theme.spacing(10),
        paddingBottom: theme.spacing(12),
        [theme.breakpoints.down('md')]: {
            paddingTop: theme.spacing(7),
            paddingBottom: theme.spacing(8),
        },
    },
    grid: {
        display: 'grid',
        gridTemplateColumns: 'minmax(0, 5fr) minmax(0, 6fr)',
        columnGap: theme.spacing(8),
        alignItems: 'end',
        [theme.breakpoints.down('md')]: {
            gridTemplateColumns: '1fr',
            rowGap: theme.spacing(3),
        },
    },
    lead: {
        maxWidth: '40ch',
        color: onNavyMuted,
    },
}));

export default function ProjectsIntro() {
    const { classes } = useStyles();

    return (
        <CanvasField component="section" aria-labelledby="projects-title" className={classes.root}>
            <PageWidth>
                <Box className={classes.grid}>
                    <Typography variant="h1" id="projects-title">
                        Wat ik gemaakt heb
                    </Typography>
                    <Typography variant="subtitle1" className={classes.lead}>
                        Elke site hieronder is op maat gemaakt voor één ondernemer. Klik op een
                        project om de site zelf te bekijken.
                    </Typography>
                </Box>
            </PageWidth>
        </CanvasField>
    );
}
