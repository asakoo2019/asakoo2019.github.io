import React, { useState, useEffect } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Grid, Button } from '@material-ui/core';
import { useHistory } from "react-router-dom";
import { firestore } from '../../firebase/db';

const styles = {
  aboutCompany: {
    borderRadius: 10,
    marginTop: 6,
    padding: 20,
    background: 'linear-gradient(to right, rgba(244, 67, 54, 0.2), rgba(76, 175, 80, .2))',
    cursor: 'pointer'
  },
  allCompaniesBtn: {
    margin: 20,
    backgroundColor: '#FE654F'
  },
  companyLogo: {
    borderRadius: 10,
    width: '90%'
  },
  aboutCompanyText: {
    textAlign: 'center'
  }
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
        <Grid justify="center"
          container>
          <img className={classes.companyLogo} src={el.companyImage} alt={el.companyName}/>
        </Grid>
        <Grid>
          <h6 className={classes.aboutCompanyText}> {el.aboutCompany} </h6>
        </Grid>
      </Grid>
    );
  });

  return (
    <Grid className={classes.companies}
      container
      direction='column'
      alignItems='center'>
      <h2>Top companies</h2>
      <Grid container
        justify="space-around">
        {company}
      </Grid>
      <Button className={classes.allCompaniesBtn}
        variant='contained'
        onClick={handleClick}>
        All companies
      </Button>
    </Grid>
  );
};

export default withStyles(styles)(HomeCompanies);