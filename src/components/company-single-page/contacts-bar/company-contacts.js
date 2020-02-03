import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

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
export default function Contacts ({companyInfo}) {
    const classes = useStyles();
    return(
        <Grid
            container
            direction="column"
            justify="flex-start"
            alignItems="center"
            className = {classes.root}
        >
            <h3>CONTACTS</h3>
            <div>
                <p>e-mail: <span>{companyInfo.email} </span></p>
                <p>adress: <span>{companyInfo.companyCity}, {companyInfo.companyAdress}</span></p>
                <p>website: <span>{companyInfo.companyWebsite} </span></p>
            </div>
            
        </Grid> 
    );
}