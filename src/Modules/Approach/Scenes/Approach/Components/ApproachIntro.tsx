import { Box, Typography } from '@mui/material';
import { makeStyles } from 'tss-react/mui';

import { graphite, label, onNavy, peach } from 'src/colors';
import CanvasField from 'src/Components/CanvasField/CanvasField';
import PageWidth from 'src/Components/PageWidth/PageWidth';
import { storyIntro } from 'src/Config/story';
import { templateBarLabel } from 'src/Config/templatePatterns';
import { fabricShadow } from 'src/Theme/shadow';

import TemplateSiteLight from './TemplateSiteLight';

// Bovenaan op het canvas, net als het blok op Home: dezelfde tweekleurige kop over de volle
// breedte, hier als h1, en daaronder het begin van Luca's tekst (het probleem) als één kolom op
// lead-maat. Vanaf lg hangt rechts naast de tekst een eerste verzonnen voorbeeld: een nette, lichte
// vakmansite volgens hetzelfde recept, als los afdrukje op het canvas (zware stof-op-stof-schaduw).
// Onder lg valt het weg; de paskamer eronder laat het recept dan zien.
const useStyles = makeStyles()(theme => ({
    root: {
        paddingTop: theme.spacing(10),
        paddingBottom: theme.spacing(12),
        [theme.breakpoints.down('md')]: {
            paddingTop: theme.spacing(7),
            paddingBottom: theme.spacing(8),
        },
    },
    second: {
        display: 'block',
        color: peach,
    },
    body: {
        display: 'grid',
        gridTemplateColumns: 'minmax(0, 5fr) minmax(0, 6fr)',
        columnGap: theme.spacing(8),
        alignItems: 'start',
        marginTop: theme.spacing(6),
        [theme.breakpoints.down('lg')]: {
            gridTemplateColumns: 'minmax(0, 1fr)',
        },
        [theme.breakpoints.down('md')]: {
            marginTop: theme.spacing(4),
        },
    },
    intro: {
        display: 'grid',
        rowGap: theme.spacing(2.5),
        maxWidth: '44ch',
        color: onNavy,
    },
    print: {
        marginTop: theme.spacing(1),
        backgroundColor: label,
        boxShadow: fabricShadow,
        transform: 'rotate(1.2deg)',
        [theme.breakpoints.down('lg')]: {
            display: 'none',
        },
    },
    bar: {
        display: 'flex',
        alignItems: 'center',
        height: 36,
        paddingInline: theme.spacing(2),
        color: graphite,
        fontSize: '0.9375rem',
        lineHeight: 1,
    },
}));

export default function ApproachIntro() {
    const { classes } = useStyles();

    return (
        <CanvasField component="section" aria-labelledby="approach-title" className={classes.root}>
            <PageWidth>
                <Typography variant="h1" id="approach-title">
                    Simpel,{' '}
                    <Box component="span" className={classes.second}>
                        maar nooit standaard.
                    </Box>
                </Typography>
                <Box className={classes.body}>
                    <Box className={classes.intro}>
                        {storyIntro.map(paragraph => (
                            <Typography key={paragraph} variant="subtitle1">
                                {paragraph}
                            </Typography>
                        ))}
                    </Box>
                    <Box className={classes.print}>
                        <Box className={classes.bar} aria-hidden>
                            {templateBarLabel}
                        </Box>
                        <TemplateSiteLight />
                    </Box>
                </Box>
            </PageWidth>
        </CanvasField>
    );
}
