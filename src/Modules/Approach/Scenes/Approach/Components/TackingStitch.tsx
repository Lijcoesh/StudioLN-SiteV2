import { Box } from '@mui/material';
import { useLayoutEffect, useRef, useState } from 'react';
import { makeStyles } from 'tss-react/mui';

import { accent } from 'src/colors';

interface IProps {
    /** Om een stuk tekst in een kop: verticaal krapper, zodat de lus niet door de regel erboven loopt. */
    tight?: boolean;
    /** Stikt zich dicht bij het verschijnen; uit voor het patroon dat bij het openen al aanstaat. */
    sew?: boolean;
}

// Een rijgsteek: lange, ongelijke steken in oranje draad, met de hand om een plek gelegd zoals
// een kleermaker die iets aftekent. De lus is niet strak: hij hangt iets scheef, wijkt hier en
// daar uit en loopt bij het sluiten een stukje over het begin heen. Hij stikt zich één keer dicht
// als het patroon gekozen wordt (van links naar rechts, net als de naad van de contactbaan).
const useStyles = makeStyles()(() => ({
    root: {
        position: 'absolute',
        // Een svg rekt niet mee met inset alleen (dan wordt hij 300 x 150): maat expliciet
        top: '-0.55em',
        left: '-0.75em',
        width: 'calc(100% + 1.5em)',
        height: 'calc(100% + 1.1em)',
        zIndex: 2,
        pointerEvents: 'none',
        overflow: 'visible',
        transform: 'rotate(-1.2deg)',
    },
    sew: {
        clipPath: 'inset(-12px 100% -12px -12px)',
        animation: 'tacking-sew 640ms cubic-bezier(0.16, 1, 0.3, 1) forwards',
        '@keyframes tacking-sew': {
            to: { clipPath: 'inset(-12px -12px -12px -12px)' },
        },
        '@media (prefers-reduced-motion: reduce)': {
            clipPath: 'none',
            animation: 'none',
        },
    },
    tight: {
        top: '-0.12em',
        height: 'calc(100% + 0.24em)',
    },
}));

// De lus, getekend op de werkelijke maat zodat de steken overal even lang blijven.
function loopPath(w: number, h: number) {
    const r = Math.min(h / 2, 26);

    return [
        `M ${r + 6} 3`,
        `L ${w - r} 0`,
        `Q ${w + 2} 0 ${w + 1} ${r}`,
        `L ${w - 1} ${h - r}`,
        `Q ${w - 1} ${h + 1} ${w - r - 3} ${h}`,
        `L ${r} ${h + 2}`,
        `Q -1 ${h + 1} 1 ${h - r}`,
        `L 2 ${r + 2}`,
        `Q 2 5 ${r + 2} 6`,
        `L ${Math.min(r + 46, w * 0.4)} 9`,
    ].join(' ');
}

export default function TackingStitch(props: IProps) {
    const { tight = false, sew = true } = props;

    const { classes, cx } = useStyles();

    const ref = useRef<SVGSVGElement>(null);
    const [size, setSize] = useState<{ w: number; h: number } | null>(null);

    useLayoutEffect(() => {
        const svg = ref.current;
        if (!svg) return;

        const measure = () => {
            const { width, height } = svg.getBoundingClientRect();
            setSize({ w: svg.clientWidth || width, h: svg.clientHeight || height });
        };
        measure();

        const observer = new ResizeObserver(measure);
        observer.observe(svg);

        return () => observer.disconnect();
    }, []);

    return (
        <Box
            component="svg"
            ref={ref}
            aria-hidden
            focusable="false"
            className={cx(classes.root, sew && classes.sew, tight && classes.tight)}
        >
            {size && (
                <path
                    d={loopPath(size.w, size.h)}
                    fill="none"
                    stroke={accent}
                    strokeWidth={3}
                    strokeDasharray="17 8 12 8 20 8 14 8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            )}
        </Box>
    );
}
