import React from 'react';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import {makeStyles } from '@material-ui/core/styles';
import {useHistory, useRouteMatch} from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  root: {
      flexGrow: 1,
      padding: theme.spacing(2),
    },
  }));

function CompanyItem (props){
  const classes =  useStyles();
  const history = useHistory();
  const match = useRouteMatch();

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
                <span> {props.currentCompany.companyName}<br/>{props.currentCompany.companyViewCount} total views </span>
                
              </Grid>

            </Grid>
            <Grid
                item xs ={6}
            >
              <span>Active jobs({props.currentCompany.companyJobs.length})</span>
            </Grid>
            <Grid
                item xs ={2}
            >
              <button  onClick = { ()=>{history.push(`${match.url}/${props.currentCompany.id}`)}    } >
                  View More
              </button>
            </Grid>
        </Grid>
    );
}

export default CompanyItem;