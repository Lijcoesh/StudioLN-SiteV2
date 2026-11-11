import { Box, Link, Typography } from '@mui/material';
import { Link as RouterLink } from 'react-router';
import { makeStyles } from 'tss-react/mui';

import { onNavy, peach } from 'src/colors';
import CanvasField from 'src/Components/CanvasField/CanvasField';
import PageWidth from 'src/Components/PageWidth/PageWidth';
import Seam from 'src/Components/Seam/Seam';
import { paths } from 'src/Config/navigation';

// De kern van Luca's tekst "Simpel, maar nooit standaard." als groot moment op het canvas,
// met dezelfde tweekleurige kop als de hero. De volledige tekst staat op Werkwijze.
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
    // Tekst hangt aan dezelfde 6fr-kolom als de intro boven het binnenlabel
    body: {
        display: 'grid',
        gridTemplateColumns: 'minmax(0, 5fr) minmax(0, 6fr)',
        columnGap: theme.spacing(8),
        marginTop: theme.spacing(7),
        [theme.breakpoints.down('md')]: {
            gridTemplateColumns: '1fr',
            marginTop: theme.spacing(5),
        },
    },
    text: {
        gridColumn: 2,
        display: 'grid',
        gap: theme.spacing(2.5),
        maxWidth: '52ch',
        [theme.breakpoints.down('md')]: {
            gridColumn: 1,
        },
    },
    link: {
        justifySelf: 'start',
        marginTop: theme.spacing(1),
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
                <Box className={classes.body}>
                    <Box className={classes.text}>
                        <Typography>
                            Veel websites lijken tegenwoordig verdacht veel op elkaar, alsof ze uit
                            hetzelfde sjabloon komen. Bij StudioLN doe ik dat liever anders.
                        </Typography>
                        <Typography>
                            Ik gebruik AI als hulpmiddel. Daardoor werk ik sneller en blijven mijn
                            prijzen betaalbaar. Maar de keuzes in je website maak ik zelf: in vorm,
                            kleur en indeling, voor jouw zaak en jouw klanten.
                        </Typography>
                        <Link component={RouterLink} to={paths.approach} className={classes.link}>
                            Lees hoe ik werk
                        </Link>
                    </Box>
                </Box>
            </PageWidth>
        </CanvasField>
    );
}
