import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
      width: '100%',
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
            <h1>CONTACTS</h1>
            <div>
                <p>e-mail: <span>{companyInfo.email},</span></p>
                <p>adress: <span>{companyInfo.companyCity}, {companyInfo.companyAdress}</span></p>
                <p>website: <span>{companyInfo.email},</span></p>
            </div>
            
        </Grid> 
    );
}