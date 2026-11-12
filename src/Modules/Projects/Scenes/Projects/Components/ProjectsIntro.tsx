import { Box, Link, Typography } from '@mui/material';
import { makeStyles } from 'tss-react/mui';

import { onNavyMuted, peach } from 'src/colors';
import CanvasField from 'src/Components/CanvasField/CanvasField';
import PageWidth from 'src/Components/PageWidth/PageWidth';
import { projects } from 'src/Config/projects';

// Bovenaan op het canvas onder de pasnaad: kop links, rechts één zin en de live adressen
// op het 5fr / 6fr-raster.
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
        alignItems: 'center',
        [theme.breakpoints.down('md')]: {
            gridTemplateColumns: '1fr',
            rowGap: theme.spacing(3),
        },
    },
    lead: {
        maxWidth: '40ch',
        color: onNavyMuted,
    },
    sites: {
        display: 'flex',
        flexWrap: 'wrap',
        gap: theme.spacing(1, 3.5),
        marginTop: theme.spacing(3),
    },
    site: {
        color: peach,
    },
}));

export default function ProjectsIntro() {
    const { classes } = useStyles();

    return (
        <CanvasField component="section" aria-labelledby="projects-title" className={classes.root}>
            <PageWidth>
                <Box className={classes.grid}>
                    <Typography variant="h1" id="projects-title">
                        Projecten
                    </Typography>
                    <Box>
                        <Typography variant="subtitle1" className={classes.lead}>
                            Dit zijn sites van echte ondernemers, door mij gebouwd. Ze staan
                            allemaal online: klik door en kijk zelf.
                        </Typography>
                        <Box className={classes.sites}>
                            {projects.map(project => (
                                <Link
                                    key={project.slug}
                                    href={`https://${project.domain}`}
                                    target="_blank"
                                    rel="noopener"
                                    className={classes.site}
                                >
                                    {project.domain}
                                </Link>
                            ))}
                        </Box>
                    </Box>
                </Box>
            </PageWidth>
        </CanvasField>
    );
}
