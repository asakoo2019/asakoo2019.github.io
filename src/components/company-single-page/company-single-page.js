import React, { useEffect, useState } from 'react';
import { Grid, Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import TopBar from './top-bar';
import AboutCompany from './about-company-bar';
import ActiveJobs from './activ-jobs-bar';
import Contacts from './contacts-bar';
import { useParams } from "react-router-dom";
import { firestore } from '../firebase/db';

const useStyles = makeStyles(theme=> ({
  root: {
    flexGrow: 1,
  },
}));

function CompaniesSinglePage() {
  const classes = useStyles();
  const [company, setCompany] = useState({});
  const params = useParams();
  useEffect(() => {
    firestore.collection("companies").get().then((querySnapshot) => {
      let data = [];
      let company;
      querySnapshot.forEach((doc) => {
        if (Object.keys(doc.data()).length !== 0) {
          data.push(doc.data());
        };
      });
      data.forEach(item => {
        if (params.id === item.id) {
          company = item;
          setCompany(company);
        }
      })
    });
  }, [params.id]);
  const drawPage = ()=> {
    if (company.hasOwnProperty('id')) {
      const aboutcompany = company.aboutCompany ? <AboutCompany companyInfo={company} /> : null;
      const activJobs = company.companyJobs.length ? <ActiveJobs companyInfo={company} /> : null;
      const contacts = (company.email || company.userCity || company.companyWebsite) ? <Contacts companyInfo={company} /> : null;
      firestore.collection("companies").doc(params.id)
      .update({
        companyViewCount: (company.companyViewCount + 1)
      })
      return (
        <Grid container className = {classes.root}>
          <TopBar companyInfo={company} />
            {aboutcompany}
            {activJobs}
            {contacts}
        </Grid>
      );

    } else {
      return (<div></div>);
    }
  }
  
  return (
    <Container maxWidth='lg' >
      {drawPage()}
    </Container>
  );
}

export default CompaniesSinglePage;