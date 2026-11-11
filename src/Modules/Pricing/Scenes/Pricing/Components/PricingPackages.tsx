import {
    Box,
    Table,
    TableBody,
    TableCell,
    TableFooter,
    TableHead,
    TableRow,
    Typography,
} from '@mui/material';
import { makeStyles } from 'tss-react/mui';

import { graphite, label, labelFold, navy, peach, stitchOnLight, text } from 'src/colors';
import LogoMark from 'src/Components/LogoMark/LogoMark';
import PageWidth from 'src/Components/PageWidth/PageWidth';
import Seam from 'src/Components/Seam/Seam';
import { packageFeatures, packages, separatePrice } from 'src/Config/pricing';
import { formatPrice } from 'src/Helpers/formatPrice';
import labelRib from 'src/Resources/Textures/label-rib-soft.svg';
import { fabricShadowLight } from 'src/Theme/shadow';
import { headerHeightCompact, tapTarget } from 'src/Theme/sizes';

import StitchMark from './StitchMark';

const foldWidth = 16;
const seam = `2px dashed ${stitchOnLight}`;

// De pakketten als de maattabel in een kledingstuk: één breed ingenaaid label, drie maten naast
// elkaar, een kruissteek waar iets inbegrepen is. Op de telefoon blijven de drie kolommen staan;
// de dienst krijgt dan een eigen regel boven zijn steken. Rollen staan er expliciet op, omdat
// sommige schermlezers tabelsemantiek kwijtraken zodra een rij een grid wordt.
const useStyles = makeStyles()(theme => ({
    root: {
        backgroundColor: peach,
        paddingBlock: theme.spacing(14),
        [theme.breakpoints.down('md')]: {
            paddingBlock: theme.spacing(9),
        },
    },
    label: {
        position: 'relative',
        backgroundColor: label,
        backgroundImage: `url("${labelRib}")`,
        backgroundSize: '4px 6px',
        boxShadow: fabricShadowLight,
        padding: theme.spacing(6.5, 9, 3),
        '&::before, &::after': {
            content: '""',
            position: 'absolute',
            top: 0,
            bottom: 0,
            width: foldWidth,
            backgroundColor: labelFold,
            pointerEvents: 'none',
        },
        '&::before': {
            left: 0,
            borderRight: seam,
        },
        '&::after': {
            right: 0,
            borderLeft: seam,
        },
        [theme.breakpoints.down('md')]: {
            padding: theme.spacing(5.5, 5, 2),
        },
        [theme.breakpoints.down('sm')]: {
            padding: theme.spacing(5, 3, 1),
        },
    },
    topSeam: {
        position: 'absolute',
        top: 14,
        left: foldWidth,
        width: `calc(100% - ${foldWidth * 2}px)`,
    },
    labelHead: {
        display: 'flex',
        alignItems: 'center',
        flexWrap: 'wrap',
        columnGap: theme.spacing(2),
        rowGap: theme.spacing(0.5),
        paddingBottom: theme.spacing(2.5),
        borderBottom: seam,
    },
    labelTitle: {
        color: navy,
    },
    vat: {
        color: graphite,
        [theme.breakpoints.down('sm')]: {
            flexBasis: '100%',
            paddingLeft: 60,
            marginTop: -6,
        },
    },
    // Telefoon: de kolomkoppen blijven bovenaan staan terwijl je langs de regels scrolt
    stickyHead: {
        [theme.breakpoints.down('sm')]: {
            position: 'sticky',
            // Direct onder de vaste header
            top: headerHeightCompact,
            zIndex: 1,
            backgroundColor: label,
            backgroundImage: `url("${labelRib}")`,
            backgroundSize: '4px 6px',
        },
    },
    table: {
        tableLayout: 'fixed',
        borderCollapse: 'collapse',
    },
    cell: {
        borderBottom: seam,
        padding: theme.spacing(2.5, 2, 2.5, 0),
        color: text,
        fontSize: theme.typography.body1.fontSize,
        lineHeight: theme.typography.body1.lineHeight,
        verticalAlign: 'middle',
        [theme.breakpoints.down('sm')]: {
            border: 0,
            padding: 0,
        },
    },
    serviceCol: {
        width: '38%',
    },
    separateCol: {
        width: '14%',
    },
    packageCol: {
        width: '16%',
    },
    headCell: {
        verticalAlign: 'bottom',
        paddingTop: theme.spacing(4),
    },
    packageName: {
        display: 'block',
        fontFamily: theme.typography.h1.fontFamily,
        fontSize: 'clamp(1.25rem, 1.05rem + 0.6vw, 1.875rem)',
        lineHeight: 1.15,
        color: navy,
    },
    packagePrice: {
        display: 'block',
        marginTop: theme.spacing(0.5),
        fontFamily: theme.typography.h1.fontFamily,
        fontSize: 'clamp(1.375rem, 0.9rem + 1.9vw, 2.75rem)',
        lineHeight: 1,
        color: navy,
        whiteSpace: 'nowrap',
    },
    perMonth: {
        display: 'block',
        marginTop: theme.spacing(0.75),
        color: graphite,
        whiteSpace: 'nowrap',
    },
    separateHead: {
        color: graphite,
        fontWeight: 400,
    },
    serviceName: {
        display: 'block',
        fontWeight: 700,
    },
    serviceNote: {
        display: 'block',
        marginTop: theme.spacing(0.25),
        maxWidth: '40ch',
        color: graphite,
    },
    separate: {
        color: graphite,
    },
    mobileOnly: {
        display: 'none',
        [theme.breakpoints.down('sm')]: {
            display: 'inline',
        },
    },
    footCell: {
        borderBottom: 0,
        color: graphite,
        paddingTop: theme.spacing(2),
    },
    footLabel: {
        fontWeight: 400,
    },
    hidden: {
        position: 'absolute',
        width: 1,
        height: 1,
        margin: -1,
        padding: 0,
        overflow: 'hidden',
        clipPath: 'inset(50%)',
        whiteSpace: 'nowrap',
        border: 0,
    },
    // Telefoon: de rij wordt een raster van drie kolommen, gelijk aan de drie maten.
    groupMobile: {
        [theme.breakpoints.down('sm')]: {
            display: 'block',
        },
    },
    row: {
        [theme.breakpoints.down('sm')]: {
            display: 'grid',
            gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
            columnGap: theme.spacing(1.5),
            rowGap: theme.spacing(1.5),
            alignItems: 'center',
            minHeight: tapTarget,
            padding: theme.spacing(2.25, 0),
            borderBottom: seam,
        },
    },
    headRowMobile: {
        [theme.breakpoints.down('sm')]: {
            alignItems: 'end',
            paddingTop: theme.spacing(3),
        },
    },
    hiddenOnMobile: {
        [theme.breakpoints.down('sm')]: {
            position: 'absolute',
            width: 1,
            height: 1,
            margin: -1,
            overflow: 'hidden',
            clipPath: 'inset(50%)',
            whiteSpace: 'nowrap',
        },
    },
    serviceMobile: {
        [theme.breakpoints.down('sm')]: {
            gridColumn: '1 / 3',
        },
    },
    separateMobile: {
        [theme.breakpoints.down('sm')]: {
            gridColumn: '3',
            alignSelf: 'start',
            textAlign: 'right',
            fontSize: theme.typography.body2.fontSize,
        },
    },
    footRowMobile: {
        [theme.breakpoints.down('sm')]: {
            borderBottom: 0,
        },
    },
    footLabelMobile: {
        [theme.breakpoints.down('sm')]: {
            gridColumn: '1 / -1',
        },
    },
}));

export default function PricingPackages() {
    const { classes, cx } = useStyles();

    return (
        <Box component="section" aria-labelledby="packages-title" className={classes.root}>
            <PageWidth>
                <Box className={classes.label}>
                    <Seam tone="light" className={classes.topSeam} />
                    <Box className={classes.labelHead}>
                        <LogoMark size={44} variant="onLight" />
                        <Typography
                            variant="h3"
                            component="h2"
                            id="packages-title"
                            className={classes.labelTitle}
                        >
                            Pakketten per maand
                        </Typography>
                        <Typography component="span" variant="body2" className={classes.vat}>
                            excl. btw
                        </Typography>
                    </Box>

                    <Table
                        role="table"
                        aria-labelledby="packages-title"
                        className={cx(classes.table, classes.groupMobile)}
                    >
                        <TableHead
                            role="rowgroup"
                            className={cx(classes.groupMobile, classes.stickyHead)}
                        >
                            <TableRow role="row" className={cx(classes.row, classes.headRowMobile)}>
                                <TableCell
                                    role="columnheader"
                                    className={cx(
                                        classes.cell,
                                        classes.headCell,
                                        classes.serviceCol,
                                        classes.hiddenOnMobile,
                                    )}
                                >
                                    <Box component="span" className={classes.hidden}>
                                        Dienst
                                    </Box>
                                </TableCell>
                                <TableCell
                                    role="columnheader"
                                    className={cx(
                                        classes.cell,
                                        classes.headCell,
                                        classes.separateCol,
                                        classes.separateHead,
                                        classes.hiddenOnMobile,
                                    )}
                                >
                                    Los per maand
                                </TableCell>
                                {packages.map(pkg => (
                                    <TableCell
                                        key={pkg.key}
                                        role="columnheader"
                                        className={cx(
                                            classes.cell,
                                            classes.headCell,
                                            classes.packageCol,
                                        )}
                                    >
                                        <Box component="span" className={classes.packageName}>
                                            {pkg.name}
                                        </Box>
                                        <Box component="span" className={classes.packagePrice}>
                                            {formatPrice(pkg.price)}
                                        </Box>
                                        <Typography
                                            component="span"
                                            variant="body2"
                                            className={classes.perMonth}
                                        >
                                            per maand
                                        </Typography>
                                    </TableCell>
                                ))}
                            </TableRow>
                        </TableHead>

                        <TableBody role="rowgroup" className={classes.groupMobile}>
                            {packageFeatures.map(feature => (
                                <TableRow key={feature.name} role="row" className={classes.row}>
                                    <TableCell
                                        component="th"
                                        scope="row"
                                        role="rowheader"
                                        className={cx(classes.cell, classes.serviceMobile)}
                                    >
                                        <Box component="span" className={classes.serviceName}>
                                            {feature.name}
                                        </Box>
                                        <Typography
                                            component="span"
                                            variant="body2"
                                            className={classes.serviceNote}
                                        >
                                            {feature.note}
                                        </Typography>
                                    </TableCell>
                                    <TableCell
                                        role="cell"
                                        className={cx(
                                            classes.cell,
                                            classes.separate,
                                            classes.separateMobile,
                                        )}
                                    >
                                        {feature.price === null ? (
                                            'bij hosting inbegrepen'
                                        ) : (
                                            <>
                                                <Box
                                                    component="span"
                                                    className={classes.mobileOnly}
                                                >
                                                    los{' '}
                                                </Box>
                                                {formatPrice(feature.price)}
                                            </>
                                        )}
                                    </TableCell>
                                    {packages.map(pkg => (
                                        <TableCell
                                            key={pkg.key}
                                            role="cell"
                                            className={classes.cell}
                                        >
                                            <StitchMark
                                                included={feature.includedIn.includes(pkg.key)}
                                            />
                                        </TableCell>
                                    ))}
                                </TableRow>
                            ))}
                        </TableBody>

                        <TableFooter role="rowgroup" className={classes.groupMobile}>
                            <TableRow role="row" className={cx(classes.row, classes.footRowMobile)}>
                                <TableCell
                                    component="th"
                                    scope="row"
                                    role="rowheader"
                                    colSpan={2}
                                    className={cx(
                                        classes.cell,
                                        classes.footCell,
                                        classes.footLabel,
                                        classes.footLabelMobile,
                                    )}
                                >
                                    Los zou dit per maand kosten
                                </TableCell>
                                {packages.map(pkg => (
                                    <TableCell
                                        key={pkg.key}
                                        role="cell"
                                        className={cx(classes.cell, classes.footCell)}
                                    >
                                        {formatPrice(separatePrice(pkg.key))}
                                    </TableCell>
                                ))}
                            </TableRow>
                        </TableFooter>
                    </Table>
                </Box>
            </PageWidth>
        </Box>
    );
}
