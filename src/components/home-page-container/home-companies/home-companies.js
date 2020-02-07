import React, { useState, useEffect } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Grid, Button } from '@material-ui/core';
import { useHistory } from "react-router-dom";
import { firestore } from '../../firebase/db';

const styles = {
  aboutCompany: {
    marginTop: 6,
    padding: 15,
    backgroundColor: 'rgb(255, 255, 255)',
    cursor: 'pointer',
    transition: '.3s',
		"&:hover": {
			boxShadow: '0px 0px 10px 3px rgba(0,0,0,0.5)',
			transition: '.3s',
		}
  },
  allCompaniesBtn: {
    margin: 20,
    backgroundColor: '#FE654F',
  },
  companyLogo: {
    width: '90%',
    height: 200,
    objectFit: 'cover',
  },
  aboutCompanyText: {
    textAlign: 'center',
  },
  topCompaniesTitle: {
    color: '#FE654F',
  },
};

const HomeCompanies = (props) => {
  const {classes} = props;
  const [companies, setCompanies] = useState([]);
  const history = useHistory();

  useEffect(() => {
    firestore.collection("companies").get().then((querySnapshot) => {
      let currentCompany = [];
      querySnapshot.forEach((doc) => {
        if (Object.keys(doc.data()).length !== 0) {
          currentCompany.push(doc.data());
        };
      });
      setCompanies(currentCompany);
    });
  }, []);

  const handleClick = () => {
    history.push("/companies");
  };

  const singleCompanyBtn = (id) => {
    history.push(`companies/${id}`);
  };

  companies.sort((a, b) => {
    return b.companyViewCount - a.companyViewCount;
  });

  const company = companies.slice(0, 3).map((el) => {
    if (el.aboutCompany.length > 50) {
      el.aboutCompany = el.aboutCompany.substring(0, 50) + "...";
    };
    return (
      <Grid container
        className={classes.aboutCompany}
        alignItems="center"
        item xs={3}
        key={el.id}
        onClick={() => singleCompanyBtn(el.id)}>
        <Grid container justify='center'>
          <img className={classes.companyLogo} src={el.companyImage} alt={el.companyName}/>
        </Grid>
        <Grid container justify='center'>
          <h6 className={classes.aboutCompanyText}> {el.companyName} </h6>
        </Grid>
        <Grid container justify='center'>
          <p className={classes.aboutCompanyText}> {el.aboutCompany} </p>
        </Grid>
        <Grid container justify='center'>
          <Button className={classes.allCompaniesBtn}
            variant='contained'
            onClick={handleClick}>
            View more
          </Button>
        </Grid>
      </Grid>
    );
  });

  return (
    <>
      {companies.length ?
      <Grid className={classes.companies}
        container
        direction='column'
        alignItems='center'>
        <h2 className={classes.topCompaniesTitle}>{'Top companies'.toUpperCase()}</h2>
        <Grid container
          justify='space-between'>
          {company}
        </Grid>
        <Button className={classes.allCompaniesBtn}
          variant='contained'
          onClick={handleClick}>
          All companies
        </Button>
      </Grid> : null}
    </>
  );
};

export default withStyles(styles)(HomeCompanies);