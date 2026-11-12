import { Box, Typography } from '@mui/material';
import { makeStyles } from 'tss-react/mui';

import { navy, peach, text } from 'src/colors';
import PageWidth from 'src/Components/PageWidth/PageWidth';
import { responsePromise } from 'src/Config/contactForm';
import { pageMeta } from 'src/Config/seo';
import { usePageMeta } from 'src/Hooks/usePageMeta';

import ContactCard from './Components/ContactCard';
import ContactForm from './Components/ContactForm';

// Contact: alles op het perzik vlak, direct onder de header. Links de kop met de belofte en daaronder
// Luca's visitekaartje aan een draad (bellen, mailen); rechts het formulier in een opgestikte zak.
// Drie gelijke routes, dus geen afsluiting met de contactlap. Onder md alles onder elkaar: kop,
// kaartje, formulier.
const useStyles = makeStyles()(theme => ({
    root: {
        backgroundColor: peach,
        paddingTop: theme.spacing(10),
        paddingBottom: theme.spacing(16),
        [theme.breakpoints.down('md')]: {
            paddingTop: theme.spacing(7),
            paddingBottom: theme.spacing(10),
        },
    },
    grid: {
        display: 'grid',
        gridTemplateColumns: 'minmax(0, 5fr) minmax(0, 6fr)',
        columnGap: theme.spacing(8),
        alignItems: 'start',
        [theme.breakpoints.down('md')]: {
            gridTemplateColumns: 'minmax(0, 1fr)',
            rowGap: theme.spacing(7),
        },
    },
    title: {
        color: navy,
        fontSize: 'clamp(2.75rem, 1.6rem + 3.4vw, 4.75rem)',
        maxWidth: '11ch',
    },
    lead: {
        marginTop: theme.spacing(2.5),
        maxWidth: '30ch',
        color: text,
    },
    card: {
        marginTop: theme.spacing(4),
        [theme.breakpoints.down('md')]: {
            marginTop: theme.spacing(3),
        },
    },
}));

export default function Contact() {
    usePageMeta(pageMeta.contact);
    const { classes } = useStyles();

    return (
        <Box component="section" aria-labelledby="contact-title" className={classes.root}>
            <PageWidth>
                <Box className={classes.grid}>
                    <Box>
                        <Typography variant="h1" id="contact-title" className={classes.title}>
                            Bel, mail of stuur een bericht.
                        </Typography>
                        <Typography variant="subtitle1" className={classes.lead}>
                            Wat jij het makkelijkst vindt. {responsePromise}
                        </Typography>
                        <Box className={classes.card}>
                            <ContactCard />
                        </Box>
                    </Box>
                    <ContactForm />
                </Box>
            </PageWidth>
        </Box>
    );
}
