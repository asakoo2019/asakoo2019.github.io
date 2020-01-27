import React, {useEffect, useState}from 'react';
import Container from '@material-ui/core/Container';
import {Grid} from '@material-ui/core';
import TopBar from './single-page-components/top-bar/topBar';
//import { makeStyles } from '@material-ui/core/styles';
import AboutCompany from './single-page-components/about-company/about-company';
import ActiveJobs from './single-page-components/activ-jobs/activ-jobs';
import Contacts from './single-page-components/contacts-bar/company-contacts';
import {useParams} from "react-router-dom";
import {firestore} from '../../firebase/db';
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
    constructor(companyName, registerName, companyCreatingData, id, email, companyViewCount, companyJobs, companyCategory) { 
      this.companyName = companyName;
      this.registerName = registerName;
      this.companyCreatingData = companyCreatingData;
      this.id = id;
      this.email = `${email}@mail.ru`;
      this.registrationType = 'emloyer';
      this.companyViewCount = companyViewCount;
      this.aboutCompany = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.' 
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
    let companyJobs = []
    companyJobs.length = Math.floor(Math.random() * 10) + 1;
    let companyCategory = '';
    if (c < 12){
      companyCategory = companyCategoryArr[c++]
    } else {
      c = 0;
      companyCategory = companyCategoryArr[c++]
  }
  let comp = new Company(companyName + '_' + i, registerName + '_' + i, companyCreatingData++, id, email, companyViewCount, companyJobs, companyCategory)
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
  const params  = useParams();
  const [company, setCompany] = useState({});
  console.log(params)
  useEffect(() => {
    let company = null;
    data.forEach (item => {
        if (params.id === item.id){
          company = item;
        }
      })
    setCompany(company);
  }, []);
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
      <Grid
        container
        direction="column"
        justify="flex-start"
        alignItems="center"
        //className = {classes.mainGrid}
      >
        <TopBar companyInfo = {company} />
        <AboutCompany companyInfo = {company}/>
        <ActiveJobs companyInfo = {company}/>
        <Contacts companyInfo = {company}/>
      </Grid>
      
    </Container>
  );
}
  
  export default CompaniesSinglePage;