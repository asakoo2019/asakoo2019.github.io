import React, {useState, useEffect} from 'react';
import CompanyFilter from './companies-components/company-filter';
import CompaniesBar from './companies-components/companies-bar';
import CompaniesSinglePage from './single-page/company-single-page';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import {BrowserRouter as Switch, Route} from "react-router-dom";
import {firestore} from '../firebase/db';


// const companyCategoryArr = ['Finance/Banking/Insurance', 'Information technologies', 'Import/Export/Trade', 'Marketing/Advertising/PR', 'Tourism/Hospitality/Entertainment', 'Medical/Pharmaceutical', 'TV/Radio/Media', 'Telecommunications', 'Service', 'Government',
// 'Agriculture/Winemaking', 'Online Service',];
// const createData = () => {
//   class Company {
//     constructor(companyName, registerName, companyCreatingData, id, email, companyViewCount, companyJobs, companyCategory) { 
//       this.companyName = companyName;
//       this.registerName = registerName;
//       this.companyCreatingData = companyCreatingData;
//       this.id = id;
//       this.email = `${email}@mail.ru`;
//       this.registrationType = 'emloyer';
//       this.companyViewCount = companyViewCount;
//       this.aboutCompany = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.' 
//       this.companyImage = "https://library.kissclipart.com/20180922/eve/kissclipart-icon-full-name-clipart-computer-icons-avatar-icon-f6cf26ff2213f36e.jpg";
//       this.companyBackground = 'http://braingapps.com/wp-content/uploads/2013/08/some-company.png';
//       this.companyJobs = companyJobs;
//       this.companyWebsite =  null;
//       this.companyCategory =  companyCategory;
//       this.userCity =  'Yerevan';
//       this.userCountry =  'Armenia';
//     }
//   }
//   let data = [];
//   let c = 0;
//   let companyName = 'compName';
//   let registerName = 'regName';
//   let companyCreatingData = 1910
//   for (let i = 0; i < 100; i++){
//     let id  = `${i}`;
//     let email = companyName + '_' + i;
//     let companyViewCount = Math.floor(Math.random() * 100) + 1;
//     let companyJobs = Math.floor(Math.random() * 10) + 1;
//     let companyCategory = '';
//     if (c < 12){
//       companyCategory = companyCategoryArr[c++]
//     } else {
//       c = 0;
//       companyCategory = companyCategoryArr[c++]
//   }
//   let comp = new Company(companyName + '_' + i, registerName + '_' + i, companyCreatingData++, id, email, companyViewCount, companyJobs, companyCategory)
//   data.push(comp);
//   }
//   return data
// }
// const data = createData(); 


// function Companies (){

//   return(
        
//   );
// }
const getData = () => { 
   return firestore.collection("companies").get().then((querySnapshot) => {
    let companies = [];
    querySnapshot.forEach((doc) => {
      if (Object.keys(doc.data()).length !== 0) {
        companies.push(doc.data());
      };
    });
    return companies;
  });
}

function Companies (){
  const [currPage, setCurrentPage] = useState(10);
  const [allCompanies, setAllCompanies] = useState (true);
  const [type, setType] = useState ({
    ['Finance/Banking/Insurance']: false,
    ['Information technologies']: false,
    ['Import/Export/Trade']: false,
    ['Marketing/Advertising/PR']: false,
    ['Tourism/Hospitality/Entertainment']: false,
    ['Medical/Pharmaceutical']: false,
    ['TV/Radio/Media']: false,
    ['Telecommunications']: false,
    ['Service']: false,
    ['Government']: false,
    ['Agriculture/Winemaking']: false,
    ['Online Service']: false,
  });
  const [data, setData] = useState([]);

  useEffect(() => {
    getData().then(smth => setData(smth) );
  }, []);


  function fiterChecked (e){
    const {checked, value} = e.target; 
    type[`${value}`] =  checked;
    setType(type);
    const arr = [];
    for (let key in type){
      if (type[key]){ arr.push(key)} 
    }
    if(arr.length){
      setAllCompanies(false);
    } else {
      setAllCompanies(true);
    }
    setCurrentPage(10);
  }

  function otherCopmanies (e) {
    let num = e.target.innerHTML*10;
    setCurrentPage(num);
  }

  function drawCompanies (data){
    const arr = [];
    let result = [];
    for (let key in type){
      if ( type[key] ){ arr.push(key)} 
    }
    for(let i = 0; i < arr.length; i++){
      for (let j = 0; j < data.length; j++){
        if (arr[i] === data[j].companyCategory){
          result.push(data[j])
        }
      }
    }
    // console.log(arr)
    // console.log(result)
    return result
  }
    // console.log(data.length)
    const employer = allCompanies ? [...data] : drawCompanies(data);
    // console.log(employer);
    return(
     
     <>
          <Container maxWidth = 'lg'>         
            <Grid container>
              <Grid 
                container
                alignItems = 'flex-start'
                direction = 'column'
                item xs ={3}
                className =  'companyFilterByH'
              >
                <CompanyFilter fiterChecked = {fiterChecked} filterBarArr = {Object.keys(type)}/>
              </Grid>
              <Grid
                container
                alignItems = 'center'
                direction = 'column'
                item xs ={9}
                className =  'companiesBarByH'
              >
                <CompaniesBar employer = {employer} currPage = {currPage} otherCopmanies = {otherCopmanies}/>
              </Grid>
            </Grid>     
          </Container>
      <Switch> 
      <Route exact path = {`companies/:name`}>
        <CompaniesSinglePage/>
      </Route> 
    </Switch>
    </>
    );
}

export default Companies;