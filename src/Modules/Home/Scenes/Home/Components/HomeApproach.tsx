import { Box, Link, Typography } from '@mui/material';
import { Link as RouterLink } from 'react-router';
import { makeStyles } from 'tss-react/mui';

import { navy } from 'src/colors';
import PageWidth from 'src/Components/PageWidth/PageWidth';
import { paths } from 'src/Config/navigation';

// De kern van Luca's tekst "Simpel, maar nooit standaard."; de volledige tekst staat op Werkwijze.
const useStyles = makeStyles()(theme => ({
    root: {
        paddingBottom: theme.spacing(14),
        [theme.breakpoints.down('md')]: {
            paddingBottom: theme.spacing(9),
        },
    },
    grid: {
        display: 'grid',
        gridTemplateColumns: 'minmax(0, 5fr) minmax(0, 6fr)',
        columnGap: theme.spacing(8),
        paddingTop: theme.spacing(4),
        [theme.breakpoints.down('md')]: {
            gridTemplateColumns: '1fr',
            rowGap: theme.spacing(3),
            paddingTop: theme.spacing(2),
        },
    },
    title: {
        color: navy,
        maxWidth: '11ch',
    },
    body: {
        display: 'grid',
        gap: theme.spacing(2.5),
        maxWidth: '58ch',
        paddingTop: theme.spacing(1),
    },
    link: {
        justifySelf: 'start',
        marginTop: theme.spacing(1),
    },
}));

export default function HomeApproach() {
    const { classes } = useStyles();

    return (
        <Box component="section" aria-labelledby="approach-title" className={classes.root}>
            <PageWidth>
                <Box className={classes.grid}>
                    <Typography variant="h2" id="approach-title" className={classes.title}>
                        Simpel, maar nooit standaard.
                    </Typography>
                    <Box className={classes.body}>
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
        </Box>
    );
}
