// Schaduwtokens. Alleen waar stof over stof ligt (het geweven label op het canvas);
// verder is de site vlak. overrideShadows() mapt ze op de 25 MUI elevation-niveaus.

import { alpha } from '@mui/material/styles';
import type { Shadows } from '@mui/material/styles';

import { navyDeep } from 'src/colors';

export const softShadow = `0 1px 2px ${alpha(navyDeep, 0.12)}`;
export const fabricShadow = `0 10px 24px ${alpha(navyDeep, 0.45)}, 0 2px 4px ${alpha(navyDeep, 0.35)}`;

export default function overrideShadows(): Shadows {
    return Array.from({ length: 25 }, (_, elevation) => {
        if (elevation === 0) return 'none';
        if (elevation <= 4) return softShadow;

        return fabricShadow;
    }) as Shadows;
}
