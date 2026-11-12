import { Box, Typography } from '@mui/material';
import { makeStyles } from 'tss-react/mui';

import { navy, text, white } from 'src/colors';
import PageWidth from 'src/Components/PageWidth/PageWidth';
import PhotoPatch from 'src/Components/PhotoPatch/PhotoPatch';
import { storyBody, storyClose, storyTurn } from 'src/Config/story';

// De wending in Luca's tekst, op wit, op het 5fr / 6fr-raster: links de kop met daaronder Luca's
// foto op de lap (wie hier "ik" zegt), rechts de tekst. De zin met nadruk en de slotzin staan in
// Bree Serif, zodat ze als zijn eigen stem boven de lopende tekst uitkomen. Onder md één kolom:
// kop, foto, tekst.
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
        gridTemplateRows: 'auto 1fr',
        gridTemplateAreas: '"turn body" "photo body"',
        columnGap: theme.spacing(8),
        alignItems: 'start',
        [theme.breakpoints.down('md')]: {
            gridTemplateColumns: 'minmax(0, 1fr)',
            gridTemplateRows: 'auto',
            gridTemplateAreas: '"turn" "photo" "body"',
        },
    },
    turn: {
        gridArea: 'turn',
        color: navy,
        maxWidth: '12ch',
    },
    photo: {
        gridArea: 'photo',
        maxWidth: 340,
        marginTop: theme.spacing(7),
        [theme.breakpoints.down('md')]: {
            maxWidth: 300,
            marginTop: theme.spacing(5),
            marginBottom: theme.spacing(6),
        },
        [theme.breakpoints.down('sm')]: {
            maxWidth: 260,
        },
    },
    body: {
        gridArea: 'body',
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
                    <PhotoPatch className={classes.photo} />
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
