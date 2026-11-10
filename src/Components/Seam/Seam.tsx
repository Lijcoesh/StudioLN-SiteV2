import { Box } from '@mui/material';
import { makeStyles } from 'tss-react/mui';

import { stitchOnAccent, stitchOnLight, stitchOnNavy } from 'src/colors';
import { stitchGap, stitchLength, stitchWidth } from 'src/Theme/sizes';

export type SeamTone = 'navy' | 'light' | 'accent';

interface IProps {
    tone: SeamTone;
    orientation?: 'horizontal' | 'vertical';
    /** Stikt zich één keer dicht bij het laden (niet bij prefers-reduced-motion). */
    sew?: boolean;
    className?: string;
}

const toneColor: Record<SeamTone, string> = {
    navy: stitchOnNavy,
    light: stitchOnLight,
    accent: stitchOnAccent,
};

// Een stiknaad: de enige lijn die op deze site voorkomt. Elke naad verbindt of begrenst een vlak.
const useStyles = makeStyles()(() => ({
    horizontal: {
        display: 'block',
        width: '100%',
        height: stitchWidth,
        overflow: 'visible',
    },
    vertical: {
        display: 'block',
        width: stitchWidth,
        height: '100%',
        overflow: 'visible',
    },
    sew: {
        clipPath: 'inset(0 100% 0 0)',
        animation: 'seam-sew 1700ms cubic-bezier(0.16, 1, 0.3, 1) 350ms forwards',
        '@keyframes seam-sew': {
            to: { clipPath: 'inset(0 0 0 0)' },
        },
        '@media (prefers-reduced-motion: reduce)': {
            clipPath: 'none',
            animation: 'none',
        },
    },
}));

export default function Seam(props: IProps) {
    const { tone, orientation = 'horizontal', sew = false, className } = props;

    const { classes, cx } = useStyles();

    const isHorizontal = orientation === 'horizontal';
    const half = stitchWidth / 2;

    return (
        <Box
            component="svg"
            aria-hidden
            focusable="false"
            className={cx(
                isHorizontal ? classes.horizontal : classes.vertical,
                sew && classes.sew,
                className,
            )}
        >
            <line
                x1={isHorizontal ? 0 : half}
                y1={isHorizontal ? half : 0}
                x2={isHorizontal ? '100%' : half}
                y2={isHorizontal ? half : '100%'}
                stroke={toneColor[tone]}
                strokeWidth={stitchWidth}
                strokeDasharray={`${stitchLength} ${stitchGap}`}
                strokeLinecap="round"
            />
        </Box>
    );
}
