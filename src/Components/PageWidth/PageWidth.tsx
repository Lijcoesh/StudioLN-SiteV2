import { Box } from '@mui/material';
import type { ReactNode } from 'react';
import { makeStyles } from 'tss-react/mui';

import { pageMaxWidth } from 'src/Theme/sizes';

interface IProps {
    children: ReactNode;
    className?: string;
}

const useStyles = makeStyles()(theme => ({
    root: {
        width: '100%',
        maxWidth: pageMaxWidth + 96,
        marginInline: 'auto',
        paddingInline: theme.spacing(6),
        [theme.breakpoints.down('md')]: {
            paddingInline: theme.spacing(4),
        },
        [theme.breakpoints.down('sm')]: {
            paddingInline: theme.spacing(2.5),
        },
    },
}));

export default function PageWidth(props: IProps) {
    const { children, className } = props;

    const { classes, cx } = useStyles();

    return <Box className={cx(classes.root, className)}>{children}</Box>;
}
