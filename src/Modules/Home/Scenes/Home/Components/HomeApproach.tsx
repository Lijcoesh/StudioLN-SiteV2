import { Box, Link, Typography } from '@mui/material';
import { Link as RouterLink } from 'react-router';
import { makeStyles } from 'tss-react/mui';

import { onNavy, peach } from 'src/colors';
import CanvasField from 'src/Components/CanvasField/CanvasField';
import PageWidth from 'src/Components/PageWidth/PageWidth';
import Seam from 'src/Components/Seam/Seam';
import { paths } from 'src/Config/navigation';

// De kern van Luca's tekst "Simpel, maar nooit standaard." als groot moment op het canvas,
// met dezelfde tweekleurige kop als de hero. Kop en tekst delen één linkerkant; de tekst
// staat op lead-maat zodat hij bij de kop hoort. De volledige tekst staat op Werkwijze.
const useStyles = makeStyles()(theme => ({
    field: {
        position: 'relative',
        paddingTop: theme.spacing(16),
        paddingBottom: theme.spacing(16),
        [theme.breakpoints.down('md')]: {
            paddingTop: theme.spacing(10),
            paddingBottom: theme.spacing(10),
        },
    },
    seam: {
        position: 'absolute',
        top: 12,
        left: 0,
    },
    title: {
        color: onNavy,
    },
    second: {
        display: 'block',
        color: peach,
    },
    text: {
        display: 'grid',
        gap: theme.spacing(2.5),
        maxWidth: '44ch',
        marginTop: theme.spacing(6),
        color: onNavy,
        [theme.breakpoints.down('md')]: {
            marginTop: theme.spacing(4),
        },
    },
    link: {
        justifySelf: 'start',
        marginTop: theme.spacing(1.5),
    },
}));

export default function HomeApproach() {
    const { classes } = useStyles();

    return (
        <CanvasField component="section" aria-labelledby="approach-title" className={classes.field}>
            <Seam tone="navy" className={classes.seam} />
            <PageWidth>
                <Typography
                    variant="h1"
                    component="h2"
                    id="approach-title"
                    className={classes.title}
                >
                    Simpel,{' '}
                    <Box component="span" className={classes.second}>
                        maar nooit standaard.
                    </Box>
                </Typography>
                <Box className={classes.text}>
                    <Typography variant="subtitle1">
                        Veel websites lijken tegenwoordig verdacht veel op elkaar, alsof ze uit
                        hetzelfde sjabloon komen. Bij StudioLN doe ik dat liever anders.
                    </Typography>
                    <Typography variant="subtitle1">
                        Ik gebruik AI als hulpmiddel. Daardoor werk ik sneller en blijven mijn
                        prijzen betaalbaar. Maar de keuzes in je website maak ik zelf: in vorm,
                        kleur en indeling, voor jouw zaak en jouw klanten.
                    </Typography>
                    <Link component={RouterLink} to={paths.approach} className={classes.link}>
                        Lees hoe ik werk
                    </Link>
                </Box>
            </PageWidth>
        </CanvasField>
    );
}
