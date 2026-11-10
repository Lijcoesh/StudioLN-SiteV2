import { Box } from '@mui/material';
import type { ElementType, ReactNode } from 'react';
import { makeStyles } from 'tss-react/mui';

import { navy, onNavy } from 'src/colors';
import canvasTwill from 'src/Resources/Textures/canvas-twill.svg';

interface IProps {
    children: ReactNode;
    component?: ElementType;
    className?: string;
    id?: string;
    'aria-labelledby'?: string;
}

// Het marineblauwe canvas van de werkjas: een fijne keperbinding over de huisstijlkleur.
// De textuurtegel is 8px; houd vaste hoogtes van aangrenzende velden op een veelvoud van 8,
// dan loopt de binding naadloos door.
const useStyles = makeStyles()(() => ({
    root: {
        backgroundColor: navy,
        backgroundImage: `url("${canvasTwill}")`,
        backgroundSize: '8px 8px',
        color: onNavy,
    },
}));

export default function CanvasField(props: IProps) {
    const { children, component = 'div', className, id, 'aria-labelledby': labelledBy } = props;

    const { classes, cx } = useStyles();

    return (
        <Box
            component={component}
            id={id}
            aria-labelledby={labelledBy}
            data-surface="dark"
            className={cx(classes.root, className)}
        >
            {children}
        </Box>
    );
}
