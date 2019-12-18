import React from 'react';
import './home-page-container.css';

import AboutUs from './about-us';
import HomeCompanies from './home-companies';
import HomeJobs from './home-jobs';

import { withStyles } from '@material-ui/core/styles';
import { Container } from '@material-ui/core';

const styles = {
  
};

const HomePageContainer = (props) => {
  // const {classes} = props;
  return (
    <Container>
      <HomeCompanies />
      <HomeJobs />
      <AboutUs />
    </Container>
  );
};

export default withStyles(styles)(HomePageContainer);