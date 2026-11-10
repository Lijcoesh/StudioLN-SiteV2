import { Link } from '@mui/material';
import { makeStyles } from 'tss-react/mui';

import { label, navy } from 'src/colors';

const useStyles = makeStyles()(theme => ({
    root: {
        position: 'absolute',
        left: theme.spacing(2),
        top: theme.spacing(2),
        zIndex: theme.zIndex.tooltip,
        padding: theme.spacing(1.5, 2.5),
        backgroundColor: label,
        color: navy,
        transform: 'translateY(-200%)',
        '&:focus-visible': {
            transform: 'none',
        },
    },
}));

export default function SkipLink() {
    const { classes } = useStyles();

    return (
        <Link href="#main" className={classes.root}>
            Naar de inhoud
        </Link>
    );
}
