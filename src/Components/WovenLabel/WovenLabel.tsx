import { Box, Typography } from '@mui/material';
import { makeStyles } from 'tss-react/mui';

import { graphite, label, labelFold, navy, stitchOnLight } from 'src/colors';
import LogoMark from 'src/Components/LogoMark/LogoMark';
import { businessName } from 'src/Config/contact';
import labelRib from 'src/Resources/Textures/label-rib.svg';
import { fabricShadow } from 'src/Theme/shadow';

interface IProps {
    className?: string;
}

const foldWidth = 12;

// Het geweven label dat op de werkjas is genaaid: een geribde crème band met omgevouwen korte
// kanten, alleen daar vastgestikt. Puur herkenning; het logo staat al in de header, dus voor
// schermlezers verborgen.
const useStyles = makeStyles()(theme => ({
    root: {
        position: 'relative',
        display: 'inline-flex',
        alignItems: 'center',
        gap: theme.spacing(2.5),
        paddingBlock: theme.spacing(3.25),
        paddingInline: foldWidth + 26,
        backgroundColor: label,
        backgroundImage: `url("${labelRib}")`,
        backgroundSize: '4px 6px',
        color: navy,
        boxShadow: fabricShadow,
        transform: 'rotate(-4deg)',
        // Omgevouwen uiteinden met de stiknaad erdoor
        '&::before, &::after': {
            content: '""',
            position: 'absolute',
            top: 0,
            bottom: 0,
            width: foldWidth,
            backgroundColor: labelFold,
            pointerEvents: 'none',
        },
        '&::before': {
            left: 0,
            borderRight: `2px dashed ${stitchOnLight}`,
        },
        '&::after': {
            right: 0,
            borderLeft: `2px dashed ${stitchOnLight}`,
        },
        [theme.breakpoints.down('lg')]: {
            transform: 'rotate(-2.5deg)',
            paddingBlock: theme.spacing(2.25),
            paddingInline: foldWidth + 18,
            gap: theme.spacing(1.75),
        },
    },
    name: {
        display: 'block',
        fontFamily: theme.typography.h1.fontFamily,
        fontSize: '2.375rem',
        lineHeight: 1,
        [theme.breakpoints.down('lg')]: {
            fontSize: '1.625rem',
        },
    },
    line: {
        display: 'block',
        fontSize: '1.0625rem',
        fontWeight: 700,
        color: graphite,
        marginTop: theme.spacing(0.75),
        [theme.breakpoints.down('lg')]: {
            fontSize: '0.9375rem',
        },
    },
    mark: {
        width: 72,
        height: 72,
        [theme.breakpoints.down('lg')]: {
            width: 48,
            height: 48,
        },
    },
}));

export default function WovenLabel(props: IProps) {
    const { className } = props;

    const { classes, cx } = useStyles();

    return (
        <Box className={cx(classes.root, className)} aria-hidden>
            <LogoMark size={72} variant="onLight" className={classes.mark} />
            <Box>
                <Typography component="span" className={classes.name}>
                    {businessName}
                </Typography>
                <Typography component="span" className={classes.line}>
                    websites op maat
                </Typography>
            </Box>
        </Box>
    );
}
