import { Box, Typography } from '@mui/material';
import { makeStyles } from 'tss-react/mui';

import { onNavyMuted } from 'src/colors';
import CanvasField from 'src/Components/CanvasField/CanvasField';
import ContactBand from 'src/Components/ContactBand/ContactBand';
import PageWidth from 'src/Components/PageWidth/PageWidth';

const useStyles = makeStyles()(theme => ({
    field: {
        paddingTop: theme.spacing(14),
        paddingBottom: theme.spacing(9),
        [theme.breakpoints.down('md')]: {
            paddingTop: theme.spacing(9),
            paddingBottom: theme.spacing(6),
        },
    },
    title: {
        maxWidth: '16ch',
    },
    lead: {
        marginTop: theme.spacing(3),
        maxWidth: '40ch',
        color: onNavyMuted,
    },
}));

export default function HomeClose() {
    const { classes } = useStyles();

    return (
        <Box component="section" aria-labelledby="close-title">
            <CanvasField className={classes.field}>
                <PageWidth>
                    <Typography variant="h2" id="close-title" className={classes.title}>
                        Zullen we het eens over je website hebben?
                    </Typography>
                    <Typography variant="subtitle1" className={classes.lead}>
                        Vertel me wat je doet, dan denk ik mee over wat bij je past. Bellen, mailen
                        of een bericht: wat jij het makkelijkst vindt.
                    </Typography>
                </PageWidth>
            </CanvasField>
            <ContactBand label="Neem contact op met Luca" />
        </Box>
    );
}
