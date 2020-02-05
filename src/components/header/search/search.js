import React, { useState, useEffect } from 'react';
import { TextField, Grid, Button, Radio, RadioGroup, FormControlLabel } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import { firestore } from '../../firebase/db';
import { useHistory } from "react-router-dom";
import { connect } from 'react-redux';

const mStP = (state) => ({
  searchData: state,
});

const Search = (props) => {
  const [term, setTerm] = useState('');
  const [companySearch, setCompanySearch] = useState('');
  const [jobSearch, setJobSearch] = useState('');
  const [searchUrl, setSearchUrl] = useState('jobs');
  const history = useHistory();
  const { dispatch } = props;

  const searchingJobs = () => {
    if (term) {
      let newArray = [];
      jobSearch.forEach(item => {
        for(let value of Object.values(item)) {
          if (typeof value === 'string'){
            if (value.toLowerCase() === term.toLowerCase()) {
              newArray.push(item);
            };
          };
        };
      });
      newArray.length ? dispatch({type: "SEARCH", payload: newArray}) : dispatch({type: "EMPTY-SEARCH"});
      history.push(`/${searchUrl}`);
    };
  };

  const searchingCompanies = () => {
    let newArray = [];
    if (term) {
      companySearch.forEach(item => {
        for(let value of Object.values(item)) {
          if (typeof value === 'string'){
            if (value.toLowerCase() === term.toLowerCase()) {
              newArray.push(item);
            };
          };
        };
      });
      newArray.length ? dispatch({type: "SEARCH", payload: newArray}) : dispatch({type: "EMPTY-SEARCH"});
      history.push(`/${searchUrl}`);
    };
  };

  useEffect(() => {
    firestore.collection("companies").get().then((querySnapshot) => {
      let companies = [];
      let jobs = [];
      querySnapshot.forEach((doc) => {
        if (Object.keys(doc.data()).length !== 0) {
          companies.push(doc.data());
        };
      });
      setCompanySearch(companies);
      companies.forEach(item => {
        jobs = jobs.concat(item.companyJobs);
      });
      setJobSearch(jobs);
    });
  }, []);

  return (
    <>
      <Grid container
        spacing={1}
        alignItems="flex-end">
        <Grid item>
          <TextField label="Search"
          onChange={(e) => setTerm(e.target.value)} />
        </Grid>
        <Grid item>
          <Button onClick={searchUrl === 'jobs' ? searchingJobs : searchingCompanies}>
            <SearchIcon />
          </Button>
        </Grid>
      </Grid>
      <Grid container>
        <RadioGroup defaultValue="jobs"
          onChange={(e) => setSearchUrl(e.target.value)}>
          <Grid container spacing={6}>
            <Grid item xs={6}>
              <FormControlLabel value="jobs" control={<Radio color="primary" />} label="Jobs" />
            </Grid>
            <Grid item xs={6}>
              <FormControlLabel value="companies" control={<Radio color="primary" />} label="Companies" />
            </Grid>
          </Grid>
        </RadioGroup>
    </Grid>
    </>
  );
};

export default connect(mStP)(Search);