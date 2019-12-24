import React from 'react';
import './companies.css';
import CompanyFilter from './companies -components/company-filter';
import CompaniesBar from './companies -components/companies-bar';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
const emp = [
  {
    userId: '123bank',
    companyName: 'AmeriaBank',
    regtype: 'employer',
    industryType: 'Finance/Banking/Insurance',
  }, 
  {
  userId: '234bank',
  companyName: 'IdBank',
  regtype: 'employer',
  industryType: 'Finance/Banking/Insurance',
  },
  {
    userId: '345bank',
    companyName: 'HSBC',
    regtype: 'employer',
    industryType: 'Finance/Banking/Insurance',
  },
  {
    userId: '456bank',
    companyName: 'InecoBank',
    regtype: 'employer',
    industryType: 'Finance/Banking/Insurance',
  },
  {
    userId: '123inftech',
    companyName: 'Digitain',
    regtype: 'employer',
    industryType: 'Information technologies',
  }, 
  {
    userId: '234inftech',
    companyName: 'SoftConstract',
    regtype: 'employer',
    industryType: 'Information technologies',
  },
  { 
    userId: '345inftech',
    companyName: 'PicsArt',
    regtype: 'employer',
    industryType: 'Information technologies',
  },
  { 
    userId: '456inftech',
    companyName: 'Workfront',
    regtype: 'employer',
    industryType: 'Information technologies',
  },
   {
    userId: '123iet',
    companyName: 'SAS',
    regtype: 'employer',
    industryType: 'Import/Export/Trade',
  },
  {
    userId: '234iet',
    companyName: 'Reyma',
    regtype: 'employer',
    industryType: 'Import/Export/Trade',
  },
  {
    userId: '345iet',
    companyName: 'MegaFood',
    regtype: 'employer',
    industryType: 'Import/Export/Trade',
  },
  {
    userId: '456iet',
    companyName: 'Sali',
    regtype: 'employer',
    industryType: 'Import/Export/Trade',
  },
  {
    userId: '567iet',
    companyName: 'ImexGroup',
    regtype: 'employer',
    industryType: 'Import/Export/Trade',
  },
  {
    userId: '123qwe',
    companyName: 'eworld',
    regtype: 'employer',
    industryType: 'Marketing/Advertising/PR',
  }, 
  {
    userId: '234qwe',
    companyName: 'Marriot Hotel',
    regtype: 'employer',
    industryType: 'Tourism/Hospitality/Entertainment',
  }, 
  {
    userId: '345qwe',
    companyName: 'Alfa-Farm',
    regtype: 'employer',
    industryType: 'Medical/Pharmaceutical',
  }, 
  {
    userId: '456qwe',
    companyName: 'Shant TV',
    regtype: 'employer',
    industryType: 'TV/Radio/Media',
  },
  {
    userId: '567qwe',
    companyName: 'Ucom',
    regtype: 'employer',
    industryType: 'Telecommunications',
  },
];

class Companies extends React.Component{
  constructor(props){
    super(props);
    this.state = {
        currPage: 10,
        allCompanies: true,
        type :{
          ['Finance/Banking/Insurance']: true,
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
        },
    };

    this.otherCopmanies = this.otherCopmanies.bind(this);
    this.fiterChecked = this.fiterChecked.bind(this);     
  }
  fiterChecked (e){
    const {checked, value} = e.target; 
    let {type} = this.state;
    type[`${value}`] =  checked;
    this.setState(state => ({
      type : type
    }));
    const arr = [];
    for (let key in type){
      if (type[key]){ arr.push(key)} 
    }
    if(arr.length){
      this.setState({allCompanies: false})
    } else {
      this.setState({allCompanies: true})
    }
  }
  otherCopmanies (e) {
    let num = e.target.innerHTML*10;
    this.setState(state => ({
      currPage: num
    }));
  }
  drawCompanies (emp){
    const {type} = this.state;
    const arr = [];
    let result =[];
    for (let key in type){
      if (type[key]){ arr.push(key)} 
    }
    for(let i = 0; i <arr.length; i++){
      for (let j = 0; j < emp.length; j++){
        if (arr[i] === emp[j].industryType){
          result.push(emp[j])
        }
      }
    }
    return result
  }
  render(){
    const {currPage} = this.state;
     
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
            <CompanyFilter fiterChecked = {this.fiterChecked} state = {this.state} filterBarArr = {Object.keys(this.state.type)}/>
          </Grid>
          <Grid
            container
            alignItems = 'center'
            direction = 'column'
            item xs ={9}
            className =  'companiesBarByH'
          >
            <CompaniesBar employer = {this.state.allCompanies ? [...emp] : this.drawCompanies(emp)} currPage = {currPage} otherCopmanies = {this.otherCopmanies}/>
          </Grid>
        </Grid>
      </Container>
    );
  }
}

export default Companies;