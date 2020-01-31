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
  jobDetailsText: {
    textAlign: 'center'
  }
};



const HomeJobs = (props) => {
  const {classes} = props;
  const [jobs, setJobs] = useState([]);
  const history = useHistory();

  useEffect(() => {
    let job = [];
    let companies = [];
		const docRef = firestore.collection("companies");
		docRef.get().then(function(querySnapshot) {
			querySnapshot.forEach(function(doc) {
        if (Object.keys(doc.data()).length !== 0) {
          companies.push(doc.data());
        };
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
        <Grid justify="center"
          container>
          <img className={classes.jobLogo} src={el.jobImage} alt={el.jobName}/>
        </Grid>
        <Grid>
          <h6 className={classes.jobDetailsText}> {el.jobDetails} </h6>
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