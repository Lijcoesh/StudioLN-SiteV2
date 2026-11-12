import { Box, Typography } from '@mui/material';
import { makeStyles } from 'tss-react/mui';

import { accent, accentHover } from 'src/colors';
import CanvasField from 'src/Components/CanvasField/CanvasField';
import PageWidth from 'src/Components/PageWidth/PageWidth';
import Seam from 'src/Components/Seam/Seam';

interface IProps {
    name: string;
    className?: string;
}

// De naamband van de fotolap, op paginamaat: een strook marineblauw keper-canvas die scheef van
// rand tot rand over de pagina loopt, met de naam in oranje draad geborduurd. Vastgestikt (naden
// boven en onder), dus zonder schaduw. De naam staat ook in de alt-tekst van de foto; de band is
// voor schermlezers verborgen. De maat komt uit --name-size op de sectie.
const useStyles = makeStyles()(theme => ({
    root: {
        position: 'relative',
        width: 'calc(100% + 120px)',
        marginInline: -60,
        paddingBlock: 28,
        transform: 'rotate(-2deg)',
        [theme.breakpoints.down('md')]: {
            paddingBlock: 20,
            transform: 'rotate(-2.5deg)',
        },
    },
    // De band is 120px breder dan het scherm; deze binnenmarge zet de naam weer op de paginamaat.
    inner: {
        paddingInline: 60,
    },
    seamTop: {
        position: 'absolute',
        top: 10,
        left: 0,
    },
    seamBottom: {
        position: 'absolute',
        bottom: 10,
        left: 0,
    },
    name: {
        display: 'block',
        fontFamily: theme.typography.h1.fontFamily,
        fontSize: 'var(--name-size)',
        lineHeight: 0.9,
        letterSpacing: '0.01em',
        color: accent,
        // Dichte borduursteek: de draad krijgt een iets donkerdere rand
        WebkitTextStroke: `0.012em ${accentHover}`,
    },
}));

export default function NameBand(props: IProps) {
    const { name, className } = props;

    const { classes, cx } = useStyles();

    return (
        <CanvasField className={cx(classes.root, className)}>
            <Box aria-hidden className={classes.inner}>
                <Seam tone="navy" className={classes.seamTop} />
                <PageWidth>
                    <Typography component="span" className={classes.name}>
                        {name}
                    </Typography>
                </PageWidth>
                <Seam tone="navy" className={classes.seamBottom} />
            </Box>
        </CanvasField>
    );
}
