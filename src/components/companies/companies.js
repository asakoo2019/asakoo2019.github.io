import React from 'react';
import './companies.css';
import CompanyFilter from './companies -components/company-filter';
import CompaniesBar from './companies -components/companies-bar';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';

class Companies extends React.Component{
  constructor(props){
    super(props);
    this.state = {
        currPage: 10,
        checkedA: false,
        checkedB: false,
        checkedC: false,
        checkedD: false,
        checkedE: false,
        checkedF: false,
        checkedG: false,
        checkedH: false,
        checkedI: false,
        checkedJ: false,
        checkedK: false,
        checkedL: false,
    };
    this.otherCopmanies = this.otherCopmanies.bind(this);
    this.fiterChecked = this.fiterChecked.bind(this);     
  }
  fiterChecked (e){
    e.target.checked ?  this.setState({[`${e.target.value}`]: true}):this.setState({[`${e.target.value}`]: false});   
    console.log(this.state[`${e.target.value}`])
  }
  otherCopmanies (e) {
    //debugger
    let num = e.target.innerHTML;
    let a  = num * 10;
    console.log(a)
    this.setState(state => ({
      currPage: a
    }));
  }
  render(){
    const {currPage} = this.state;
    const workers = [
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
            <CompanyFilter fiterChecked = {this.fiterChecked} state = {this.state}/>
          </Grid>
          <Grid
            container
            alignItems = 'center'
            direction = 'column'
            item xs ={9}
            className =  'companiesBarByH'
          >
            <CompaniesBar employer = {workers} currPage = {this.state.currPage} otherCopmanies = {this.otherCopmanies}/>
          </Grid>
        </Grid>
      </Container>
    );
  }
}

export default Companies;