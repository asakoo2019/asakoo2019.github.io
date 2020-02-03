import React, { useState, useEffect } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Grid, Button } from '@material-ui/core';
import { useHistory } from "react-router-dom";
import { firestore } from '../../firebase/db';

const styles = {
  jobDetails: {
    borderRadius: 10,
    marginTop: 6,
    padding: 20,
    background: 'linear-gradient(to right, rgba(244, 67, 54, 0.2), rgba(76, 175, 80, .2))',
    boxShadow: '0px 0px 15px 0px rgba(56,55,56,1)',
    cursor: 'pointer',
  },
  allJobsBtn: {
    margin: 20,
    backgroundColor: '#FE654F',
  },
  jobLogo: {
    borderRadius: 10,
    width: '90%',
    height: 200,
    objectFit: 'cover',
  },
  jobDetailsText: {
    textAlign: 'center',
  },
};

const HomeJobs = (props) => {
  const {classes} = props;
  const [jobs, setJobs] = useState([]);
  const history = useHistory();

  useEffect(() => {
    let job = [];
		const docRef = firestore.collection("companies");
		docRef.get().then(function(querySnapshot) {
			querySnapshot.forEach(function(doc) {
				if (doc.data().companyJobs && doc.data().companyJobs.length !== 0){
				job.push(doc.data().companyJobs);
				let newArray = [];
				job.forEach(item => {
					newArray = newArray.concat(item);
				});
				setJobs(newArray);
				};
			});
    });
  }, []);
  
  const handleClick = () => {
    history.push("/jobs");
  };

  const singleJobBtn = (id) => {
    history.push(`jobs/${id}`);
  };

  jobs.sort((a, b) => {
    return b.viewCount - a.viewCount;
  });
  
  const job = jobs.slice(0, 3).map((el) => {
    if (el.jobDetails.length > 50) {
      el.jobDetails = el.jobDetails.substring(0, 50) + "...";
    };
    return (
      <Grid container
        className={classes.jobDetails}
        alignItems="center"
        item xs={3}
        key={el.id}
        onClick={() => singleJobBtn(el.id)}>
        <Grid container justify='center'>
          <img className={classes.jobLogo} src={el.jobImage} alt={el.jobName}/>
        </Grid>
        <Grid container justify='center'>
          <h6 className={classes.aboutJobText}> {el.jobName} </h6>
        </Grid>
        <Grid container justify='center'>
          <h6 className={classes.aboutJobText}> {el.aboutJob} </h6>
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