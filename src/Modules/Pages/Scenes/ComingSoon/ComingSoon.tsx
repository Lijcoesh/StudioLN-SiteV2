import { Box, Link, Typography } from '@mui/material';
import { Link as RouterLink } from 'react-router';
import { makeStyles } from 'tss-react/mui';

import { onNavyMuted } from 'src/colors';
import CanvasField from 'src/Components/CanvasField/CanvasField';
import ContactBand from 'src/Components/ContactBand/ContactBand';
import PageWidth from 'src/Components/PageWidth/PageWidth';
import { paths } from 'src/Config/navigation';
import { useDocumentTitle } from 'src/Hooks/useDocumentTitle';

interface IProps {
    title: string;
    message?: string;
}

// Tijdelijke pagina voor routes die nog gebouwd worden (Werkwijze, Prijzen, Projecten, Over mij, Contact, Privacy).
const useStyles = makeStyles()(theme => ({
    field: {
        paddingTop: theme.spacing(9),
        paddingBottom: theme.spacing(12),
    },
    lead: {
        marginTop: theme.spacing(3),
        marginBottom: theme.spacing(4),
        maxWidth: '40ch',
        color: onNavyMuted,
    },
}));

export default function ComingSoon(props: IProps) {
    const {
        title,
        message = 'Aan deze pagina werk ik nog. Wil je nu al iets weten? Bel of mail me gerust.',
    } = props;

    const { classes } = useStyles();

    useDocumentTitle(title);

    return (
        <Box component="section" aria-labelledby="page-title">
            <CanvasField className={classes.field}>
                <PageWidth>
                    <Typography variant="h1" id="page-title">
                        {title}
                    </Typography>
                    <Typography variant="subtitle1" className={classes.lead}>
                        {message}
                    </Typography>
                    <Link component={RouterLink} to={paths.home}>
                        Terug naar de homepagina
                    </Link>
                </PageWidth>
            </CanvasField>
            <ContactBand label="Neem contact op" />
        </Box>
    );
}
