import React from 'react';
import { Grid, Button, Avatar, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    marginTop: theme.spacing(1),
    padding: theme.spacing(1),
    border: "1px solid rgb(255, 153, 102, 0.5)",
    boxShadow: '0px 0px 5px 0px ',
    '&:hover': {
      backgroundColor: "rgb(242, 242, 242)",
    },
  },
  companyNameText: {
    fontWeight: '700',
  },
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
  height: {
    height: '100%',
  },
}));

function CompanyItem({ currentCompany }) {
  const classes = useStyles();
  const history = useHistory();

  return (
    <Grid container className={classes.root}>
      <Grid item xs={12} sm={7} md={7} lg={6} zeroMinWidth>
        <Grid container spacing={2} >
          <Grid item xs={12} sm={2}>
            <Avatar className={classes.large} src={currentCompany.companyImage} alt={currentCompany.companyName} />
          </Grid>
          <Grid item xs={12} sm={10}>
            <Typography className={classes.companyNameText}> {currentCompany.companyName}</Typography>
            <Typography variant="body2" gutterBottom>{currentCompany.companyViewCount} total views </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={6} sm={2} md={2} lg={2} zeroMinWidth>
        <Grid container alignItems="center" className ={classes.height}>
          <Typography variant="body2">Active jobs({currentCompany.companyJobs.length})</Typography>
        </Grid>
      </Grid>
      <Grid item xs={6} sm={3} md={3} lg={4} zeroMinWidth>
        <Grid container justify={"flex-end"} alignItems="center" className ={classes.height}>
          <Button variant="outlined" color="secondary" onClick={() => { history.push(`companies/${currentCompany.id}`) }} >
            View More
        </Button>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default CompanyItem;