import React from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
      padding: theme.spacing(2),
    },
  }));


function CompanyItem (props){
  const classes =  useStyles();
    return(
        <Grid container
          className = {classes.root}
        >
            <Grid
                item xs ={4}
            >
              <Grid 
                container
                direction="row"
                justify="flex-start"
                alignItems="center"
              >
                <Avatar src="https://library.kissclipart.com/20180922/eve/kissclipart-icon-full-name-clipart-computer-icons-avatar-icon-f6cf26ff2213f36e.jpg" /> 
                <span> {props.companyName} </span>
              </Grid>

            </Grid>
            <Grid
                item xs ={6}
            >
              <span>Active jobs()</span>
            </Grid>
            <Grid
                item xs ={2}
            >
                <Button>View More</Button>
            </Grid>
        </Grid>
    );
}

export default CompanyItem;