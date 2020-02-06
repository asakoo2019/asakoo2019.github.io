import React from 'react';
import { Grid, Button, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    marginTop: theme.spacing(2),
    padding: theme.spacing(1, 2),
    backgroundColor: 'rgb(255, 255, 255)',
    cursor: 'pointer',
		transition: '.3s',
		"&:hover": {
			boxShadow: '0px 0px 10px 3px rgba(0,0,0,0.5)',
			transition: '.3s',
		}
  },
  viewMoreBtn: {
    color: '#000',
		height: 40,
		backgroundColor: '#FE654F',
	},
  companyNameText: {
    fontWeight: 700,
  },
  companyImage: {
    width: theme.spacing(12),
    height: theme.spacing(12),
    objectFit: 'cover',
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
          <Grid item xs={12} sm={4} md = {4} lg = {3}>
            <img className={classes.companyImage} src={currentCompany.companyImage} alt={currentCompany.companyName} />
          </Grid>
          <Grid item xs={12} sm={8} md = {8} lg = {9}>
            <Typography className={classes.companyNameText}> {currentCompany.companyName}</Typography>
            <Typography variant="body2" gutterBottom>{currentCompany.companyViewCount} total views </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={6} sm={2} md={2} lg={2} zeroMinWidth>
        <Grid container alignItems="center" className={classes.height}>
          <Typography variant="body2">Active jobs({currentCompany.companyJobs.length})</Typography>
        </Grid>
      </Grid>
      <Grid item xs={6} sm={3} md={3} lg={4} zeroMinWidth>
        <Grid container justify={"flex-end"} alignItems="center" className={classes.height}>
          <Button variant="outlined" color="secondary" onClick={() => { history.push(`companies/${currentCompany.id}`) }} className = {classes.viewMoreBtn}>
            View More
        </Button>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default CompanyItem;
