import React from 'react';
import './companies.css';
import CompanyFilter from './components/company-filter';
import CompaniesBar from './components/companies-bar';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';

class Companies extends React.Component{
  render(){
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
        userId: '123iet',
        companyName: 'Reyma',
        regtype: 'employer',
        industryType: 'Import/Export/Trade',
      },
      {
        userId: '123iet',
        companyName: 'MegaFood',
        regtype: 'employer',
        industryType: 'Import/Export/Trade',
      },
      {
        userId: '123iet',
        companyName: 'Sali',
        regtype: 'employer',
        industryType: 'Import/Export/Trade',
      },
      {
        userId: '123iet',
        companyName: 'ImexGroup',
        regtype: 'employer',
        industryType: 'Import/Export/Trade',
      },
      {
        userId: '456qwe',
        companyName: 'eworld',
        regtype: 'employer',
        industryType: 'Marketing/Advertising/PR',
      }, 
      {
        userId: '567qwe',
        companyName: 'Marriot Hotel',
        regtype: 'employer',
        industryType: 'Tourism/Hospitality/Entertainment',
      }, 
      {
        userId: '678qwe',
        companyName: 'Alfa-Farm',
        regtype: 'employer',
        industryType: 'Medical/Pharmaceutical',
      }, 
      {
        userId: '678qwe',
        companyName: 'Shant TV',
        regtype: 'employer',
        industryType: 'TV/Radio/Media',
      },
      {
        userId: '678qwe',
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
            <CompanyFilter/>
          </Grid>
          <Grid
            container
            alignItems = 'center'
            direction = 'column'
            item xs ={9}
            className =  'companiesBarByH'
          >
            <CompaniesBar employer = {workers}/>
          </Grid>
        </Grid>
  
      </Container>
    );
  }
}

export default Companies;