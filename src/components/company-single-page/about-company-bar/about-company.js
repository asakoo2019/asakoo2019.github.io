import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Typography, Grid} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
      textAlign: 'center',
      backgroundColor: 'rgb(255, 255, 179)',
      margin: theme.spacing(2, 0),
      padding: theme.spacing(3),
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
            <Typography variant ='h3'>ABOUT {companyInfo.companyName}</Typography>
            <Grid 
               container
               direction="column"
               justify="flex-start"
               alignItems="flex-start"
               className = {classes.aboutCompDiv}
            >
                
                <Typography>{companyInfo.aboutCompany}</Typography> 
            </Grid>
            <Grid 
                className = {classes.aboutCompDiv}
            >
                <Typography>industry: {companyInfo.companyCategory}</Typography>    
            </Grid>
        </Grid>
    );
}
 