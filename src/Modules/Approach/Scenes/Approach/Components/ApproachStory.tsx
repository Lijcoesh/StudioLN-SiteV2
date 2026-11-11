import { Box, Typography } from '@mui/material';
import { makeStyles } from 'tss-react/mui';

import { navy, text, white } from 'src/colors';
import PageWidth from 'src/Components/PageWidth/PageWidth';
import { storyBody, storyClose, storyTurn } from 'src/Config/story';
import { headerHeight } from 'src/Theme/sizes';

// De wending in Luca's tekst, op wit: de kop links (blijft staan tijdens het lezen), de tekst
// rechts op het 5fr / 6fr-raster. De zin met nadruk en de slotzin staan in Bree Serif, zodat ze
// als zijn eigen stem boven de lopende tekst uitkomen.
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
        gridTemplateColumns: 'minmax(0, 5fr) minmax(0, 6fr)',
        columnGap: theme.spacing(8),
        alignItems: 'start',
        [theme.breakpoints.down('md')]: {
            gridTemplateColumns: '1fr',
            rowGap: theme.spacing(4),
        },
    },
    // Vanaf lg blijft de kop naast de tekst staan die hij inleidt
    turn: {
        color: navy,
        maxWidth: '12ch',
        position: 'sticky',
        top: headerHeight + 32,
        [theme.breakpoints.down('lg')]: {
            position: 'static',
        },
    },
    body: {
        display: 'grid',
        rowGap: theme.spacing(3),
        maxWidth: '58ch',
        color: text,
        paddingTop: theme.spacing(1),
        [theme.breakpoints.down('md')]: {
            paddingTop: 0,
        },
    },
    emphasis: {
        color: navy,
        marginBlock: theme.spacing(1.5),
        textWrap: 'balance',
    },
    close: {
        color: navy,
        marginTop: theme.spacing(4),
        textWrap: 'balance',
    },
}));

export default function ApproachStory() {
    const { classes } = useStyles();

    return (
        <Box component="section" aria-labelledby="approach-turn" className={classes.root}>
            <PageWidth>
                <Box className={classes.grid}>
                    <Typography variant="h2" id="approach-turn" className={classes.turn}>
                        {storyTurn}
                    </Typography>
                    <Box className={classes.body}>
                        {storyBody.map(paragraph =>
                            paragraph.emphasis ? (
                                <Typography
                                    key={paragraph.text}
                                    variant="h3"
                                    component="p"
                                    className={classes.emphasis}
                                >
                                    {paragraph.text}
                                </Typography>
                            ) : (
                                <Typography key={paragraph.text}>{paragraph.text}</Typography>
                            ),
                        )}
                        <Typography variant="h3" component="p" className={classes.close}>
                            {storyClose}
                        </Typography>
                    </Box>
                </Box>
            </PageWidth>
        </Box>
    );
}
