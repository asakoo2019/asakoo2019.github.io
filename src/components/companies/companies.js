import React, { useState, useEffect } from 'react';
import CompanyFilterBar from './hidden-filter-bar';
import CompaniesBar from './companies-bar/companies-bar';
import { Grid, Container } from '@material-ui/core';
import { firestore } from '../firebase/db';
import { connect } from 'react-redux';
import CircularProgress from '@material-ui/core/CircularProgress';
import { withStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    marginTop: theme.spacing(1),
  },
}));

const mStP = (state) => ({
  state,
});

function Companies({state, classes}) {
  const [currPage, setCurrentPage] = useState(10);
  const [allCompanies, setAllCompanies] = useState(true);
  const [type, setType] = useState([]);
  const [data, setData] = useState([]);
  const [noData, setNoData] =useState('');
	const [show, setShow] = useState(false);

  useEffect(() => {
    if (typeof state.search === 'string'){  
      setNoData(state.search)
    }  else if (state.search.length) {
      setData([...state.search]);
      setNoData('');
    } else {
      firestore.collection("companies").get().then((querySnapshot) => {
        let companies = [];
        querySnapshot.forEach((doc) => {
          if (Object.keys(doc.data()).length !== 0) {
            companies.push(doc.data());
          };
        });
        companies.sort((a, b) => b.companyViewCount - a.companyViewCount);
        setData(companies);
        setShow(true);
        setNoData('')
      });
    };
  }, [state]);

  function filterCompany(value) {
    let arr = [...type];
    const x = type.indexOf(value);
    (x < 0) ? arr.push(value) : arr = arr.filter(item => item !== value);
    setType([...arr]);
    (arr.length) ? setAllCompanies(false) : setAllCompanies(true);
    setCurrentPage(10);
  };

  function otherCopmanies(i) {
    let num = i * 10;
    setCurrentPage(num);
  };

  function drawCompanies(data) {
    const result = [];
    const len = data.length;
    for (let i = 0; i < len; i++) {
      for (let j = 0; j < type.length; j++) {
        if (type[j] === data[i].companyCategory) {
          result.push(data[i])
        };
      };
    };
    return result
  };

  const employer = allCompanies ? [...data] : drawCompanies(data);

  return (
    <Container maxWidth='lg' className={classes.root}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12} md={4} lg = {3}zeroMinWidth>
          <CompanyFilterBar filterCompany={filterCompany} type ={type}/>
        </Grid>
        <Grid item xs={12} sm={12} md={8} lg = {9} zeroMinWidth >
          <CompaniesBar employer={employer} currPage={currPage} otherCopmanies={otherCopmanies} noData ={noData}/>
        </Grid>
      </Grid> :
			<Grid container justify='center'>
        <CircularProgress size={150} className={classes.companiesLoader}/>
      </Grid>}
    </Container>
  );
};

export default connect(mStP)(withStyles(styles)(Companies));