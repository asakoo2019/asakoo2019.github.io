import React, {useEffect, useState}from 'react';
import Container from '@material-ui/core/Container';
import TopBar from './single-page-components/top-bar/topBar';
//import { makeStyles } from '@material-ui/core/styles';
// import AboutCompany from './single-page-components/about-comp/about-comp';
// import ActiveJobs from './single-page-components/activ-jobs/activ-jobs';
// import Contacts from './single-page-components/contacts-bar/contacts';
 import {useParams} from "react-router-dom";
 import {firestore} from '../../firebase/db';


function CompaniesSinglePage (){

  const params  = useParams();
  const [company, setCompany] = useState({});

  useEffect(() => {
    firestore.collection("companies").get().then((querySnapshot) => {
      let data = [];
      let company = null;
      querySnapshot.forEach((doc) => {
        if (Object.keys(doc.data()).length !== 0) {
          data.push(doc.data());
        };
      });
      data.forEach (item => {
        if (params.id === item.id){
          company = item;
        }
      })
      setCompany(company);
    });
  }, []);
  //console.log(company)
  return(
    <Container maxWidth = 'lg'> 
      <TopBar companyInfo = {company} />
      {/* <AboutCompany companyInfo = {company}/> */}
      {/* <ActiveJobs companyInfo = {company}/> */}
      {/* <Contacts companyInfo = {company}/> */}
    </Container>
  );
}
  
  export default CompaniesSinglePage;