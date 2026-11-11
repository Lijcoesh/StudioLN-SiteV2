import { Box } from '@mui/material';
import { makeStyles } from 'tss-react/mui';

import { graphite, label, navy, navyRaised, stitchOnNavy } from 'src/colors';

interface IProps {
    included: boolean;
}

// Het teken in de maattabel: een kruissteek van marineblauw garen waar iets in het pakket zit,
// één losse korte steek waar het er niet in zit. De onderste steek ligt zichtbaar onder de
// bovenste (een smalle rand in labelkleur), met een prikgaatje aan elk uiteinde.
const useStyles = makeStyles()(() => ({
    root: {
        display: 'inline-flex',
        alignItems: 'center',
        verticalAlign: 'middle',
    },
    svg: {
        display: 'block',
        width: 26,
        height: 26,
        overflow: 'visible',
    },
    hidden: {
        position: 'absolute',
        width: 1,
        height: 1,
        margin: -1,
        padding: 0,
        overflow: 'hidden',
        clipPath: 'inset(50%)',
        whiteSpace: 'nowrap',
        border: 0,
    },
}));

// Prikgaatjes net buiten de uiteinden van de draden, zodat de ronde kop ze niet afdekt
const holes = [
    [3, 3],
    [23, 23],
    [23, 3],
    [3, 23],
];

// Eén draad: garen met een lichtere twijnlijn erover, zodat hij als draad leest en niet als icoon
function Thread(props: { x1: number; y1: number; x2: number; y2: number; color: string }) {
    const { x1, y1, x2, y2, color } = props;

    return (
        <>
            <line
                x1={x1}
                y1={y1}
                x2={x2}
                y2={y2}
                stroke={color}
                strokeWidth={4}
                strokeLinecap="round"
            />
            <line
                x1={x1}
                y1={y1}
                x2={x2}
                y2={y2}
                stroke={stitchOnNavy}
                strokeWidth={1}
                strokeDasharray="1.6 1.6"
                strokeLinecap="round"
            />
        </>
    );
}

export default function StitchMark(props: IProps) {
    const { included } = props;

    const { classes } = useStyles();

    return (
        <Box component="span" className={classes.root}>
            <Box
                component="svg"
                viewBox="0 0 26 26"
                aria-hidden
                focusable="false"
                className={classes.svg}
            >
                {included ? (
                    <>
                        {holes.map(([cx, cy]) => (
                            <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r={1.8} fill={graphite} />
                        ))}
                        {/* onderste steek */}
                        <Thread x1={19.5} y1={6.5} x2={6.5} y2={19.5} color={navyRaised} />
                        {/* bovenste steek, met een rand in labelkleur zodat hij erover ligt */}
                        <line
                            x1={9}
                            y1={9}
                            x2={17}
                            y2={17}
                            stroke={label}
                            strokeWidth={7.5}
                            strokeLinecap="round"
                        />
                        <Thread x1={6.5} y1={6.5} x2={19.5} y2={19.5} color={navy} />
                    </>
                ) : (
                    <>
                        <circle cx={6} cy={13} r={1.4} fill={graphite} />
                        <circle cx={20} cy={13} r={1.4} fill={graphite} />
                        <line
                            x1={8.5}
                            y1={13}
                            x2={17.5}
                            y2={13}
                            stroke={graphite}
                            strokeWidth={2.5}
                            strokeLinecap="round"
                        />
                    </>
                )}
            </Box>
            <Box component="span" className={classes.hidden}>
                {included ? 'Inbegrepen' : 'Niet inbegrepen'}
            </Box>
        </Box>
    );
}
