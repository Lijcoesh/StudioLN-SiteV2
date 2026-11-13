import { Box, Typography } from '@mui/material';
import { makeStyles } from 'tss-react/mui';

import { onNavyMuted } from 'src/colors';
import CanvasField from 'src/Components/CanvasField/CanvasField';
import PageWidth from 'src/Components/PageWidth/PageWidth';
import { extraItems, oneOffItems } from 'src/Config/pricing';

import Pocket from './Pocket';

// Bovenaan, op het marineblauwe canvas onder de pasnaad van de header: de kop, en daaronder wat
// je eenmalig betaalt en wat los erbij kan, in twee opgestikte zakken van ongelijke maat.
const useStyles = makeStyles()(theme => ({
    root: {
        paddingTop: theme.spacing(10),
        paddingBottom: theme.spacing(14),
        [theme.breakpoints.down('md')]: {
            paddingTop: theme.spacing(7),
            paddingBottom: theme.spacing(9),
        },
    },
    lead: {
        marginTop: theme.spacing(3),
        maxWidth: '44ch',
        color: onNavyMuted,
    },
    pockets: {
        display: 'grid',
        gridTemplateColumns: 'minmax(0, 7fr) minmax(0, 5fr)',
        columnGap: theme.spacing(8),
        alignItems: 'start',
        marginTop: theme.spacing(8),
        [theme.breakpoints.down('md')]: {
            gridTemplateColumns: '1fr',
            rowGap: theme.spacing(6),
            marginTop: theme.spacing(6),
        },
    },
    oneOff: {
        transform: 'rotate(-1deg)',
        [theme.breakpoints.down('md')]: {
            transform: 'rotate(-0.6deg)',
        },
    },
    extra: {
        marginTop: theme.spacing(10),
        transform: 'rotate(1.2deg)',
        [theme.breakpoints.down('md')]: {
            marginTop: 0,
            transform: 'rotate(0.6deg)',
        },
    },
}));

export default function PricingIntro() {
    const { classes } = useStyles();

    return (
        <CanvasField component="section" aria-labelledby="pricing-title" className={classes.root}>
            <PageWidth>
                <Typography variant="h1" id="pricing-title">
                    Wat het kost
                </Typography>
                <Typography variant="subtitle1" className={classes.lead}>
                    Wat je eenmalig betaalt, wat je per maand betaalt en wat je extra kunt kiezen.
                    Alle bedragen zijn exclusief btw.
                </Typography>
                <Box className={classes.pockets}>
                    <Pocket
                        titleId="one-off-title"
                        title="Eenmalig"
                        intro="Voor het maken en online zetten van je website, en je e-mail."
                        items={oneOffItems}
                        className={classes.oneOff}
                    />
                    <Pocket
                        titleId="extra-title"
                        title="Los erbij"
                        intro="Wat je naast een pakket kunt nemen wanneer je het nodig hebt."
                        items={extraItems}
                        className={classes.extra}
                    />
                </Box>
            </PageWidth>
        </CanvasField>
    );
}
