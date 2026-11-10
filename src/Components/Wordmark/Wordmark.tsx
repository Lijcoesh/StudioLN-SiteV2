import { Link, Typography } from '@mui/material';
import { Link as RouterLink } from 'react-router';
import { makeStyles } from 'tss-react/mui';

import LogoMark from 'src/Components/LogoMark/LogoMark';
import { businessName } from 'src/Config/contact';
import { paths } from 'src/Config/navigation';

interface IProps {
    variant: 'onLight' | 'onDark';
}

const useStyles = makeStyles()(theme => ({
    root: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: theme.spacing(1.5),
        textDecoration: 'none',
        color: 'inherit',
        minHeight: 48,
    },
    name: {
        fontFamily: theme.typography.h1.fontFamily,
        fontSize: '1.75rem',
        lineHeight: 1,
        [theme.breakpoints.down('sm')]: {
            fontSize: '1.5rem',
        },
    },
}));

export default function Wordmark(props: IProps) {
    const { variant } = props;

    const { classes } = useStyles();

    return (
        <Link
            component={RouterLink}
            to={paths.home}
            underline="none"
            className={classes.root}
            aria-label={`${businessName}, naar de homepagina`}
        >
            <LogoMark size={40} variant={variant} />
            <Typography component="span" className={classes.name}>
                {businessName}
            </Typography>
        </Link>
    );
}
