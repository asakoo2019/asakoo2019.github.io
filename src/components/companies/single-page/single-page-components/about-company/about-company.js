import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
      textAlign: 'left',
    },
    aboutCompDiv: {
        width: "100%",
    },
    textDirection: {
        textAlign: 'center',
    },
}));
export default function AboutCompany ({companyInfo}) {
    const classes = useStyles();
    return(
        <Grid
            className = {classes.root}
        >
            <h1>ABOUT {companyInfo.companyName}</h1>
            <Grid 
               container
               direction="column"
               justify="flex-start"
               alignItems="flex-start"
               className = {classes.aboutCompDiv}
            >
                
                <p>{companyInfo.aboutCompany}</p> 
                <p>here must be information about company</p>
            </Grid>
            <Grid 
                className = {classes.aboutCompDiv}
            >
                <p>industry: {companyInfo.companyCategory}</p>
                <p>Type: {}</p>    
            </Grid>
        </Grid>
    );
}
 