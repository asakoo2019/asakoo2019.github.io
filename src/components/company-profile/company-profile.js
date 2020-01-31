import React from 'react';
import { Grid, Container } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import classNames from 'classnames';
import AboutCompanyModal from './about-company-modal';
import CompanyImageBlock from './company-image-block';
import PhoneIcon from '@material-ui/icons/Phone';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import MailIcon from '@material-ui/icons/Mail';
import CategoryIcon from '@material-ui/icons/Category';
import DateRangeIcon from '@material-ui/icons/DateRange';
import CompanySummaryModal from './company-summary-modal';
import CompanyJobs from './company-jobs';
import CompanyJobsModal from './company-jobs-modal';
import './company-profile.css';

const styles = {
  companyAllBlocks: {
    borderBottom: '1px solid #FE654F',
    marginBottom: 20,
    paddingBottom: 20,
  },
  aboutCompanyBlock: {
    marginTop: 20,
  },
  companyName: {
    marginRight: 15,
  },
  companyLine: {
    padding: 8,
    margin: 0,
  },
  aboutCompanyIcons: {
    color: '#FE654F',
  },
};

const mStP = (state) => ({
  company: state,
});

const CompanyProfile = (props) => {
  let { classes, company, showItems } = props;
  company = company ? company : {};
  const id = company.id;

  return (
    <Container className='companyBlock'>
      
       {/* About Company Block */}
       <Grid container
        className={classNames(classes.aboutCompanyBlock, classes.companyAllBlocks)}
        justify='space-between'
        alignItems='center'>
        <Grid container
          item xs={12} sm={4} md={2}>
          {showItems ? <CompanyImageBlock showItems={showItems} company={company} id={id} /> : <CompanyImageBlock company={company} id={id} />}
        </Grid>
        <Grid container
          item xs={12} sm={8} md={10}
          direction='column'>
          <Grid container
            justify='space-around'
            alignItems='center'>
            <Grid container item xs={11}>
              <h5 className={classes.companyName}>{company.companyName}</h5>
              <h5>{company.registerName}</h5>
            </Grid>
            {showItems && <AboutCompanyModal company={company} id={id} />}
          </Grid>
          <Grid container
            justify='space-around'>
            <Grid container
              item lg={3} md={6} sm={12}
              alignItems='center'>
              <PhoneIcon className={classes.aboutCompanyIcons}/>
              <p className={classes.companyLine}>{company.companyPhoneNumber}</p>
            </Grid>
            <Grid container
              item lg={4} md={6} sm={12}
              alignItems='center'>
              <MailIcon className={classes.aboutCompanyIcons}/>
              <p className={classes.companyLine}>{company.email}</p>
            </Grid>
            <Grid container
              item lg={5} sm={12}
              alignItems='center'>
            <LocationOnIcon className={classes.aboutCompanyIcons}/>
              <p className={classes.companyLine}>
                {`${company.companyAdress} ${company.companyCity} ${company.companyCountry}`}
              </p>
            </Grid>
          </Grid>
          <Grid container
            alignItems='center'>
            <DateRangeIcon className={classes.aboutCompanyIcons}/>
            <p className={classes.companyLine}>
              {company.companyCreatingData}
            </p>
          </Grid>
          <Grid container
            alignItems='center'>
            <CategoryIcon className={classes.aboutCompanyIcons}/>
            <p className={classes.companyLine}>
              {company.companyCategory}
            </p>
          </Grid>
        </Grid>
      </Grid>

      {/* Company Summary Block */}
      <Grid container
        className={classNames(classes.companySummaryBlock, classes.companyAllBlocks)}
        alignItems='center'
        justify='space-between'>
        <Grid item xs={10}>
          <h5>Summary</h5>
          <p>
            {company.aboutCompany ? company.aboutCompany : 'Add a short professional introduction by highlighting your most valuable skills and experiences in a few sentences.'}
          </p>
        </Grid>
        <Grid container item xs={1}
          justify='flex-end'>
          {showItems && <CompanySummaryModal company={company} id={id} />}
        </Grid>
      </Grid>

      {/* Company Jobs Block */}
      <Grid container
        className={classNames(classes.companyJobsBlock, classes.companyAllBlocks)}
        alignItems='center'
        justify='space-between'>
        <Grid item xs={10}>
          <h5>Jobs</h5>
          {company.companyJobs ? (company.companyJobs.length ? (showItems ? <CompanyJobs company={company} id={id} showItems={showItems}/> : <CompanyJobs company={company} id={id} />) : 'Add jobs.') : null}
        </Grid>
        <Grid container item xs={1}
          justify='flex-end'>
          {showItems ? <CompanyJobsModal company={company} showItems={showItems} id={id} /> : <CompanyJobsModal company={company} id={id} />}
        </Grid>
      </Grid>
      
    </Container>
  );
};

export default connect(mStP)(withStyles(styles)(CompanyProfile));