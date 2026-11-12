import { Box, Typography } from '@mui/material';
import { makeStyles } from 'tss-react/mui';

import { onNavyMuted } from 'src/colors';
import CanvasField from 'src/Components/CanvasField/CanvasField';
import ContactPatch from 'src/Components/ContactPatch/ContactPatch';
import PageWidth from 'src/Components/PageWidth/PageWidth';
import Seam from 'src/Components/Seam/Seam';

interface IProps {
    title: string;
    lead: string;
    titleId: string;
}

// De afsluiting van een pagina op het canvas: geen tweede baan over de volle breedte, maar kop
// links en de oranje contactlap rechts. Onderaan begrenst een naad de overgang naar de footer.
const useStyles = makeStyles()(theme => ({
    field: {
        paddingTop: theme.spacing(14),
        [theme.breakpoints.down('md')]: {
            paddingTop: theme.spacing(9),
        },
    },
    hem: {
        display: 'block',
        marginTop: theme.spacing(14),
        [theme.breakpoints.down('md')]: {
            marginTop: theme.spacing(9),
        },
    },
    grid: {
        display: 'grid',
        gridTemplateColumns: '5fr 6fr',
        columnGap: theme.spacing(8),
        alignItems: 'center',
        [theme.breakpoints.down('lg')]: {
            gridTemplateColumns: '1fr',
            rowGap: theme.spacing(6),
        },
    },
    title: {
        maxWidth: '14ch',
        textWrap: 'balance',
    },
    lead: {
        marginTop: theme.spacing(3),
        maxWidth: '36ch',
        color: onNavyMuted,
    },
}));

export default function SiteClose(props: IProps) {
    const { title, lead, titleId } = props;

    const { classes } = useStyles();

    return (
        <CanvasField component="section" aria-labelledby={titleId} className={classes.field}>
            <PageWidth>
                <Box className={classes.grid}>
                    <Box>
                        <Typography variant="h2" id={titleId} className={classes.title}>
                            {title}
                        </Typography>
                        <Typography variant="subtitle1" className={classes.lead}>
                            {lead}
                        </Typography>
                    </Box>
                    <ContactPatch />
                </Box>
                <Seam tone="navy" className={classes.hem} />
            </PageWidth>
        </CanvasField>
    );
}
