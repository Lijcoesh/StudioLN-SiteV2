import { Box, List, ListItem } from '@mui/material';
import { makeStyles } from 'tss-react/mui';

import { peach } from 'src/colors';
import PageWidth from 'src/Components/PageWidth/PageWidth';
import SiteClose from 'src/Components/SiteClose/SiteClose';
import { projects } from 'src/Config/projects';
import { useDocumentTitle } from 'src/Hooks/useDocumentTitle';

import ProjectsIntro from './Components/ProjectsIntro';
import ProjectStrip from './Components/ProjectStrip';

const useStyles = makeStyles()(theme => ({
    work: {
        backgroundColor: peach,
        paddingBlock: theme.spacing(14),
        [theme.breakpoints.down('md')]: {
            paddingBlock: theme.spacing(9),
        },
    },
    list: {
        display: 'grid',
        rowGap: theme.spacing(6),
        padding: 0,
        [theme.breakpoints.down('md')]: {
            rowGap: theme.spacing(5),
        },
    },
}));

export default function Projects() {
    useDocumentTitle('Projecten');
    const { classes } = useStyles();

    return (
        <>
            <ProjectsIntro />
            <Box component="section" aria-labelledby="projects-title" className={classes.work}>
                <PageWidth>
                    <List className={classes.list}>
                        {projects.map((project, index) => (
                            <ListItem key={project.slug} disablePadding sx={{ display: 'block' }}>
                                <ProjectStrip
                                    project={project}
                                    eager={index === 0}
                                    tilt={index % 2 ? 'right' : 'left'}
                                />
                            </ListItem>
                        ))}
                    </List>
                </PageWidth>
            </Box>
            <SiteClose
                titleId="projects-close-title"
                title="Wil je een site die bij jouw bedrijf past?"
                lead="Vertel me wat je doet en wat je zoekt. Bellen, mailen of een bericht: wat jij het makkelijkst vindt."
            />
        </>
    );
}
