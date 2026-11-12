import { Box, Typography } from '@mui/material';
import { makeStyles } from 'tss-react/mui';

import { onNavyMuted } from 'src/colors';
import CanvasField from 'src/Components/CanvasField/CanvasField';
import PageWidth from 'src/Components/PageWidth/PageWidth';
import { privacyLead, privacySections, privacyTitle, privacyVersion } from 'src/Config/privacy';
import { pageMeta } from 'src/Config/seo';
import { usePageMeta } from 'src/Hooks/usePageMeta';

const useStyles = makeStyles()(theme => ({
    field: {
        paddingTop: theme.spacing(9),
        paddingBottom: theme.spacing(10),
        [theme.breakpoints.down('md')]: {
            paddingTop: theme.spacing(7),
            paddingBottom: theme.spacing(8),
        },
    },
    lead: {
        marginTop: theme.spacing(3),
        maxWidth: '48ch',
        color: onNavyMuted,
    },
    version: {
        marginTop: theme.spacing(3),
        color: onNavyMuted,
    },
    body: {
        paddingBlock: theme.spacing(9),
        [theme.breakpoints.down('md')]: {
            paddingBlock: theme.spacing(7),
        },
    },
    text: {
        display: 'grid',
        gap: theme.spacing(6),
        maxWidth: '68ch',
    },
    section: {
        display: 'grid',
        gap: theme.spacing(2),
    },
}));

export default function Privacy() {
    const { classes } = useStyles();

    usePageMeta(pageMeta.privacy);

    return (
        <>
            <CanvasField component="section" aria-labelledby="page-title" className={classes.field}>
                <PageWidth>
                    <Typography variant="h1" id="page-title">
                        {privacyTitle}
                    </Typography>
                    <Typography variant="subtitle1" className={classes.lead}>
                        {privacyLead}
                    </Typography>
                    <Typography variant="body2" className={classes.version}>
                        {privacyVersion}
                    </Typography>
                </PageWidth>
            </CanvasField>
            <Box component="section" className={classes.body}>
                <PageWidth>
                    <Box className={classes.text}>
                        {privacySections.map(section => (
                            <Box key={section.title} className={classes.section}>
                                <Typography variant="h2">{section.title}</Typography>
                                {section.paragraphs.map(paragraph => (
                                    <Typography key={paragraph}>{paragraph}</Typography>
                                ))}
                            </Box>
                        ))}
                    </Box>
                </PageWidth>
            </Box>
        </>
    );
}
