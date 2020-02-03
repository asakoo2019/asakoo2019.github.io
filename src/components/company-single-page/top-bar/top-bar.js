import React from 'react';
import {Grid, Box} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import './top-bar.css';


let bgimage = 'url(https://visme.co/blog/wp-content/uploads/2017/07/50-Beautiful-and-Minimalist-Presentation-Backgrounds-027.jpg)'
const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
      backgroundImage: bgimage,
      height: '400px',
      width: '100%',
      margin: theme.spacing(2, 0),
    },
    topBarDiv: {
      padding: theme.spacing(1, 2),
      backgroundColor: 'rgb(255, 255, 179, 0.5)',
      textAlign: 'center',
    },
    topBarImg: {
        width: '100%',
        backgroundColor: 'rgb(255, 255, 255)',
    },
    topBarInfo: {
        marginLeft: 20,
    },
    p: {
        margin:  theme.spacing(0),
    }
}));
function TopBar ({companyInfo}) {
    const classes = useStyles();
    //
    bgimage = companyInfo.companyBackground? companyInfo.companyBackground: bgimage;
    //console.log(companyInfo.companyBackground);
    return(
        <Grid container
            direction='column'
            justify="flex-end"
            className = {classes.root}
        >
            <Grid container
                alignItems="center"
                className = {classes.topBarDiv}
            >
                <Grid item xs={3}>
                    <img src = {companyInfo.companyImage} alt = {`${companyInfo.companyName} pic`} className = {classes.topBarImg}/>
                </Grid>
                <Grid container item xs={7} direction='column' alignItems='flex-start' className={classes.topBarInfo}>
                    <h4>{companyInfo.companyName}</h4>
                    <Box>{companyInfo.companyViewCount + 1} views</Box>
                    <p>{companyInfo.companyJobs.length} active jobs</p>
                </Grid>
            </Grid>
        </Grid>
    );
}
export default TopBar;