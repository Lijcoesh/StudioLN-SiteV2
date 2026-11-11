import { Box, Typography } from '@mui/material';
import { makeStyles } from 'tss-react/mui';

import { accent, accentHover, navy, stitchOnNavy } from 'src/colors';
import canvasTwill from 'src/Resources/Textures/canvas-twill.svg';

interface IProps {
    name: string;
    className?: string;
}

// Een naamband van marineblauw canvas, opgestikt, met de naam erop geborduurd in oranje draad,
// zoals op een werkjas. Vastgestikt, dus zonder schaduw. De naam staat al in de kop, dus voor
// schermlezers verborgen.
const useStyles = makeStyles()(theme => ({
    root: {
        position: 'relative',
        display: 'inline-block',
        padding: theme.spacing(1.75, 4.5, 2),
        backgroundColor: navy,
        backgroundImage: `url("${canvasTwill}")`,
        backgroundSize: '8px 8px',
        '&::after': {
            content: '""',
            position: 'absolute',
            inset: 6,
            border: `2px dashed ${stitchOnNavy}`,
            pointerEvents: 'none',
        },
        [theme.breakpoints.down('sm')]: {
            padding: theme.spacing(1.25, 3.5, 1.5),
        },
    },
    name: {
        display: 'block',
        fontFamily: theme.typography.h1.fontFamily,
        fontSize: '2.75rem',
        lineHeight: 1,
        color: accent,
        // Dichte borduursteek: de draad krijgt een iets donkerdere rand
        WebkitTextStroke: `0.75px ${accentHover}`,
        [theme.breakpoints.down('sm')]: {
            fontSize: '2.125rem',
        },
    },
}));

export default function NameTape(props: IProps) {
    const { name, className } = props;

    const { classes, cx } = useStyles();

    return (
        <Box className={cx(classes.root, className)} aria-hidden>
            <Typography component="span" className={classes.name}>
                {name}
            </Typography>
        </Box>
    );
}
