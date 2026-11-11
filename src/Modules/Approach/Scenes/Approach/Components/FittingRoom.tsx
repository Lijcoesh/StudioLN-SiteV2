import { Box, ButtonBase, List, ListItem, Typography } from '@mui/material';
import { useRef, useState } from 'react';
import { makeStyles } from 'tss-react/mui';

import { accent, graphite, label, labelFold, navy, peach, stitchOnLight, text } from 'src/colors';
import Seam from 'src/Components/Seam/Seam';
import PageWidth from 'src/Components/PageWidth/PageWidth';
import {
    templateCaption,
    templateBarLabel,
    templatePatterns,
    type TemplatePatternKey,
} from 'src/Config/templatePatterns';
import labelRib from 'src/Resources/Textures/label-rib-soft.svg';
import { fabricShadowLight } from 'src/Theme/shadow';
import { headerHeightCompact, tapTarget } from 'src/Theme/sizes';

import TemplateSite from './TemplateSite';

const foldWidth = 16;
const seam = `2px dashed ${stitchOnLight}`;

// De paskamer: het bewijs bij het verhaal op het canvas erboven. Eén verzonnen sjabloonsite
// hangt als los afdrukje op het perzik vlak; ernaast benoemt een lijstje op labelstof in gewone
// woorden wat je ziet. Tik een regel aan en de rijgsteek ligt om dat patroon. Geen losse tekst in
// dit vlak: de tekst staat samen op het canvas. Onder lg staan afdrukje en lijstje onder elkaar,
// en schuift het gekozen patroon in beeld als het buiten het scherm valt.
const useStyles = makeStyles()(theme => ({
    root: {
        backgroundColor: peach,
        paddingBlock: theme.spacing(14),
        [theme.breakpoints.down('md')]: {
            paddingBlock: theme.spacing(9),
        },
    },
    room: {
        display: 'grid',
        gridTemplateColumns: 'minmax(0, 7fr) minmax(0, 5fr)',
        gridTemplateAreas: '"print list"',
        alignItems: 'center',
        columnGap: theme.spacing(8),
        rowGap: theme.spacing(5),
        [theme.breakpoints.down('lg')]: {
            gridTemplateColumns: 'minmax(0, 1fr)',
            gridTemplateAreas: '"print" "list"',
            maxWidth: 760,
        },
        [theme.breakpoints.down('md')]: {
            rowGap: theme.spacing(4),
        },
    },
    hanger: {
        gridArea: 'print',
        [theme.breakpoints.down('lg')]: {
            marginBottom: theme.spacing(1),
        },
    },
    print: {
        backgroundColor: label,
        boxShadow: fabricShadowLight,
        transform: 'rotate(-0.8deg)',
        [theme.breakpoints.down('md')]: {
            transform: 'rotate(-0.5deg)',
        },
    },
    bar: {
        display: 'flex',
        alignItems: 'center',
        height: 36,
        paddingInline: theme.spacing(2),
        color: graphite,
        fontSize: '0.9375rem',
        lineHeight: 1,
    },
    caption: {
        marginTop: theme.spacing(2.5),
        color: graphite,
    },
    // Het lijstje: dezelfde ingenaaide labelstof als de maattabel op Prijzen
    label: {
        gridArea: 'list',
        position: 'relative',
        backgroundColor: label,
        backgroundImage: `url("${labelRib}")`,
        backgroundSize: '4px 6px',
        boxShadow: fabricShadowLight,
        padding: theme.spacing(5.5, 6, 1.5),
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
        [theme.breakpoints.down('sm')]: {
            padding: theme.spacing(5, 3.5, 1),
        },
    },
    topSeam: {
        position: 'absolute',
        top: 14,
        left: foldWidth,
        width: `calc(100% - ${foldWidth * 2}px)`,
    },
    title: {
        color: navy,
        paddingBottom: theme.spacing(2),
    },
    list: {
        padding: 0,
    },
    item: {
        display: 'block',
        padding: 0,
    },
    choice: {
        width: '100%',
        justifyContent: 'flex-start',
        gap: theme.spacing(2),
        minHeight: tapTarget + 4,
        paddingBlock: theme.spacing(1.25),
        textAlign: 'left',
        fontFamily: theme.typography.fontFamily,
        fontSize: theme.typography.body1.fontSize,
        fontWeight: 700,
        lineHeight: 1.35,
        color: text,
        '&:hover .choice-mark': {
            color: navy,
        },
        '&:focus-visible': {
            outline: `3px solid ${accent}`,
            outlineOffset: 3,
        },
    },
    choiceText: {
        textDecoration: 'underline',
        textDecorationThickness: 2,
        textDecorationColor: 'transparent',
        textUnderlineOffset: '0.22em',
        transition: 'text-decoration-color 180ms cubic-bezier(0.16, 1, 0.3, 1)',
        '@media (prefers-reduced-motion: reduce)': {
            transition: 'none',
        },
    },
    choiceTextActive: {
        textDecorationColor: accent,
    },
    mark: {
        flexShrink: 0,
        width: 24,
        height: 24,
        color: stitchOnLight,
        transition: 'color 180ms cubic-bezier(0.16, 1, 0.3, 1)',
        '@media (prefers-reduced-motion: reduce)': {
            transition: 'none',
        },
    },
    markActive: {
        color: accent,
        '.MuiButtonBase-root:hover &': {
            color: accent,
        },
    },
}));

export default function FittingRoom() {
    const { classes, cx } = useStyles();

    const hangerRef = useRef<HTMLElement>(null);
    const [active, setActive] = useState<TemplatePatternKey>(templatePatterns[0].key);
    const [chosen, setChosen] = useState(false);

    const choose = (key: TemplatePatternKey) => {
        setActive(key);
        setChosen(true);

        const spot = hangerRef.current?.querySelector(`[data-pattern="${key}"]`);
        if (!spot) return;

        const { top, bottom } = spot.getBoundingClientRect();
        if (top >= headerHeightCompact + 8 && bottom <= window.innerHeight - 8) return;

        const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        spot.scrollIntoView({ block: 'center', behavior: reduce ? 'auto' : 'smooth' });
    };

    return (
        <Box component="section" aria-labelledby="fitting-room-title" className={classes.root}>
            <PageWidth>
                <Box className={classes.room}>
                    <Box
                        component="figure"
                        ref={hangerRef}
                        className={classes.hanger}
                        sx={{ m: 0 }}
                    >
                        <Box className={classes.print}>
                            <Box className={classes.bar} aria-hidden>
                                {templateBarLabel}
                            </Box>
                            <TemplateSite active={active} sew={chosen} />
                        </Box>
                        <Typography
                            component="figcaption"
                            variant="body2"
                            className={classes.caption}
                        >
                            {templateCaption}
                        </Typography>
                    </Box>
                    <Box className={classes.label}>
                        <Seam tone="light" className={classes.topSeam} />
                        <Typography
                            variant="h3"
                            component="h2"
                            id="fitting-room-title"
                            className={classes.title}
                        >
                            Wat je hier ziet
                        </Typography>
                        <Seam tone="light" />
                        <List className={classes.list}>
                            {templatePatterns.map((pattern, index) => {
                                const isActive = pattern.key === active;

                                return (
                                    <ListItem key={pattern.key} className={classes.item}>
                                        {index > 0 && <Seam tone="light" />}
                                        <ButtonBase
                                            aria-pressed={isActive}
                                            onClick={() => choose(pattern.key)}
                                            className={classes.choice}
                                        >
                                            <Box
                                                component="svg"
                                                viewBox="0 0 24 24"
                                                aria-hidden
                                                focusable="false"
                                                className={cx(
                                                    classes.mark,
                                                    'choice-mark',
                                                    isActive && classes.markActive,
                                                )}
                                            >
                                                <circle
                                                    cx="12"
                                                    cy="12"
                                                    r="9.5"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeWidth={isActive ? 3 : 2}
                                                    strokeDasharray={isActive ? '7 4' : '4 4'}
                                                    strokeLinecap="round"
                                                />
                                                {isActive && (
                                                    <circle
                                                        cx="12"
                                                        cy="12"
                                                        r="3.5"
                                                        fill="currentColor"
                                                    />
                                                )}
                                            </Box>
                                            <Box
                                                component="span"
                                                className={cx(
                                                    classes.choiceText,
                                                    isActive && classes.choiceTextActive,
                                                )}
                                            >
                                                {pattern.title}
                                            </Box>
                                        </ButtonBase>
                                    </ListItem>
                                );
                            })}
                        </List>
                    </Box>
                </Box>
            </PageWidth>
        </Box>
    );
}
