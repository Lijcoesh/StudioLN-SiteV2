import { Box, Link, Typography } from '@mui/material';
import { Link as RouterLink } from 'react-router';
import { makeStyles } from 'tss-react/mui';

import { onNavy, peach } from 'src/colors';
import CanvasField from 'src/Components/CanvasField/CanvasField';
import PageWidth from 'src/Components/PageWidth/PageWidth';
import Seam from 'src/Components/Seam/Seam';
import { paths } from 'src/Config/navigation';

// Variant: "Simpel, maar nooit standaard." gecentreerd als rustpunt, met alleen Luca's
// slotzin uit de Werkwijze-tekst eronder. De volledige tekst staat op Werkwijze.
const useStyles = makeStyles()(theme => ({
    field: {
        position: 'relative',
        paddingTop: theme.spacing(18),
        paddingBottom: theme.spacing(18),
        textAlign: 'center',
        [theme.breakpoints.down('md')]: {
            paddingTop: theme.spacing(11),
            paddingBottom: theme.spacing(11),
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
        maxWidth: '36ch',
        marginTop: theme.spacing(5),
        marginInline: 'auto',
        color: onNavy,
        textWrap: 'balance',
        [theme.breakpoints.down('md')]: {
            marginTop: theme.spacing(4),
        },
    },
    link: {
        display: 'inline-block',
        marginTop: theme.spacing(4),
    },
}));

export default function HomeApproachCentered() {
    const { classes } = useStyles();

    return (
        <CanvasField
            component="section"
            aria-labelledby="approach-centered-title"
            className={classes.field}
        >
            <Seam tone="navy" className={classes.seam} />
            <PageWidth>
                <Typography
                    variant="h1"
                    component="h2"
                    id="approach-centered-title"
                    className={classes.title}
                >
                    Simpel,{' '}
                    <Box component="span" className={classes.second}>
                        maar nooit standaard.
                    </Box>
                </Typography>
                <Typography variant="subtitle1" className={classes.text}>
                    De efficiëntie van AI, gecombineerd met mijn eigen oog voor design. Zo ontstaat
                    een website met een eigen karakter.
                </Typography>
                <Link component={RouterLink} to={paths.approach} className={classes.link}>
                    Lees hoe ik werk
                </Link>
            </PageWidth>
        </CanvasField>
    );
}
