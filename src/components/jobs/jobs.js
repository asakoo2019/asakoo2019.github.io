import React from 'react';
import './jobs.css';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import betimage from './betconstruct.jpg';

import JobsSearch from './jobs-search';
import JobMainContent from './job-main-content';

const jobs = [
  {
      imageURL: betimage,
      about: 'Lorem text about company',
      jobCategory:'Software development',
      id: 1,
  },
  {
      imageURL: betimage,
      about: 'Lorem text about company 1',
      jobCategory: 'Software development',
      id: 2,
  },
  {
      imageURL: betimage,
      about: 'Lorem text about company 2',
      jobCategory: 'Quality Assurance',
      id: 3,
  }
]

function Jobs() {
  return (
    <Container>
          <Grid
            container
            justify="flex-start"
            alignItems="flex-start"
          >
            <JobsSearch />
            <JobMainContent jobs={jobs} />
          </ Grid>
     </Container>
    
  )
}

export default Jobs;