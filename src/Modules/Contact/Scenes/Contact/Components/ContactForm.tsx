import ArrowForwardOutlined from '@mui/icons-material/ArrowForwardOutlined';
import ErrorOutlineOutlined from '@mui/icons-material/ErrorOutlineOutlined';
import {
    Box,
    Button,
    FormControl,
    FormHelperText,
    Link,
    OutlinedInput,
    Typography,
} from '@mui/material';
import { Link as RouterLink } from 'react-router';
import { makeStyles } from 'tss-react/mui';

import {
    accent,
    accentHover,
    error,
    graphite,
    label,
    navy,
    stitchOnAccent,
    stitchOnLight,
    text,
    white,
} from 'src/colors';
import { email, emailHref, phoneDisplay, phoneHref } from 'src/Config/contact';
import { contactFormText } from 'src/Config/contactForm';
import { paths } from 'src/Config/navigation';
import labelRib from 'src/Resources/Textures/label-rib-soft.svg';
import { useContactForm } from 'src/Modules/Contact/Scenes/Contact/Hooks/useContactForm';
import type { ContactField } from 'src/Modules/Contact/Scenes/Contact/Hooks/useContactForm';
import { tapTarget } from 'src/Theme/sizes';

import ContactSent from './ContactSent';

const seam = `2px dashed ${stitchOnLight}`;
const inset = 8;
const bartackPoints = Array.from({ length: 16 }, (_, i) => `${i % 2 ? 7 : 1},${1 + i * 1.47}`).join(
    ' ',
);

// Het formulier in een opgestikte zak van crème labelstof op het perzik vlak: rondom gestikt op
// 8px van de rand, een zoomnaad aan de opening en trensjes op de bovenhoeken. Vastgestikt, dus
// zonder schaduw. De zak houdt elke toestand vast: invullen, versturen, gelukt, mislukt, en
// zonder endpoint een korte melding in plaats van velden.
const useStyles = makeStyles()(theme => ({
    pocket: {
        position: 'relative',
        backgroundColor: label,
        backgroundImage: `url("${labelRib}")`,
        backgroundSize: '4px 6px',
        color: text,
        padding: theme.spacing(7.5, 6, 5),
        transform: 'rotate(1deg)',
        '&::before': {
            content: '""',
            position: 'absolute',
            inset,
            border: seam,
            pointerEvents: 'none',
        },
        '&::after': {
            content: '""',
            position: 'absolute',
            top: inset + 14,
            left: inset,
            right: inset,
            borderTop: seam,
            pointerEvents: 'none',
        },
        [theme.breakpoints.down('md')]: {
            transform: 'rotate(0.6deg)',
        },
        [theme.breakpoints.down('sm')]: {
            padding: theme.spacing(7, 3, 4),
        },
    },
    bartack: {
        position: 'absolute',
        top: inset - 3,
        width: 8,
        height: 24,
        overflow: 'visible',
    },
    bartackLeft: {
        left: inset - 3,
    },
    bartackRight: {
        right: inset - 3,
    },
    title: {
        color: navy,
        marginBottom: theme.spacing(3),
    },
    form: {
        display: 'grid',
        gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
        columnGap: theme.spacing(2.5),
        rowGap: theme.spacing(2.5),
        [theme.breakpoints.down('sm')]: {
            gridTemplateColumns: 'minmax(0, 1fr)',
        },
    },
    wide: {
        gridColumn: '1 / -1',
    },
    label: {
        display: 'block',
        marginBottom: theme.spacing(0.75),
        fontWeight: 700,
        fontSize: theme.typography.body2.fontSize,
        color: text,
    },
    hint: {
        fontWeight: 400,
        color: graphite,
    },
    honeypot: {
        position: 'absolute',
        left: -10000,
        width: 1,
        height: 1,
        overflow: 'hidden',
    },
    // Vijf regels hoog; de bezoeker kan het veld zelf groter trekken
    message: {
        '& textarea': {
            lineHeight: 1.5,
            minHeight: `calc(5 * 1.5em + ${theme.spacing(3)})`,
        },
    },
    privacy: {
        gridColumn: '1 / -1',
        color: graphite,
    },
    actions: {
        gridColumn: '1 / -1',
        marginTop: theme.spacing(0.5),
    },
    // De verstuurknop als oranje lap met een naad op 6px van de rand, zoals de contactlap
    submit: {
        position: 'relative',
        minHeight: tapTarget + 8,
        padding: theme.spacing(1.75, 4),
        gap: theme.spacing(1.5),
        borderRadius: 0,
        backgroundColor: accent,
        color: white,
        fontFamily: theme.typography.h1.fontFamily,
        fontWeight: 400,
        fontSize: '1.5rem',
        lineHeight: 1.2,
        '&::before': {
            content: '""',
            position: 'absolute',
            inset: 6,
            border: `2px dashed ${stitchOnAccent}`,
            pointerEvents: 'none',
        },
        '&:hover': {
            backgroundColor: accentHover,
        },
        '&:hover .submit-arrow': {
            transform: 'translateX(6px)',
        },
        '&.Mui-disabled': {
            backgroundColor: accentHover,
            color: white,
        },
        [theme.breakpoints.down('sm')]: {
            width: '100%',
        },
    },
    arrow: {
        fontSize: 26,
        transition: 'transform 220ms cubic-bezier(0.16, 1, 0.3, 1)',
        '@media (prefers-reduced-motion: reduce)': {
            transition: 'none',
        },
    },
    failed: {
        display: 'flex',
        gap: theme.spacing(1.5),
        marginTop: theme.spacing(3),
        color: error,
        fontWeight: 700,
        '& svg': {
            flexShrink: 0,
            marginTop: 2,
        },
    },
    failedText: {
        color: text,
        fontWeight: 400,
    },
}));

export default function ContactForm() {
    const { classes, cx } = useStyles();

    const {
        values,
        errors,
        status,
        honeypot,
        setHoneypot,
        change,
        register,
        submit,
        again,
        firstName,
    } = useContactForm();

    const t = contactFormText;

    const field = (
        name: ContactField,
        options: {
            label: string;
            hint?: string;
            type?: string;
            autoComplete: string;
            inputMode?: 'text' | 'email' | 'tel';
            multiline?: boolean;
            wide?: boolean;
        },
    ) => {
        const id = `contact-${name}`;
        const helpId = `${id}-help`;
        const message = errors[name] ?? (options.multiline ? t.messageHint : undefined);

        return (
            <FormControl error={Boolean(errors[name])} className={cx(options.wide && classes.wide)}>
                <Typography component="label" htmlFor={id} className={classes.label}>
                    {options.label}
                    {options.hint && (
                        <Box component="span" className={classes.hint}>
                            {' '}
                            ({options.hint})
                        </Box>
                    )}
                </Typography>
                <OutlinedInput
                    id={id}
                    name={name}
                    type={options.type ?? 'text'}
                    autoComplete={options.autoComplete}
                    // Een gewone textarea van vijf regels: MUI's autosize rekent de binnenruimte
                    // in elke regel mee en maakt het veld veel te hoog
                    inputComponent={options.multiline ? 'textarea' : undefined}
                    className={cx(options.multiline && classes.message)}
                    value={values[name]}
                    onChange={event => change(name, event.target.value)}
                    inputRef={register(name)}
                    slotProps={{
                        input: {
                            inputMode: options.inputMode,
                            'aria-describedby': message ? helpId : undefined,
                            'aria-invalid': Boolean(errors[name]),
                        },
                    }}
                />
                {message && <FormHelperText id={helpId}>{message}</FormHelperText>}
            </FormControl>
        );
    };

    return (
        <Box component="section" aria-labelledby="contact-form-title" className={classes.pocket}>
            {[classes.bartackLeft, classes.bartackRight].map(side => (
                <Box
                    key={side}
                    component="svg"
                    viewBox="0 0 8 24"
                    aria-hidden
                    focusable="false"
                    className={cx(classes.bartack, side)}
                >
                    <polyline
                        points={bartackPoints}
                        fill="none"
                        stroke={stitchOnLight}
                        strokeWidth={1.5}
                        strokeLinejoin="round"
                    />
                </Box>
            ))}

            {status === 'sent' ? (
                <ContactSent firstName={firstName} values={values} onAgain={again} />
            ) : (
                <>
                    <Typography
                        variant="h3"
                        component="h2"
                        id="contact-form-title"
                        className={classes.title}
                    >
                        {t.title}
                    </Typography>
                    <Box component="form" noValidate onSubmit={submit} className={classes.form}>
                        {field('name', { label: t.name, autoComplete: 'name' })}
                        {field('email', {
                            label: t.email,
                            type: 'email',
                            autoComplete: 'email',
                            inputMode: 'email',
                        })}
                        {field('phone', {
                            label: t.phone,
                            hint: t.phoneHint,
                            type: 'tel',
                            autoComplete: 'tel',
                            inputMode: 'tel',
                            wide: true,
                        })}
                        {field('message', {
                            label: t.message,
                            autoComplete: 'off',
                            multiline: true,
                            wide: true,
                        })}
                        {/* Valkuil voor spambots: mensen zien en vullen dit veld niet */}
                        <Box className={classes.honeypot} aria-hidden>
                            <Box component="label" htmlFor="contact-website">
                                Website
                            </Box>
                            <Box
                                component="input"
                                id="contact-website"
                                name="website"
                                tabIndex={-1}
                                autoComplete="off"
                                value={honeypot}
                                onChange={event => setHoneypot(event.target.value)}
                            />
                        </Box>
                        <Typography variant="body2" className={classes.privacy}>
                            {t.privacy}{' '}
                            <Link component={RouterLink} to={paths.privacy}>
                                {t.privacyLink}
                            </Link>
                        </Typography>
                        <Box className={classes.actions}>
                            <Button
                                type="submit"
                                disabled={status === 'sending'}
                                className={classes.submit}
                            >
                                {status === 'sending' ? t.sending : t.submit}
                                {status !== 'sending' && (
                                    <ArrowForwardOutlined
                                        aria-hidden
                                        className={cx(classes.arrow, 'submit-arrow')}
                                    />
                                )}
                            </Button>
                            {status === 'failed' && (
                                <Box role="alert" className={classes.failed}>
                                    <ErrorOutlineOutlined aria-hidden />
                                    <Typography component="span" className={classes.failedText}>
                                        {t.failed} <Link href={phoneHref}>{phoneDisplay}</Link> of{' '}
                                        <Link href={emailHref}>{email}</Link>.
                                    </Typography>
                                </Box>
                            )}
                        </Box>
                    </Box>
                </>
            )}
        </Box>
    );
}
