import React, { useState, useEffect} from 'react';
import { Grid, Container } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { firestore, auth } from '../firebase/db';
import { connect } from 'react-redux';
import { useHistory } from "react-router-dom";
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
  const [company, setCompany] = useState({});
  const [id, setId] = useState(' ');
  const [downloadURL, setCompanyImage] = useState(null);
  const [companyName, setCompanyName] = useState(null);
  const [registerName, setRegisterName] = useState(null);
  const [companyPhoneNumber, setCompanyPhoneNumber] = useState(null);
  const [companyAdress, setCompanyAdress] = useState(null);
  const [companyCity, setCompanyCity] = useState(null);
  const [companyCountry, setCompanyCountry] = useState(null);
  const [companyCreatingData, setCompanyCreatingData] = useState(null);
  const [aboutCompany, setAboutCompany] = useState(null);
  const [companyCategory, setCompanyCategory] = useState(null);
  const [companyJobs, setCompanyJobs] = useState(null);
  const { classes, dispatch } = props;
  const history = useHistory();

  useEffect(() => {
    let unmounted = false;
    const pathName = history.location.pathname;
    const LastSleshIndex = pathName.lastIndexOf('/');
    const searchId = pathName.slice(LastSleshIndex + 1);
    auth.onAuthStateChanged((logedInCompany) => {
      if (logedInCompany) {
        dispatch({type: "SIGN-IN", payload: company});
        if (!searchId) {
          setId(logedInCompany.uid);
          // dispatch({type: "SIGN-OUT", payload: company});
        } else {
          setId(searchId);
        }
      } else {
        if(!unmounted){
          setId(searchId);
        };
      };
    });
    return () => {
      unmounted = true;
    };
  }, [dispatch, history.location.pathname, company]);

  useEffect(() => {
    let unmounted = false;
    if (id !== ' ') {
      const docRef = firestore.collection("companies").doc(id);
      docRef.get().then(function(doc) {
        if (doc.exists) {
          if(!unmounted) {
            setCompany(doc.data());
          };
        } else {
          console.log("No such document!");
        }})
      .catch(function(error) {
        console.log("Error getting document:", error);
      });
    };
    return () => {
      unmounted = true;
    };
  }, [id, downloadURL, companyName, registerName, companyPhoneNumber, companyAdress, companyCity, companyCountry, companyCreatingData, aboutCompany, companyCategory, companyJobs])

  useEffect(() => {
    if (downloadURL !== null) {
      firestore.collection("companies").doc(id)
        .update({
          companyImage: downloadURL
        }).then(function() {
          // console.log("Document successfully updated!");
        }).catch(function(error) {
          console.error("Error updating document: ", error);
        });
    };

    if (companyName !== null) {
      firestore.collection("companies").doc(id)
        .update({
          companyName: companyName
        }).then(function() {
          // console.log("Document successfully updated!");
        }).catch(function(error) {
          console.error("Error updating document: ", error);
        });
    };

    if (registerName !== null) {
      firestore.collection("companies").doc(id)
        .update({
          registerName: registerName
        }).then(function() {
          // console.log("Document successfully updated!");
        }).catch(function(error) {
          console.error("Error updating document: ", error);
        });
    };

    if (companyPhoneNumber !== null) {
      firestore.collection("companies").doc(id)
        .update({
          companyPhoneNumber: companyPhoneNumber
        }).then(function() {
          // console.log("Document successfully updated!");
        }).catch(function(error) {
          console.error("Error updating document: ", error);
        });
    };

    if (companyAdress !== null) {
      firestore.collection("companies").doc(id)
        .update({
          companyAdress: companyAdress
        }).then(function() {
          // console.log("Document successfully updated!");
        }).catch(function(error) {
          console.error("Error updating document: ", error);
        });
    };

    if (companyCity !== null) {
      firestore.collection("companies").doc(id)
        .update({
          companyCity: companyCity
        }).then(function() {
          // console.log("Document successfully updated!");
        }).catch(function(error) {
          console.error("Error updating document: ", error);
        });
    };

    if (companyCountry !== null) {
      firestore.collection("companies").doc(id)
        .update({
          companyCountry: companyCountry
        }).then(function() {
          // console.log("Document successfully updated!");
        }).catch(function(error) {
          console.error("Error updating document: ", error);
        });
    };

    if (companyCreatingData !== null) {
      firestore.collection("companies").doc(id)
        .update({
          companyCreatingData: companyCreatingData
        }).then(function() {
          // console.log("Document successfully updated!");
        }).catch(function(error) {
          console.error("Error updating document: ", error);
        });
    };

    if (companyCategory !== null) {
      firestore.collection("companies").doc(id)
      .update({
        companyCategory: companyCategory
      }).then(function() {
        // console.log("Document successfully updated!");
      }).catch(function(error) {
        console.error("Error updating document: ", error);
      });
    };
  }, [id, downloadURL, companyName, registerName, companyPhoneNumber, companyAdress, companyCity, companyCountry, companyCreatingData, companyCategory]);
  
  useEffect(() => {
    if (aboutCompany !== null) {
      firestore.collection("companies").doc(id)
      .update({
        aboutCompany: aboutCompany
      }).then(function() {
        // console.log("Document successfully updated!");
      }).catch(function(error) {
        console.error("Error updating document: ", error);
      });
    };
  }, [id, aboutCompany]);

  useEffect(() => {
    if (companyJobs !== null) {
      firestore.collection("companies").doc(id)
      .update({
        companyJobs: companyJobs
      }).then(function() {
        // console.log("Document successfully updated!");
      }).catch(function(error) {
        console.error("Error updating document: ", error);
      });
    };
  }, [id, companyJobs]);

  return (
    <Container className='companyBlock'>
      
       {/* About Company Block */}
       <Grid container
        className={classNames(classes.aboutCompanyBlock, classes.companyAllBlocks)}
        justify='space-between'
        alignItems='center'>
        <Grid container
          item xs={12} sm={4} md={2}>
          {props.company ? <CompanyImageBlock setCompanyImage={setCompanyImage} company={company} id={id} /> : <CompanyImageBlock company={company} id={id} />}
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
            {props.company && <AboutCompanyModal
              company={company}
              setCompanyName={setCompanyName}
              setRegisterName={setRegisterName}
              setCompanyCity={setCompanyCity}
              setCompanyCountry={setCompanyCountry}
              setCompanyPhoneNumber={setCompanyPhoneNumber}
              setCompanyAdress={setCompanyAdress}
              setCompanyCreatingData={setCompanyCreatingData}
              setCompanyCategory={setCompanyCategory}/>}
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
          {props.company && <CompanySummaryModal
            company={company}
            id={id}
            setAboutCompany={setAboutCompany}/>}
        </Grid>
      </Grid>

      {/* Company Jobs Block */}
      <Grid container
        className={classNames(classes.companyJobsBlock, classes.companyAllBlocks)}
        alignItems='center'
        justify='space-between'>
        <Grid item xs={10}>
          <h5>Jobs</h5>
          {company.companyJobs ? (company.companyJobs.length ? (props.company ? <CompanyJobs company={company} setCompanyJobs={setCompanyJobs}/> : <CompanyJobs company={company} />) : 'Add jobs.') : null}
        </Grid>
        <Grid container item xs={1}
          justify='flex-end'>
          {props.company ? <CompanyJobsModal company={company} setCompanyJobs={setCompanyJobs} /> : <CompanyJobsModal company={company} />}
        </Grid>
      </Grid>
      
    </Container>
  );
};

export default connect(mStP)(withStyles(styles)(CompanyProfile));