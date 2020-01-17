import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
//import './topBar.css'
const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
    },
    topBarDiv: {
      padding: theme.spacing(2),
      textAlign: 'center',
      width: '100%',
      height: '350px',
      bgImage: 'url(https://images.staff.am/upload/1/6/7/2/1672956e.jpg)',
      color: 'white',
    },
    topBarImg: {
        width: '150px',
        height: '150px',
    }
}));
function TopBar ({companyInfo}) {
    const classes = useStyles();
    return(
        <Grid
            container
            alignItems="flex-end"
            className = 'topBarDiv'
        >
            <Grid 
                container
                direction="row"
                justify="space-between"
                alignItems="center"
            >
                <Grid 
                >
                    <img src = {companyInfo.companyImage} className = 'topBarImg'/>
                </Grid>
                <Grid >
                    <h1>{companyInfo.companyName}</h1>
                    <span>{companyInfo.companyViewCount}</span>
                </Grid>
                <Grid >
                    <p>{companyInfo.companyJobs}</p>
                </Grid>
            </Grid>
        </Grid>
    );
}
export default TopBar;