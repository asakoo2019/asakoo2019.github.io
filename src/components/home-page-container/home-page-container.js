import React, { useState, useEffect} from 'react';
import AboutUs from './about-us';
import HomeCompanies from './home-companies';
import HomeJobs from './home-jobs';
import { Container } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { firestore } from '../firebase/db';

const styles = {
	home: {
		marginTop: 24,
		marginBottom: 24,
	},
};

const HomePageContainer = (props) => {
  const { classes } = props;
  const [jobs, setJobs] = useState([]);
  const [companies, setCompanies]= useState([]);

  useEffect(() => {
    let jobsData = [];
    let companiesData =[];
    const docRef = firestore.collection("companies");
    docRef.get().then(function (querySnapshot) {
      querySnapshot.forEach(function (doc) {
        if (doc.data().companyJobs && doc.data().companyJobs.length !== 0) {
          companiesData.push(doc.data());
          jobsData = jobsData.concat(doc.data().companyJobs);
        };
      });
    });
    companiesData.sort((a, b) => b.companyViewCount - a.companyViewCount);
    companiesData = companiesData.slice(0, 6);
    jobsData.sort((a, b) => b.viewCount - a.viewCount);
    jobsData = jobsData.slice(0, 6);
    setJobs(jobsData);
    setCompanies(companiesData);
  }, []);
  return (
    <Container className={classes.home}>
      {companies.length? <HomeCompanies companies = {companies}/> : null}
      {companies.length?<HomeJobs jobs = {jobs} />: null}
      <AboutUs />
    </Container>
  );
};

export default withStyles(styles)(HomePageContainer);