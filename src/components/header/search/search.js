import React, { useState, useEffect } from 'react';
import { TextField, Grid, Button } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import { firestore } from '../../firebase/db';

const Search = () => {
  const [term, setTerm] = useState('');
  const [companySearch, setCompanySearch] = useState('');
  const [jobSearch, setJobSearch] = useState('');
  let searchArray = [];
  searchArray = searchArray.concat(companySearch, jobSearch);
  const [renderArray, setRenderArray] = useState([]);

  const searching = () => {
    if (term) {
      let newArray = [];
      searchArray.forEach(item => {
        for(let value of Object.values(item)) {
          if (typeof value === 'string'){
            if (value.toLowerCase() === term.toLowerCase()) {
              newArray.push(item);
              setRenderArray(newArray);
            };
          };
        };
      });
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
      setCompanySearch(companies);
      });
      companies.forEach(item => {
        jobs = jobs.concat(item.companyJobs);
      });
      setJobSearch(jobs);
    });
  }, []);

  return (
    <Grid container>
      <Grid container
        spacing={1}
        alignItems="flex-end">
        <Grid item>
          <TextField label="Search"
          onChange={(e) => setTerm(e.target.value)} />
        </Grid>
        <Grid item>
          <Button onClick={searching}>
            <SearchIcon />
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Search;