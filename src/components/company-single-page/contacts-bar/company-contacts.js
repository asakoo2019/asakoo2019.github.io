import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Typography,  Grid} from '@material-ui/core';
import EmailIcon from '@material-ui/icons/Email';
import CallIcon from '@material-ui/icons/Call';
import LocationOnIcon from '@material-ui/icons/LocationOn';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        width: '100%',
        backgroundColor: 'rgb(255, 255, 255)',
        margin: theme.spacing(2, 0),
        padding: theme.spacing(3),
    },
    contactInfo :{
        fontSize: '15px',
        // textAlign: 'left',
        width: '100%',
        padding: theme.spacing(1),
    },
    contactIcon: {
        fontSize: '20px',
        color: '#FE654F',
    },
    componentTitle: {
        color: '#FE654F',
    },
    
}));
function Contacts ({companyInfo}) {
    const classes = useStyles();
    const email = companyInfo.email ? <Typography className ={classes.contactInfo}><EmailIcon className = {classes.contactIcon}/> {companyInfo.email} </Typography>: null;
    const phone = companyInfo.companyPhoneNumber ? <Typography className ={classes.contactInfo}><CallIcon className = {classes.contactIcon}/> {companyInfo.companyPhoneNumber}</Typography>: null;
    const address = companyInfo.companyCity ? <Typography className ={classes.contactInfo}> <LocationOnIcon className = {classes.contactIcon}/> <span>{companyInfo.companyCity} {companyInfo.companyAdress ? `, ${companyInfo.companyAdress}`: ''}</span></Typography>: null;
    const website = companyInfo.companyWebsite ? <Typography className ={classes.contactInfo}> website: <span>{companyInfo.companyWebsite} </span></Typography> : null;
    
    return(
        <Grid container
            direction="column"
            justify="center"
            alignItems="center"
            className = {classes.root}
        >
            <Typography variant ='h4' gutterBottom className = {classes.componentTitle}>CONTACTS</Typography>
            <Grid  container
                direction="column"
                justify="center"
                alignItems="flex-start"
        >
                {email}
                {phone}
                {address}
                {website}
            </Grid>         
        </Grid> 
    );
}
export default  Contacts;