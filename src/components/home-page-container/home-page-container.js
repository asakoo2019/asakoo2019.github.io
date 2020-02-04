import React from 'react';
import AboutUs from './about-us';
import HomeCompanies from './home-companies';
import HomeJobs from './home-jobs';
import { Container } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const styles = {
	home: {
		marginTop: 24,
		marginBottom: 24,
	},
};

const HomePageContainer = (props) => {
  const { classes } = props;
  return (
    <Container className={classes.home}>
      <HomeCompanies />
      <HomeJobs />
      <AboutUs />
    </Container>
  );
};

export default withStyles(styles)(HomePageContainer);