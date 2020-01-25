import React from 'react';
import jobLogo from './2.png';
import { withStyles } from '@material-ui/core/styles';
import { Grid, Button } from '@material-ui/core';
import { useHistory } from "react-router-dom";

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
    viewCount: 12,
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
  },
  { jobName: 'Job4',
    aboutJob: 'vapshe urish text. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description.',
    jobImage: jobLogo,
    viewCount: 10,
    id: 4
  }
];

const HomeJobs = (props) => {
  const {classes} = props;
  const newJobsData = [...jobsData];
  const history = useHistory();

  const handleClick = () => {
    history.push("/jobs");
  };

  newJobsData.sort((a, b) => {
    return b.viewCount - a.viewCount;
  });
  
  const job = newJobsData.slice(0, 3).map((el) => {
    if (el.aboutJob.length > 50) {
      el.aboutJob = el.aboutJob.substring(0, 50) + "...";
    };
    return (
      <Grid container
        className={classes.aboutJob}
        alignItems="center"
        item xs={3}
        key={el.id}>
        <Grid justify="center"
          container>
          <img className={classes.jobLogo} src={el.jobImage} alt={el.jobName}/>
        </Grid>
        <Grid>
          <h6 className={classes.aboutJobText}> {el.aboutJob} </h6>
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
        {job}
      </Grid>
      <Button className={classes.allJobsBtn}
        variant='contained'
        onClick={handleClick}>
        All jobs
      </Button>
    </Grid>
  );
};

export default withStyles(styles)(HomeJobs);