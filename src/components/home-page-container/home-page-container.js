import React from 'react';
import AboutUs from './about-us';
import HomeCompanies from './home-companies';
import HomeJobs from './home-jobs';
import { Container } from '@material-ui/core';

const HomePageContainer = () => {
  return (
    <Container>
      <HomeCompanies />
      <HomeJobs />
      <AboutUs />
    </Container>
  );
};

export default HomePageContainer;