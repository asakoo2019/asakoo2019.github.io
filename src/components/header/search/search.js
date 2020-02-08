import React, { useState, useEffect } from 'react';
import { TextField, Grid, Button, Radio, RadioGroup, FormControlLabel } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import { firestore } from '../../firebase/db';
import { useHistory } from "react-router-dom";
import { connect } from 'react-redux';

const mStP = (state) => ({
  searchData: state,
})

const Search = (props) => {
  const [searchValue, setsearchValue] = useState('');
  const [searchUrl, setSearchUrl] = useState('jobs');
  const [data, setData] = useState([]);
  const history = useHistory();
  const { dispatch } = props;

  useEffect(() => {
    firestore.collection("companies").get().then((querySnapshot) => {
      let arr = [];
      querySnapshot.forEach((doc) => {
        if (doc.data().hasOwnProperty('id')) {
          arr.push(doc.data());
        }
      })
      setData(arr)
    }) 
    dispatch({type: "SEARCH", payload: []})
  },[dispatch])

  function checkCoincidences(string) {
    let userWords = searchValue.toLowerCase();
    let backendWords = string.toLowerCase();
    let userArray = [];
    let backendArray = [];
    let count = 0;
    let str = '';
    for (let i = 0; i < userWords.length; i++) {
      if (userWords[i].match(/[a-z]/i)) {
        str += userWords[i]
      } else {
        if (str.match(/[a-z]/i)) {
          userArray.push(str);
          str = '';
        }
      }
      if (i === userWords.length - 1) {
        userArray.push(str);
      }
    }   
    str = ''
    for (let i = 0; i < backendWords.length; i++) {
      if (backendWords[i].match(/[a-z]/i)) {
        str += backendWords[i]
      } else {
        if (str.match(/[a-z]/i)) {
          backendArray.push(str);
          str = '';
        }
      }
      if (i === backendWords.length - 1) {
        backendArray.push(str);
      }
    }
    // starts checking
    for (let i = 0; i < userArray.length; i++) {
      for (let j = 0; j < backendArray.length; j++) {
        if (userArray[i] === backendArray[j]) {
          count += 1
        }
      }
    }
    return count
  }

  function searching(url, data) {
    if (searchValue) { 
        const arr = [...data];
        let result = [];
        let companies = [];
        let jobs = [];
        let counts = [];
        arr.forEach(currentCompany => {
          let companyCoincidence = 0;
          for (let key in currentCompany) {
            if ((key === 'companyCategory' || key === 'companyCity' || key === 'companyName' || key === 'companyJobs')) {
              
              if (url === 'companies' && typeof currentCompany[key] === 'string' && currentCompany[key]) {
                const coincidence = checkCoincidences(currentCompany[key]);   
                    
                if (coincidence) {
                  companyCoincidence += coincidence;
                }
              } else if (url === 'jobs' && key === 'companyJobs' && currentCompany[key].length) {
                currentCompany[key].forEach(item => {
                  let jobCoincidence = 0;
                  for (let value in item) {
                    if ((value === 'jobName' || value === 'companyName' || value === 'companyCity') && item[value]) {
                      const coincidence = checkCoincidences(item[value]);
                      if (coincidence) {
                        jobCoincidence += coincidence;
                      }
                    }
                  }
                  if (jobCoincidence > 0) {
                    result.push(item);
                    counts.push(jobCoincidence);
                  }
                })
              }
            }
          }
          if (companyCoincidence > 0) {
            result.push(currentCompany);
            counts.push(companyCoincidence);
          }
        })
        const max = Math.max(...counts);
        if (max > 1){
          let len  = counts.length;
          for (let i = 0; i < len; i++){
            if (max >= counts[i] && counts[i] > 1){
              url === 'jobs' ? jobs.push(result[i]) : companies.push(result[i]);
            }
          }
        } else {
          url === 'jobs' ? jobs = result : companies = result;
        }
        if (url === 'jobs'){
           jobs.length ? dispatch({type: "SEARCH", payload: jobs}) : dispatch({type: "EMPTY-SEARCH"});
        } else {
          companies.length ? dispatch({type: "SEARCH", payload: companies}) : dispatch({type: "EMPTY-SEARCH"});
        }
      history.push(`/${url}`);
    }   
  }

  return (
    <>
      <Grid container
        spacing={1}
        alignItems="flex-end">
        <Grid item>
          <TextField label="Search" type="search"
            onChange={(e) => setsearchValue(e.target.value)}
            onKeyPress={event => {
              if (event.key === 'Enter') {
                searching(searchUrl, data)
              }
            }}
          />
        </Grid>
        <Grid item>
          {/* <Button onClick={searchUrl === 'jobs' ? searchingJobs : searchingCompanies}> */}
          <Button onClick={() => searching(searchUrl, data)}>
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
}

export default connect(mStP)(Search);