import React from 'react';
import {Grid, Typography, makeStyles} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
      height: '400px',
      width: '100%',
      margin: theme.spacing(2, 0),
      backgroundPosition: 'center',
		backgroundRepeat: 'no-repeat',
  	    backgroundSize: 'cover',
    },
    topBarDiv: {
      padding: theme.spacing(1, 2),
      backgroundColor: 'rgb(255, 255, 179, 0.5)',
      textAlign: 'center',
    },
    topBarImg: {
        width: theme.spacing(15),
        height: theme.spacing(15),
        objectFit: 'cover',
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
    const bgImage = companyInfo.companyBackground;
    return(
        <Grid container
            direction='column'
            justify="flex-end"
            style = {{backgroundImage:` url(${bgImage})`}}
            className = {classes.root}
        >
            <Grid container
                alignItems="center"
                className = {classes.topBarDiv}
            >
                <Grid item xs={3} zeroMinWidth>
                    <img src = {companyInfo.companyImage} alt = {`${companyInfo.companyName} pic`} className = {classes.topBarImg}/>
                </Grid>
                <Grid  item xs={7} className={classes.topBarInfo} zeroMinWidth>
                    <Grid container  
                        direction="column"
                        justify="center"
                        alignItems="flex-start"
                    >
                        <Typography variant = 'h5' gutterBottom>{companyInfo.companyName}</Typography>
                        <Typography variant="subtitle2" gutterBottom>{companyInfo.companyViewCount + 1} views</Typography>
                        <Typography variant="subtitle2" gutterBottom>{companyInfo.companyJobs.length} active jobs</Typography>
                    </Grid>
                        
                </Grid>
            </Grid>
        </Grid>
    );
}
export default TopBar;