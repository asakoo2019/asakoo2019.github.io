import React, { useState, useEffect } from 'react';
import CompanyFilterBar from './hidden-filter-bar';
import CompaniesBar from './companies-bar/companies-bar';
import { Grid, Container, makeStyles } from '@material-ui/core';
import { firestore } from '../firebase/db';
import { connect } from 'react-redux';
// import dataArray from './companyArray';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    marginTop: theme.spacing(1),
  },
}));

const mStP = (state) => ({
  state,
});

function Companies({ state }) {
  const classes = useStyles();
  const [currPage, setCurrentPage] = useState(10);
  const [type, setType] = useState([]);
  const [allCompanies, setAllCompanies] = useState(true);
  const [data, setData] = useState([]);
  let length = data.length;
  const noData = 'No results found, perhaps you’ve gone too far away. Try less keywords or filters.';

  useEffect(() => {
    if (typeof state.search === 'string') {
      setData([])
    } else if (state.search.length) {
      setData([...state.search]);
    } else {
      firestore.collection("companies").get().then((querySnapshot) => {
        const companies = [];
        querySnapshot.forEach((doc) => {
          if (Object.keys(doc.data()).length !== 0) {
            companies.push(doc.data());
          };
        })
        setData(companies);
      });
    }
  }, [state]);

function drawCompanies(data) {
  let result = [];
  let companies = [...data];
  const typeLength = type.length;
  if (typeLength) {
    companies.forEach(item => {
      for (let i = 0; i < typeLength; i++) {
        if (type[i] === item.companyCategory) {
          result.push(item)
        }
      }
    })
  } 
  if (!result.length && !typeLength) {result = companies;}
  result.sort((a, b) => b.companyViewCount - a.companyViewCount);
  length = result.length;
  result = result.slice(currPage - 10, currPage);
  return result
}

  function filterCompany(value) {
    let arr = [...type];
    const x = type.indexOf(value);
    (x < 0) ? arr.push(value) : arr = arr.filter(item => item !== value);
    setType([...arr]);
    (arr.length) ? setAllCompanies(false):setAllCompanies(true);
    setCurrentPage(10);
  }

  function otherCopmanies(i) {
    let num = i * 10;
    setCurrentPage(num);
  }
  const employer = allCompanies ? [...data] : drawCompanies(data);
  return (
    <Container maxWidth='lg' className={classes.root}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12} md={4} lg={3} zeroMinWidth>
          <CompanyFilterBar filterCompany={filterCompany} type={type} />
        </Grid>
        <Grid item xs={12} sm={12} md={8} lg={9} zeroMinWidth >
          {employer.length ? <CompaniesBar employer={employer} currPage={currPage} otherCopmanies={otherCopmanies} length={length} /> : <h6>{noData}</h6>}
        </Grid>
      </Grid>
    </Container>
  );
}
export default connect(mStP)(Companies);