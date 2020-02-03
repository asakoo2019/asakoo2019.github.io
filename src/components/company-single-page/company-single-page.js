import React, { useEffect, useState } from 'react';
import { Grid, Container } from '@material-ui/core';
// import { makeStyles } from '@material-ui/core/styles';
import TopBar from './top-bar/top-bar';
import AboutCompany from './about-company-bar/about-company';
import ActiveJobs from './activ-jobs-bar/activ-jobs';
import Contacts from './contacts-bar/company-contacts';
import { useParams } from "react-router-dom";
import { firestore } from '../firebase/db';

// const useStyles = makeStyles(theme=> ({
//   root: {
//     flexGrow: 1,
//     // overflow: 'hidden',
//     // padding: theme.spacing(0, 3),
//   },
//   // component: {
//   //   marginTop: theme.spacing(1),
//   //   // padding: theme.spacing(2),
//   // },
  
// }));

function CompaniesSinglePage() {
  const [company, setCompany] = useState({});
  const params = useParams();

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
        <Grid
          container
        >
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

  return (
    <Container maxWidth='lg' //className = {classes.root}
    >
      {drawPage()}
    </Container>
  );
}

export default CompaniesSinglePage;