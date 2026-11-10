import { Box } from '@mui/material';

import { accent, label, navy } from 'src/colors';

interface IProps {
    size: number;
    /** onLight: marineblauw blok (zoals de favicon); onDark: licht blok op het marineblauwe canvas. */
    variant: 'onLight' | 'onDark';
    className?: string;
}

// Het LN-teken uit de huisstijl (bron: StudioLN-Dashboard/public/favicon.svg).
export default function LogoMark(props: IProps) {
    const { size, variant, className } = props;

    const block = variant === 'onLight' ? navy : label;
    const letterL = variant === 'onLight' ? label : navy;

    return (
        <Box
            component="svg"
            viewBox="0 0 32 32"
            width={size}
            height={size}
            aria-hidden
            focusable="false"
            className={className}
        >
            <rect width="32" height="32" rx="6" fill={block} />
            <g transform="translate(6 6.97) scale(0.02176)">
                <path d="M0 0h175v652h445l136 178H0z" fill={letterL} />
                <path d="M244 0h148l352 444V0h175v830h-76L418 289v292H244z" fill={accent} />
            </g>
        </Box>
    );
}
