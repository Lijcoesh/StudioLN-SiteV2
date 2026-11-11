import { Box, List, ListItem, Typography } from '@mui/material';
import { makeStyles } from 'tss-react/mui';

import { graphite, navy, peach, stitchOnLight, text } from 'src/colors';
import type { PriceItem } from 'src/Config/pricing';
import { formatPrice } from 'src/Helpers/formatPrice';
import { tapTarget } from 'src/Theme/sizes';

interface IProps {
    title: string;
    titleId: string;
    intro: string;
    items: PriceItem[];
    className?: string;
}

const seam = `2px dashed ${stitchOnLight}`;
const inset = 8;
// Elke 1,5px heen en weer over 8px breedte
const bartackPoints = Array.from({ length: 16 }, (_, i) => `${i % 2 ? 7 : 1},${1 + i * 1.47}`).join(
    ' ',
);

// Een opgestikte zak van perzik stof op het canvas: rondom gestikt op 8px van de rand, aan de
// opening een tweede zoomnaad, met een trensje op beide bovenhoeken zoals op een werkjas.
// Vastgestikt, dus zonder schaduw.
const useStyles = makeStyles()(theme => ({
    root: {
        position: 'relative',
        backgroundColor: peach,
        color: text,
        padding: theme.spacing(7, 5, 4),
        '&::before': {
            content: '""',
            position: 'absolute',
            inset,
            border: seam,
            pointerEvents: 'none',
        },
        // Zoom aan de opening van de zak
        '&::after': {
            content: '""',
            position: 'absolute',
            top: inset + 14,
            left: inset,
            right: inset,
            borderTop: seam,
            pointerEvents: 'none',
        },
        [theme.breakpoints.down('sm')]: {
            padding: theme.spacing(6.5, 3, 2.5),
        },
    },
    // Trensje: een korte, dichte zigzagsteek dwars over de zoom, in de draadkleur van de stof
    bartack: {
        position: 'absolute',
        top: inset - 3,
        width: 8,
        height: 24,
        overflow: 'visible',
    },
    bartackLeft: {
        left: inset - 3,
    },
    bartackRight: {
        right: inset - 3,
    },
    title: {
        color: navy,
    },
    intro: {
        marginTop: theme.spacing(1),
        color: graphite,
    },
    list: {
        marginTop: theme.spacing(2.5),
        padding: 0,
    },
    item: {
        display: 'grid',
        gridTemplateColumns: 'minmax(0, 1fr) auto',
        gridTemplateAreas: '"name amount" "note amount"',
        columnGap: theme.spacing(3),
        alignItems: 'baseline',
        minHeight: tapTarget,
        padding: theme.spacing(2, 0),
        borderTop: seam,
        // Telefoon: de toelichting loopt onder het bedrag door, anders wordt hij een smal kolommetje
        [theme.breakpoints.down('sm')]: {
            gridTemplateAreas: '"name amount" "note note"',
        },
    },
    name: {
        gridArea: 'name',
        fontWeight: 700,
    },
    note: {
        gridArea: 'note',
        marginTop: theme.spacing(0.25),
        color: graphite,
    },
    amount: {
        gridArea: 'amount',
        alignSelf: 'start',
        textAlign: 'right',
    },
    price: {
        fontFamily: theme.typography.h1.fontFamily,
        fontSize: 'clamp(1.5rem, 1.3rem + 0.6vw, 1.875rem)',
        lineHeight: 1.1,
        color: navy,
        whiteSpace: 'nowrap',
    },
    unit: {
        display: 'block',
        color: graphite,
        whiteSpace: 'nowrap',
    },
}));

export default function Pocket(props: IProps) {
    const { title, titleId, intro, items, className } = props;

    const { classes, cx } = useStyles();

    return (
        <Box component="section" aria-labelledby={titleId} className={cx(classes.root, className)}>
            {[classes.bartackLeft, classes.bartackRight].map(side => (
                <Box
                    key={side}
                    component="svg"
                    viewBox="0 0 8 24"
                    aria-hidden
                    focusable="false"
                    className={cx(classes.bartack, side)}
                >
                    <polyline
                        points={bartackPoints}
                        fill="none"
                        stroke={stitchOnLight}
                        strokeWidth={1.4}
                        strokeLinejoin="round"
                        strokeLinecap="round"
                    />
                </Box>
            ))}
            <Typography variant="h3" component="h2" id={titleId} className={classes.title}>
                {title}
            </Typography>
            <Typography variant="body2" className={classes.intro}>
                {intro}
            </Typography>
            <List className={classes.list}>
                {items.map(item => (
                    <ListItem key={item.name} disablePadding className={classes.item}>
                        <Typography className={classes.name}>{item.name}</Typography>
                        <Typography variant="body2" className={classes.note}>
                            {item.note}
                        </Typography>
                        <Box className={classes.amount}>
                            <Typography component="span" className={classes.price}>
                                {formatPrice(item.price)}
                            </Typography>
                            {item.unit && (
                                <Typography
                                    component="span"
                                    variant="body2"
                                    className={classes.unit}
                                >
                                    {item.unit}
                                </Typography>
                            )}
                        </Box>
                    </ListItem>
                ))}
            </List>
        </Box>
    );
}
