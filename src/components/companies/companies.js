import React, {useState, useEffect} from 'react';
//import CompanyFilter from './companies-components/company-filter';
import CompaniesBar from './companies-components/companies-bar';
import {Grid, Container, FormLabel, FormControl, FormGroup, FormControlLabel, Checkbox} from '@material-ui/core';
import {firestore} from '../firebase/db';


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

// const createData = () => {
//   class Company {
//     constructor(companyName, registerName, companyCreatingData, id, email, companyViewCount, aboutCompany, companyJobs, companyCategory) { 
//       this.companyName = companyName;
//       this.registerName = registerName;
//       this.companyCreatingData = companyCreatingData;
//       this.id = id;
//       this.email = `${email}@mail.ru`;
//       this.registrationType = 'emloyer';
//       this.companyViewCount = companyViewCount;
//       this.aboutCompany = aboutCompany;  
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
//     let companyJobs = [];
//     if (i%2 === 0){
//       companyJobs = [1, 2, 3, 4]
//       // companyJobs.length = Math.floor(Math.random() * 10) + 1;
//     }
//     let aboutCompany = '';
//     if (i%2 === 0){
//       aboutCompany = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
//     }
//     let companyCategory = '';
//     if (c < 12){
//       companyCategory = companyCategoryArr[c++]
//     } else {
//       c = 0;
//       companyCategory = companyCategoryArr[c++]
//   }
//   let comp = new Company(companyName + '_' + i, registerName + '_' + i, companyCreatingData++, id, email, companyViewCount, aboutCompany, companyJobs, companyCategory)
//   data.push(comp);
//   }
//   return data
// }
//const data = createData(); 

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

export default function Companies (){
  const [currPage, setCurrentPage] = useState(10);
  const [allCompanies, setAllCompanies] = useState (true);
  const [type, setType] = useState ([]);
  const [data, setData] = useState([]);

  const companies = companyCategoryArr.map(item => {
    return (
      <FormControlLabel
        key = {item}
        control ={<Checkbox/>}
        label = {item}
        value = {item}
        onChange = {(e) => filterCompany(e.target.value) }
      />
    );
  })
  function filterCompany (value){
    let arr = [...type];
    const x = type.indexOf(value);
    if (x < 0){
      arr.push(value);
    } else {
      arr = arr.filter(item => item!== value)
    }
    
    setType([...arr]);
    
    if (arr.length){
      setAllCompanies(false);
    } else {
      setAllCompanies(true);
    }
    setCurrentPage(10);
  }
  
  useEffect(() => {
    getData().then(smth => setData(smth) );
    //setData(createData());
  }, []);

  function otherCopmanies (e, i) {
    let num = i*10;
    setCurrentPage(num);
  }

  function drawCompanies (data){
    const result = [];
    const len = data.length;
    for (let i = 0; i < len; i++){
      for (let j = 0; j < type.length; j++){
        if (type[j]===data[i].companyCategory){
          result.push(data[i])
        }
        
      }
    }
    return result
  }
    const employer = allCompanies ? [...data] : drawCompanies(data);
    return(

          <Container maxWidth = 'lg'>         
            <Grid container>
              <Grid 
                container
                alignItems = 'flex-start'
                direction = 'column'
                item xs ={3}
                className =  'companyFilterByH'
              >
                <FormControl>
                  <FormLabel>Filter By Industry</FormLabel>
                    <FormGroup>
                        {companies}
                    </FormGroup>
                </FormControl>
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

    );
}