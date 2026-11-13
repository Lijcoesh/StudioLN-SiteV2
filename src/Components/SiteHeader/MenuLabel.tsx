import { Box, ButtonBase } from '@mui/material';
import { makeStyles } from 'tss-react/mui';

import { label, labelFold, navy, stitchOnLight } from 'src/colors';
import labelRib from 'src/Resources/Textures/label-rib.svg';
import { fabricShadow } from 'src/Theme/shadow';

interface IProps {
    /** `open` toont drie rijen steken (het menu openen), `close` een kruis (sluiten). */
    action: 'open' | 'close';
    onClick: () => void;
    expanded?: boolean;
    controls?: string;
    className?: string;
}

const foldWidth = 9;

// De menuknop op telefoon: een klein geweven label, van dezelfde geribde crème stof als het label
// in de hero, met omgevouwen en doorgestikte korte kanten. Het ligt los op het canvas (zware
// stof-op-stof-schaduw) en hangt licht scheef; bij aanraken trekt het bijna recht. Het teken is
// garen: drie rijen steken om te openen, een kruis om te sluiten.
const useStyles = makeStyles()(theme => ({
    root: {
        position: 'relative',
        display: 'inline-flex',
        alignItems: 'center',
        gap: theme.spacing(1.25),
        minHeight: 48,
        padding: theme.spacing(0, 3.25),
        backgroundColor: label,
        backgroundImage: `url("${labelRib}")`,
        backgroundSize: '4px 6px',
        color: navy,
        fontFamily: theme.typography.h1.fontFamily,
        fontSize: '1.1875rem',
        lineHeight: 1,
        boxShadow: fabricShadow,
        transform: 'rotate(-2deg)',
        transition: 'transform 220ms cubic-bezier(0.16, 1, 0.3, 1)',
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
        '&:hover': {
            transform: 'rotate(-0.5deg)',
        },
        '@media (prefers-reduced-motion: reduce)': {
            transition: 'none',
            '&:hover': {
                transform: 'rotate(-2deg)',
            },
        },
    },
    mark: {
        display: 'block',
        flexShrink: 0,
        width: 22,
        height: 18,
        overflow: 'visible',
    },
    word: {
        // Bree Serif staat optisch iets hoog; een pixel omlaag zet hem op één lijn met de steken
        paddingTop: 1,
    },
}));

// Drie rijen rijgsteek, elk iets verschoven zoals met de hand gestikt
const rows = [
    { y: 3, offset: 0 },
    { y: 9, offset: 3 },
    { y: 15, offset: 1.5 },
];

export default function MenuLabel(props: IProps) {
    const { action, onClick, expanded, controls, className } = props;

    const { classes, cx } = useStyles();

    return (
        <ButtonBase
            disableRipple
            className={cx(classes.root, className)}
            onClick={onClick}
            aria-expanded={expanded}
            aria-controls={controls}
        >
            <Box
                component="svg"
                viewBox="0 0 22 18"
                aria-hidden
                focusable="false"
                className={classes.mark}
            >
                {action === 'open' ? (
                    rows.map(row => (
                        <line
                            key={row.y}
                            x1={2}
                            y1={row.y}
                            x2={20}
                            y2={row.y}
                            stroke={navy}
                            strokeWidth={2.5}
                            strokeLinecap="round"
                            strokeDasharray="4 5"
                            strokeDashoffset={row.offset}
                        />
                    ))
                ) : (
                    <>
                        <line
                            x1={5}
                            y1={3}
                            x2={17}
                            y2={15}
                            stroke={navy}
                            strokeWidth={2.5}
                            strokeLinecap="round"
                        />
                        <line
                            x1={17}
                            y1={3}
                            x2={5}
                            y2={15}
                            stroke={navy}
                            strokeWidth={2.5}
                            strokeLinecap="round"
                        />
                    </>
                )}
            </Box>
            <Box component="span" className={classes.word}>
                {action === 'open' ? 'Menu' : 'Sluiten'}
            </Box>
        </ButtonBase>
    );
}
