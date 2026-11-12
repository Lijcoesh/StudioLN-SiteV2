import { Box, Link, Typography } from '@mui/material';
import { useEffect, useRef } from 'react';
import { Link as RouterLink } from 'react-router';
import { makeStyles } from 'tss-react/mui';

import { graphite, navy, text, white } from 'src/colors';
import Seam from 'src/Components/Seam/Seam';
import { contactFormText } from 'src/Config/contactForm';
import { paths } from 'src/Config/navigation';
import type { ContactValues } from 'src/Modules/Contact/Scenes/Contact/Hooks/useContactForm';
import { fabricShadowLight } from 'src/Theme/shadow';

interface IProps {
    firstName: string;
    values: ContactValues;
    onAgain: () => void;
}

// Gelukt: de zak blijft even vol als met het formulier erin. Er zit nu een doorslag in van wat de
// bezoeker stuurde: een los wit papiertje, van hetzelfde karton als het visitekaartje en daarom
// met de lichte stof-op-stof-schaduw, licht scheef tegen de draaiing van de zak in. Daaronder in
// gewone zinnen wat hij nu kan doen: nog iets sturen, of intussen rondkijken.
const useStyles = makeStyles()(theme => ({
    title: {
        color: navy,
        marginBottom: theme.spacing(1.5),
        '&:focus': {
            outline: 'none',
        },
    },
    note: {
        maxWidth: '40ch',
    },
    slip: {
        margin: theme.spacing(4, 0, 0),
        padding: theme.spacing(4, 4, 3),
        backgroundColor: white,
        boxShadow: fabricShadowLight,
        transform: 'rotate(-1.6deg)',
        [theme.breakpoints.down('sm')]: {
            padding: theme.spacing(3, 2.5, 2.5),
            transform: 'rotate(-1deg)',
        },
    },
    slipTitle: {
        color: navy,
        marginBottom: theme.spacing(1.5),
    },
    message: {
        color: text,
        margin: 0,
        whiteSpace: 'pre-wrap',
        overflowWrap: 'anywhere',
        maxWidth: '62ch',
    },
    from: {
        display: 'grid',
        gridTemplateColumns: 'auto minmax(0, 1fr)',
        columnGap: theme.spacing(2),
        margin: theme.spacing(2, 0, 0),
        color: graphite,
        '& dd': {
            margin: 0,
            overflowWrap: 'anywhere',
        },
    },
    fromLabel: {
        fontWeight: 700,
        color: text,
    },
    seam: {
        marginTop: theme.spacing(3),
    },
    next: {
        marginTop: theme.spacing(4.5),
        display: 'grid',
        rowGap: theme.spacing(1),
    },
    again: {
        font: 'inherit',
        fontWeight: 700,
        verticalAlign: 'baseline',
    },
}));

export default function ContactSent(props: IProps) {
    const { firstName, values, onAgain } = props;

    const { classes } = useStyles();

    const titleRef = useRef<HTMLHeadingElement>(null);

    // De focus gaat naar de bevestiging, zodat ook een schermlezer hoort dat het lukte
    useEffect(() => {
        titleRef.current?.focus();
    }, []);

    const t = contactFormText;
    const sender = [values.name, values.email, values.phone]
        .map(value => value.trim())
        .filter(Boolean);

    return (
        <>
            <Typography
                variant="h3"
                component="h2"
                id="contact-form-title"
                tabIndex={-1}
                ref={titleRef}
                className={classes.title}
            >
                {t.sentTitle(firstName)}
            </Typography>
            <Typography className={classes.note}>{t.sentText}</Typography>

            <Box component="figure" aria-labelledby="contact-copy-title" className={classes.slip}>
                <Typography
                    variant="h4"
                    component="h3"
                    id="contact-copy-title"
                    className={classes.slipTitle}
                >
                    {t.copyTitle}
                </Typography>
                <Typography component="blockquote" className={classes.message}>
                    {values.message.trim()}
                </Typography>
                <Seam tone="light" className={classes.seam} />
                <Box component="dl" className={classes.from}>
                    <Typography
                        component="dt"
                        variant="body2"
                        className={classes.fromLabel}
                        sx={{ gridRow: `span ${sender.length}` }}
                    >
                        {t.copyFrom}
                    </Typography>
                    {sender.map(value => (
                        <Typography key={value} component="dd" variant="body2">
                            {value}
                        </Typography>
                    ))}
                </Box>
            </Box>

            <Box className={classes.next}>
                <Typography>
                    {t.again}{' '}
                    <Link
                        component="button"
                        type="button"
                        onClick={onAgain}
                        className={classes.again}
                    >
                        {t.againLink}
                    </Link>
                    .
                </Typography>
                <Typography>
                    {t.browse}{' '}
                    <Link component={RouterLink} to={paths.projects}>
                        {t.browseLink}
                    </Link>
                    .
                </Typography>
            </Box>
        </>
    );
}
