import React from 'react';
import { Grid, Typography, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        width: '100%',
        margin: theme.spacing(2, 0),
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        [theme.breakpoints.up('md')]: {
            height: theme.spacing(35),
        },
        [theme.breakpoints.down('sm')]: {
            height: theme.spacing(26),
        },

    },
    topBarDiv: {
        backgroundColor: 'rgb(255, 255, 255, 0.5)',
        textAlign: 'center',
        [theme.breakpoints.up('md')]: {
            width: '100%',
            height: theme.spacing(20),
            padding: theme.spacing(0, 0, 0,  2),
        },
        [theme.breakpoints.only('sm')]: {
            width: '100%',
            height: theme.spacing(17),
            padding: theme.spacing(0, 0, 0,  2),
        },
        [theme.breakpoints.only('xs')]: {
            width: '50%',
            height: theme.spacing(26),
            padding: theme.spacing(1),
        },
    },
    topBarImg: {     
        [theme.breakpoints.up('sm')]: {
            width: theme.spacing(15),
            height: theme.spacing(15),
        },
        [theme.breakpoints.down('xs')]: {
            width: theme.spacing(10),
            height: theme.spacing(10),
            marginBottom: theme.spacing(0),
        },

        objectFit: 'cover',
        backgroundColor: 'rgb(255, 255, 255)',
    },
    topBarInfo: {
        justifyContent: 'left',
        marginLeft: theme.spacing(0),
    },
    p: {
        margin: theme.spacing(0),
    }
}));
function TopBar({ companyInfo }) {
    const classes = useStyles();
    const bgImage = companyInfo.companyBackground;
    return (
        <Grid container
            direction='column'
            justify="flex-end"
            style={{ backgroundImage: ` url(${bgImage})` }}
            className={classes.root}
        >
            <Grid container
                alignItems="center"
                justify = 'flex-start'
                className={classes.topBarDiv}
            >
                <Grid item xs={12} sm = {3} md = {3} lg = {3} xl = {4}zeroMinWidth>
                    <img src={companyInfo.companyImage} alt={`${companyInfo.companyName} pic`} className={classes.topBarImg} />
                </Grid>
                <Grid item xs={12} sm = {9} md = {9} lg = {9} xl = {8}className={classes.topBarInfo} zeroMinWidth>
                    <Grid container
                        direction="column"
                        justify="center"
                        alignItems="flex-start"
                    >
                        <Typography variant='h5' gutterBottom>{companyInfo.companyName}</Typography>
                        <Typography variant="subtitle2" gutterBottom>{companyInfo.companyViewCount + 1} views</Typography>
                        <Typography variant="subtitle2" gutterBottom>{companyInfo.companyJobs.length} active jobs</Typography>
                    </Grid>

                </Grid>
            </Grid>
        </Grid>
    );
}
export default TopBar;