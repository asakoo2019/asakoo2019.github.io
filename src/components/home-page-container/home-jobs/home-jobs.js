import React, { useState, useEffect, useRef } from 'react';
import SliderIcons from './sliderIcons';
import { makeStyles, withWidth, Grid, Button, CircularProgress } from '@material-ui/core';
import PropTypes from 'prop-types';
import { useHistory } from "react-router-dom";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  jobDetails: {
    [theme.breakpoints.up('sm')]: {
      minWidth: theme.spacing(35),
    },
    [theme.breakpoints.down('sm')]: {
      minWidth: theme.spacing(25),
    },
    marginTop: theme.spacing(3),
    padding: theme.spacing(2),
    backgroundColor: 'rgb(255, 255, 255)',
    cursor: 'pointer',
    transition: '.3s',
    "&:hover": {
      boxShadow: '0px 0px 10px 3px rgba(0,0,0,0.5)',
      transition: '.3s',
    }
  },
  allJobsBtn: {
    margin: 20,
    backgroundColor: '#FE654F',
  },
  jobLogo: {
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(30),
      height: theme.spacing(30),
    },
    [theme.breakpoints.down('sm')]: {
      width: theme.spacing(25),
      height: theme.spacing(25),
    },
    objectFit: 'cover',
  },
  jobDetailsText: {
    textAlign: 'center',
  },
  homeLoader: {
    margin: 50,
    color: '#FE654F',
  },
  aboutJobText: {
    textAlign: 'center',
  },
  topJobsTitle: {
    color: '#FE654F',
  },
}));

function HomeJobs({ width, jobs }) {
  const classes = useStyles();
  const [jobsData, setJobsData] = useState([])
  const [jobSlider, setJobSlider] = useState(5);
  const history = useHistory();
  let jobTimer = useRef(null);
  let numJobQuantity = useRef(3);
  
  switch (width) {
    case 'xs': numJobQuantity.current = 1; break;
    case 'sm': numJobQuantity.current = 2; break;
    default: numJobQuantity.current = 3; break;
  }

  useEffect(() => {
      let a = jobSlider;
      const result = [];
      for (let i = 0; i < numJobQuantity.current; i++) {
        if (a > 5) {
          a = 0;
          result.push(jobs[a++]);
        } else {
          result.push(jobs[a++]);
        }
      }
      setJobsData(result);
      jobTimer.current = setTimeout(() => {
        let b = jobSlider;
        setJobSlider(b < 5 ? b + 1 : 0);
      }, 3000);
      return () => {
        clearTimeout(jobTimer.current)
      }
  }, [jobs, jobSlider]);

  function setCurrentSlider(slide) {
    clearTimeout(jobTimer.current)
    setJobSlider(slide)
  }

  const handleClick = () => {
    clearTimeout(jobTimer.current)
    history.push("/jobs");
  };

  const singleJobBtn = (id) => {
    clearTimeout(jobTimer.current)
    history.push(`jobs/${id}`);
  };



  const job = jobsData.map((el) => {
    if (el.jobDetails.length > 50) {
      el.jobDetails = el.jobDetails.substring(0, 50) + "...";
    };
    return (
      <Grid container
        className={classes.jobDetails}
        alignItems="center"
        item xs={9} sm = {5} md = {3} lg = {3} xl = {3}
        key={el.id}
        onClick={() => singleJobBtn(el.id)}>
        <Grid container justify='center'>
          <img className={classes.jobLogo} src={el.jobImage} alt={el.jobName} />
        </Grid>
        <Grid container justify='center'>
          <h6 className={classes.aboutJobText}> {el.jobName} </h6>
        </Grid>
        <Grid container justify='center'>
          <p className={classes.aboutJobText}> {el.jobDetails} </p>
        </Grid>
        <Grid container justify='center'>
          <Button className={classes.allJobsBtn}
            variant='contained'
            onClick={handleClick}>
            View more
          </Button>
        </Grid>
      </Grid>
    );
  });

  return (
    <>
      {jobs.length ?
        <Grid className={classes.root}
          container
          direction='column'
          alignItems='center'>
          <h2 className={classes.topJobsTitle}>TOP 6 JOBS</h2>
          <Grid container justify={width === 'xs' ? 'center' : 'space-evenly'}>
            {job}
          </Grid>
          <SliderIcons jobSlider={jobSlider} setCurrentSlider={setCurrentSlider} />
          <Button className={classes.allJobsBtn}
            variant='contained'
            onClick={handleClick}>
            All jobs
        </Button>
        </Grid> :
        <Grid container justify='center'>
          <CircularProgress size={150} className={classes.homeLoader} />
        </Grid>}
    </>
  );
};
HomeJobs.propTypes = {
  width: PropTypes.oneOf(["lg", "md", "sm", "xl", "xs"]).isRequired
};
export default withWidth()(HomeJobs)
