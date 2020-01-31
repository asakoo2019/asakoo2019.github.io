import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

let bgimage = 'url(https://visme.co/blog/wp-content/uploads/2017/07/50-Beautiful-and-Minimalist-Presentation-Backgrounds-027.jpg)'
const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
      backgroundImage: bgimage,
      height: '400px',
    },
    topBarDiv: {
      padding: theme.spacing(2),
      backgroundColor: 'rgb(255, 255, 255, 0.5)',
      textAlign: 'center',
      width: '100%',
      height: '180px',
    },
    topBarImg: {
        width: '150px',
        height: '150px',
        backgroundColor: 'rgb(255, 255, 255)',
    }
}));
function TopBar ({companyInfo}) {
    const classes = useStyles();
    //
    bgimage = companyInfo.companyBackground? companyInfo.companyBackground: bgimage;
    //console.log(companyInfo.companyBackground);
    return(
        <Grid
            container
            alignItems="flex-end"
            className = {classes.root}
        >
            <Grid 
                container
                direction="row"
                justify="space-between"
                alignItems="center"
                className = {classes.topBarDiv}
            >
                <Grid 
                >
                    <img src = {companyInfo.companyImage} alt = 'Company pic' className = {classes.topBarImg}/>
                </Grid>
                <Grid >
                    <h1>{companyInfo.companyName}</h1>
                    <p><span>{companyInfo.companyViewCount+1}</span> views</p>
                </Grid>
                <Grid >
                    <p>{companyInfo.companyJobs ? companyInfo.companyJobs.length : ''} activ jobs</p>
                </Grid>
            </Grid>
        </Grid>
    );
}
export default TopBar;