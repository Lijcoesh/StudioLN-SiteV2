import { Box } from '@mui/material';
import { makeStyles } from 'tss-react/mui';

import { peachSoft, stitchOnLight } from 'src/colors';
import lucaPhoto from 'src/Resources/Images/luca.jpg';

import NameTape from './NameTape';

interface IProps {
    className?: string;
    /** Zonder naambandje, voor een pagina waar de naam al groot in beeld staat (Over mij). */
    withNameTape?: boolean;
}

// Luca's foto op een opgestikt stuk lichte zakstof, licht scheef aangezet, met over de onderhoek
// een naamband. Vastgestikt, dus zonder schaduw. De breedte zet de plek waar hij staat via
// className; standaard tot 480px (360px onder md).
const useStyles = makeStyles()(theme => ({
    root: {
        position: 'relative',
        maxWidth: 480,
        padding: theme.spacing(2.5),
        backgroundColor: peachSoft,
        transform: 'rotate(-1.5deg)',
        '&::after': {
            content: '""',
            position: 'absolute',
            inset: 8,
            border: `2px dashed ${stitchOnLight}`,
            pointerEvents: 'none',
        },
        [theme.breakpoints.down('md')]: {
            maxWidth: 360,
        },
        [theme.breakpoints.down('sm')]: {
            maxWidth: 'calc(100% - 24px)',
        },
    },
    photo: {
        display: 'block',
        width: '100%',
        aspectRatio: '4 / 5',
        objectFit: 'cover',
    },
    nameTape: {
        position: 'absolute',
        zIndex: 1,
        right: theme.spacing(-3),
        bottom: theme.spacing(5),
        transform: 'rotate(3deg)',
    },
}));

export default function PhotoPatch(props: IProps) {
    const { className, withNameTape = true } = props;

    const { classes, cx } = useStyles();

    return (
        <Box className={cx(classes.root, className)}>
            <Box
                component="img"
                src={lucaPhoto}
                alt="Luca, staand in een tuin met lichtjes en een zonnescherm"
                className={classes.photo}
            />
            {withNameTape && <NameTape name="Luca" className={classes.nameTape} />}
        </Box>
    );
}
