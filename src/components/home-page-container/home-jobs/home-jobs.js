import React from 'react';
import './home-jobs.css';
import jobLogo from './2.png';

import { withStyles } from '@material-ui/core/styles';
import {Grid, Button} from '@material-ui/core';

const styles = {
  aboutJob: {
    borderRadius: 10,
    marginTop: 6,
    padding: 20,
    background: 'linear-gradient(to right, rgba(244, 67, 54, 0.2), rgba(76, 175, 80, .2))',
    cursor: 'pointer'
  },
  allJobsBtn: {
    margin: 20,
    backgroundColor: '#FE654F'
  },
  jobLogo: {
    borderRadius: 10,
    width: '90%'
  },
  aboutJobText: {
    textAlign: 'center'
  }
};

const jobsData = [
  { jobName: 'Job1',
    aboutJob: 'This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description.',
    jobImage: jobLogo,
    viewCount: 2,
    id: 1
  },
  { jobName: 'Job2',
    aboutJob: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. A deserunt cupiditate delectus tenetur reiciendis atque necessitatibus nisi odit laboriosam nostrum eum quaerat, voluptatum eius blanditiis consectetur dolore, iusto iste inventore?',
    jobImage: jobLogo,
    viewCount: 8,
    id: 2
  },
  { jobName: 'Job3',
    aboutJob: 'urish text. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description.',
    jobImage: jobLogo,
    viewCount: 7,
    id: 3
  }
];

class HomeJobs extends React.Component {

  state = {
    jobsData
  };
  
  render () {
    const {classes} = this.props;
    const {jobsData} = this.state;

    const newJobsData = [...jobsData];
  
    newJobsData.sort((a, b) => {
      return b.viewCount - a.viewCount;
    });
    
    const comp = newJobsData.map((el) => {
      if (el.aboutJob.length > 150) {
        el.aboutJob = el.aboutJob.substring(0, 150) + "...";
      };
      return (
        <Grid container
              className={classes.aboutJob}
              alignItems="center"
              item xs={3}
              key={el.id}>
          <Grid justify="center"
                container>
            <img className={classes.jobLogo}
                src={el.jobImage}
                alt={el.jobName}/>
          </Grid>
          <Grid>
            <h3 className={classes.aboutJobText}>
              {el.aboutJob}
            </h3>
          </Grid>
        </Grid>
      );
    });

    return (
      <Grid className={classes.jobs}
            container
            direction='column'
            alignItems='center'>
        <h2>Top jobs</h2>
        <Grid container
             justify="space-around">
          {comp}
        </Grid>
          <Button className={classes.allJobsBtn}
                  variant='contained'
                  href='http://localhost:3000/jobs'>
            All jobs
          </Button>
      </Grid>
    );
  };
};

export default withStyles(styles)(HomeJobs);