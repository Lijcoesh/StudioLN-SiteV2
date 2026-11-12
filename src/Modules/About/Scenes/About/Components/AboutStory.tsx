import { Box, List, ListItem, Typography } from '@mui/material';
import { makeStyles } from 'tss-react/mui';

import { graphite, navy, peach, stitchOnLight, text, white } from 'src/colors';
import PageWidth from 'src/Components/PageWidth/PageWidth';
import Seam from 'src/Components/Seam/Seam';
import { aboutFacts, aboutFactsTitle, aboutStory, aboutStoryTitle } from 'src/Config/about';
import { tapTarget } from 'src/Theme/sizes';

// Het verhaal op wit: links de tekst in een leeskolom, rechts de losse feitjes op een opgestikte lap
// perzik stof (rondom gestikt, licht scheef, zonder schaduw), regels gescheiden door naden. Onder md
// eerst het verhaal, dan de feitjes.
const useStyles = makeStyles()(theme => ({
    root: {
        backgroundColor: white,
        paddingBlock: theme.spacing(14),
        [theme.breakpoints.down('md')]: {
            paddingBlock: theme.spacing(9),
        },
    },
    grid: {
        display: 'grid',
        gridTemplateColumns: 'minmax(0, 6fr) minmax(0, 5fr)',
        columnGap: theme.spacing(8),
        alignItems: 'start',
        [theme.breakpoints.down('md')]: {
            gridTemplateColumns: 'minmax(0, 1fr)',
            rowGap: theme.spacing(8),
        },
    },
    title: {
        color: navy,
    },
    body: {
        display: 'grid',
        gap: theme.spacing(3),
        marginTop: theme.spacing(4),
        maxWidth: '58ch',
        color: text,
    },
    facts: {
        position: 'relative',
        justifySelf: 'end',
        width: '100%',
        maxWidth: 460,
        marginTop: theme.spacing(1),
        padding: theme.spacing(5, 5, 3),
        backgroundColor: peach,
        transform: 'rotate(1deg)',
        '&::after': {
            content: '""',
            position: 'absolute',
            inset: 8,
            border: `2px dashed ${stitchOnLight}`,
            pointerEvents: 'none',
        },
        [theme.breakpoints.down('md')]: {
            justifySelf: 'start',
            transform: 'rotate(0.6deg)',
        },
        [theme.breakpoints.down('sm')]: {
            padding: theme.spacing(4, 3, 2),
        },
    },
    factsTitle: {
        color: navy,
        paddingBottom: theme.spacing(2),
    },
    list: {
        padding: 0,
    },
    row: {
        position: 'relative',
        display: 'flex',
        alignItems: 'flex-start',
        flexDirection: 'column',
        justifyContent: 'center',
        minHeight: tapTarget,
        paddingBlock: theme.spacing(1.5),
        paddingInline: 0,
    },
    seam: {
        position: 'absolute',
        top: 0,
        left: 0,
    },
    term: {
        fontWeight: 700,
    },
    value: {
        margin: 0,
        color: graphite,
    },
    placeholder: {
        fontStyle: 'italic',
    },
}));

export default function AboutStory() {
    const { classes, cx } = useStyles();

    return (
        <Box component="section" aria-labelledby="about-story-title" className={classes.root}>
            <PageWidth>
                <Box className={classes.grid}>
                    <Box>
                        <Typography variant="h2" id="about-story-title" className={classes.title}>
                            {aboutStoryTitle}
                        </Typography>
                        <Box className={classes.body}>
                            {aboutStory.map(paragraph => (
                                <Typography key={paragraph.slice(0, 24)}>{paragraph}</Typography>
                            ))}
                        </Box>
                    </Box>
                    <Box
                        component="aside"
                        aria-labelledby="about-facts-title"
                        className={classes.facts}
                    >
                        <Typography
                            variant="h3"
                            component="h2"
                            id="about-facts-title"
                            className={classes.factsTitle}
                        >
                            {aboutFactsTitle}
                        </Typography>
                        <List className={classes.list}>
                            {aboutFacts.map((fact, index) => (
                                <ListItem key={`${fact.term}-${index}`} className={classes.row}>
                                    <Seam tone="light" className={classes.seam} />
                                    <Typography
                                        component="span"
                                        className={cx(
                                            classes.term,
                                            fact.placeholder && classes.placeholder,
                                        )}
                                    >
                                        {fact.term}
                                    </Typography>
                                    <Typography
                                        component="span"
                                        variant="body2"
                                        className={cx(
                                            classes.value,
                                            fact.placeholder && classes.placeholder,
                                        )}
                                    >
                                        {fact.value}
                                    </Typography>
                                </ListItem>
                            ))}
                        </List>
                    </Box>
                </Box>
            </PageWidth>
        </Box>
    );
}
