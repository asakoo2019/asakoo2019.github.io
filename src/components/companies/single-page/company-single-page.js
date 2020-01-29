import React, {useEffect, useState}from 'react';
import Container from '@material-ui/core/Container';
import {Grid} from '@material-ui/core';
import TopBar from './single-page-components/top-bar/topBar';
//import { makeStyles } from '@material-ui/core/styles';
import AboutCompany from './single-page-components/about-company/about-company';
import ActiveJobs from './single-page-components/activ-jobs/activ-jobs';
import Contacts from './single-page-components/contacts-bar/company-contacts';
import {useParams} from "react-router-dom";
//import {firestore} from '../../firebase/db';
//import classes from '*.module.css';


const companyCategoryArr = [
  'Finance/Banking/Insurance',
  'Quality Assurance/Control',
  'Design/Architecture/Construction',
  'Consulting/ Legal',
  'Import/Export/Trade',
  'Marketing/Advertising/PR',
  'Tourism/Hospitality/Entertainment',
  'Medical/Pharmaceutical',
  'Sports /Beauty',
  'Education',
  'Retail business',
  'NGO/International organization',
  'Services',
  'Mining/Manufacturing/Production',
  'Online Service',
];
const createData = () => {
  class Company {
    constructor(companyName, registerName, companyCreatingData, id, email, companyViewCount, aboutCompany, companyJobs, companyCategory) { 
      this.companyName = companyName;
      this.registerName = registerName;
      this.companyCreatingData = companyCreatingData;
      this.id = id;
      this.email = `${email}@mail.ru`;
      this.registrationType = 'emloyer';
      this.companyViewCount = companyViewCount;
      this.aboutCompany = aboutCompany;  
      this.companyImage = "https://library.kissclipart.com/20180922/eve/kissclipart-icon-full-name-clipart-computer-icons-avatar-icon-f6cf26ff2213f36e.jpg";
      this.companyBackground = 'http://braingapps.com/wp-content/uploads/2013/08/some-company.png';
      this.companyJobs = companyJobs;
      this.companyWebsite =  null;
      this.companyCategory =  companyCategory;
      this.userCity =  'Yerevan';
      this.userCountry =  'Armenia';
    }
  }
  let data = [];
  let c = 0;
  let companyName = 'compName';
  let registerName = 'regName';
  let companyCreatingData = 1910
  for (let i = 0; i < 100; i++){
    let id  = `${i}`;
    let email = companyName + '_' + i;
    let companyViewCount = Math.floor(Math.random() * 100) + 1;
    let companyJobs = [];
    if (i%2 === 0){
      companyJobs = [1, 2, 3, 4]
      // companyJobs.length = Math.floor(Math.random() * 10) + 1;
    }
    let aboutCompany = '';
    if (i%2 === 0){
      aboutCompany = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
    }
    let companyCategory = '';
    if (c < 12){
      companyCategory = companyCategoryArr[c++]
    } else {
      c = 0;
      companyCategory = companyCategoryArr[c++]
  }
  let comp = new Company(companyName + '_' + i, registerName + '_' + i, companyCreatingData++, id, email, companyViewCount, aboutCompany, companyJobs, companyCategory)
  data.push(comp);
  }
  return data
}
const data = createData();
// const useStyles = makeStyles(theme => ({
//   root: {
//     flexGrow: 1,
//   },
//   mainGrid: {
//     width: '100%',
//   }
// }));
function CompaniesSinglePage (){
  //const classes = useStyles();
  const [company, setCompany] = useState({});
  const params  = useParams();
  useEffect(() => {
    let company = null;
    data.forEach (item => {
        if (params.id === item.id){
          company = item;
        }
      })
    setCompany(company);
  }, []);

  function drawPage() {
    if (company.hasOwnProperty('id')){
        const aboutcompany = company.aboutCompany ? <AboutCompany companyInfo = {company}/> : null;
        const activJobs = company.companyJobs.length ? <ActiveJobs companyInfo = {company}/>: null;
        const contacts = (company.email || company.userCity || company.companyWebsite) ? <Contacts companyInfo = {company}/> : null;
      return (
        <Grid
          container
          direction="column"
          justify="flex-start"
          alignItems="center"
          //className = {classes.mainGrid}
        >
          <TopBar companyInfo = {company} />
          {aboutcompany}
          {activJobs}
          {contacts}
      </Grid>
      );
      
    } else {
      return (<div></div>);
    }
  }
  


  // useEffect(() => {
  //   firestore.collection("companies").get().then((querySnapshot) => {
  //     let data = [];
  //     let company = null;
  //     querySnapshot.forEach((doc) => {
  //       if (Object.keys(doc.data()).length !== 0) {
  //         data.push(doc.data());
  //       };
  //     });
  //     data.forEach (item => {
  //       if (params.id === item.id){
  //         company = item;
  //       }
  //     })
  //     setCompany(company);
  //   });
  // }, []);

  return(
    <Container maxWidth = 'lg'
      //className = {classes.root}
    > 
       {drawPage()}      
    </Container>
  );
}
  
  export default CompaniesSinglePage;