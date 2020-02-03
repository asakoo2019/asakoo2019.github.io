import React from 'react';
import { Grid, Button, Avatar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    marginTop: theme.spacing(1),
    padding: theme.spacing(1),
    border: "1px solid rgb(255, 153, 102, 0.5)",
    '&:hover': {
      backgroundColor: "rgb(242, 242, 242)",
    },
  },
  avatarBlock: {
    marginLeft: theme.spacing(2),
    marginTop: theme.spacing(1),
  },
  companyNameText: {
    fontWeight: '700',
    margin: theme.spacing(0),
  },
  viewText:{
    fontSize:'14px',
    margin: theme.spacing(0),
  },
  button: {
    marginTop: theme.spacing(1.5),
  }
}));

function CompanyItem({ currentCompany }) {
  const classes = useStyles();
  const history = useHistory();

  return (
    <Grid container
      className={classes.root}
    >
      <Grid item xs={5}>
        <Grid container
          direction="row"
          justify="flex-start"
          alignItems="center"
        >
          <Grid className = {classes.avatarBlock}>
            <Avatar src={currentCompany.companyImage} />
          </Grid>

          <Grid  className = {classes.avatarBlock}>
            <p className = {classes.companyNameText}> {currentCompany.companyName}</p>
            <p className = {classes.viewText}>{currentCompany.companyViewCount} total views </p>
          </Grid>

        </Grid>
      </Grid>
      <Grid item xs={5}>
        <p>Active jobs({currentCompany.companyJobs.length})</p>
      </Grid>
      <Grid item xs={2} >
        <Button className ={classes.button} variant="outlined" color="secondary" onClick={() => { history.push(`companies/${currentCompany.id}`) }} >
          View More
        </Button>
      </Grid>
    </Grid>
  );
}

export default CompanyItem;