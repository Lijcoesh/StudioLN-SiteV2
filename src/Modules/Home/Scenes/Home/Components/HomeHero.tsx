import { Box, Typography } from '@mui/material';
import { makeStyles } from 'tss-react/mui';

import { onNavyMuted, peach } from 'src/colors';
import CanvasField from 'src/Components/CanvasField/CanvasField';
import ContactBand from 'src/Components/ContactBand/ContactBand';
import PageWidth from 'src/Components/PageWidth/PageWidth';
import WovenLabel from 'src/Components/WovenLabel/WovenLabel';

const useStyles = makeStyles()(theme => ({
    field: {
        paddingTop: theme.spacing(9),
        paddingBottom: theme.spacing(12),
        [theme.breakpoints.down('md')]: {
            paddingTop: theme.spacing(5),
            paddingBottom: theme.spacing(8),
        },
    },
    grid: {
        display: 'grid',
        gridTemplateColumns: 'minmax(0, 1fr) auto',
        alignItems: 'center',
        columnGap: theme.spacing(6),
        [theme.breakpoints.down('lg')]: {
            gridTemplateColumns: '1fr',
            rowGap: theme.spacing(5),
        },
    },
    // Twee parallelle zinnen, elk op één regel zodra er ruimte is.
    title: {
        fontSize: 'clamp(2.75rem, 1.2rem + 4vw, 5rem)',
    },
    titleLine: {
        display: 'block',
        [theme.breakpoints.up('md')]: {
            whiteSpace: 'nowrap',
        },
    },
    titleSecond: {
        color: peach,
    },
    lead: {
        marginTop: theme.spacing(4),
        maxWidth: '38ch',
        color: onNavyMuted,
    },
    labelSpot: {
        justifySelf: 'end',
        marginRight: theme.spacing(4),
        marginTop: theme.spacing(-6),
        [theme.breakpoints.down('lg')]: {
            justifySelf: 'start',
            marginRight: 0,
            marginTop: 0,
            marginLeft: theme.spacing(0.5),
        },
    },
}));

export default function HomeHero() {
    const { classes, cx } = useStyles();

    return (
        <Box component="section" aria-labelledby="home-title">
            <CanvasField className={classes.field}>
                <PageWidth>
                    <Box className={classes.grid}>
                        <Box>
                            <Typography variant="h1" id="home-title" className={classes.title}>
                                <Box component="span" className={classes.titleLine}>
                                    Jij doet je vak.
                                </Box>{' '}
                                <Box
                                    component="span"
                                    className={cx(classes.titleLine, classes.titleSecond)}
                                >
                                    Ik doe je website.
                                </Box>
                            </Typography>
                            <Typography variant="subtitle1" className={classes.lead}>
                                Een website op maat voor jouw zaak. De rest regel ik ook:
                                hosting, domein en zakelijke e-mail.
                            </Typography>
                        </Box>
                        <WovenLabel className={classes.labelSpot} />
                    </Box>
                </PageWidth>
            </CanvasField>
            <ContactBand sew label="Neem contact op" />
        </Box>
    );
}
