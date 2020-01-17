import React, {useState, useEffect} from 'react';
//import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import TopBar from './single-page-components/top-bar/topBar';
import AboutCompany from './single-page-components/about-comp/about-comp';
import ActiveJobs from './single-page-components/activ-jobs/activ-jobs';
import Contacts from './single-page-components/contacts-bar/contacts';
import {useParams } from "react-router-dom";

function CompaniesSinglePage ({data}){
  const companyName = useParams();
  // const [company, setCompany] = useState([]);
  // useEffect(()=>{
  //   fetchCompany(companyName.id);
  // },[]);

  function fetchCompany (name){
    // setCompany(data.filter(item=> item.companyName == name))
    return data.filter(item=> item.companyName == name);
  }
  const company = fetchCompany(companyName.id);
  return(
    <Container maxWidth = 'lg'> 
      {/* {console.log(company)} */}
      <TopBar companyInfo = {company[0]} />
      <AboutCompany companyInfo = {company[0]}/>
      <ActiveJobs companyInfo = {company[0]}/>
      <Contacts companyInfo = {company[0]}/>
    </Container>
  );
}
  
  export default CompaniesSinglePage;