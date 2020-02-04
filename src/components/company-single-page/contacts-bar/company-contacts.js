import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Typography, Box, Grid} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
      width: '100%',
      backgroundColor: 'rgb(255, 255, 179)',
      margin: theme.spacing(2, 0),
      padding: theme.spacing(3),
    },
    contactInfo :{
        textAlign: 'left',
        width: '100%',
    }
    
}));
function Contacts ({companyInfo}) {
    const classes = useStyles();
    return(
        <Grid
            container
            direction="column"
            justify="flex-start"
            alignItems="center"
            className = {classes.root}
        >
            <Typography variant ='h3'>CONTACTS</Typography>
            <Box>
                <Typography>e-mail: <span>{companyInfo.email} </span></Typography>
                <Typography>adress: <span>{companyInfo.companyCity}, {companyInfo.companyAdress}</span></Typography>
                <Typography>website: <span>{companyInfo.companyWebsite} </span></Typography>
            </Box>
            
        </Grid> 
    );
}
export default  Contacts;