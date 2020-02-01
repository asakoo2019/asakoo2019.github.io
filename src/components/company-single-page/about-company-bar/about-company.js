import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
      textAlign: 'center',
      backgroundColor: 'rgb(255, 255, 204)',
    },
    aboutCompDiv: {
        width: "100%",
        textAlign: 'left',       
    },
}));
export default function AboutCompany ({companyInfo}) {
    const classes = useStyles();
    return(
        <Grid
            className = {classes.root}
        >
            <h3>ABOUT {companyInfo.companyName}</h3>
            <Grid 
               container
               direction="column"
               justify="flex-start"
               alignItems="flex-start"
               className = {classes.aboutCompDiv}
            >
                
                <p>{companyInfo.aboutCompany}</p> 
            </Grid>
            <Grid 
                className = {classes.aboutCompDiv}
            >
                <p>industry: {companyInfo.companyCategory}</p>    
            </Grid>
        </Grid>
    );
}
 