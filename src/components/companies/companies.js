import React, { useState, useEffect } from 'react';
import CompanyFilterBar from './filter-bar/filter-bar';
import CompaniesBar from './companies-bar/companies-bar';
import { Grid, Container } from '@material-ui/core';
import { firestore } from '../firebase/db';
//import dataArray from './companyArray';

const getData = () => {
  return firestore.collection("companies").get().then((querySnapshot) => {
    let companies = [];
    querySnapshot.forEach((doc) => {
      if (Object.keys(doc.data()).length !== 0) {
        companies.push(doc.data());
      };
    });
    return companies;
  });
}

export default function Companies(props) {
  const [currPage, setCurrentPage] = useState(10);
  const [allCompanies, setAllCompanies] = useState(true);
  const [type, setType] = useState([]);
  const [data, setData] = useState([]);
 
  useEffect(() => {
    getData().then(smth => setData(smth.sort((a, b) => b.companyViewCount - a.companyViewCount)));
    //setData(createData());
  }, []);
  function filterCompany(value) {
    let arr = [...type];
    const x = type.indexOf(value);
    if (x < 0) {
      arr.push(value);
    } else {
      arr = arr.filter(item => item !== value)
    }

    setType([...arr]);

    if (arr.length) {
      setAllCompanies(false);
    } else {
      setAllCompanies(true);
    }
    setCurrentPage(10);
  }

  function otherCopmanies(e, i) {
    let num = i * 10;
    setCurrentPage(num);
  }

  function drawCompanies(data) {
    const result = [];
    const len = data.length;
    for (let i = 0; i < len; i++) {
      for (let j = 0; j < type.length; j++) {
        if (type[j] === data[i].companyCategory) {
          result.push(data[i])
        }

      }
    }
    return result
  }
  const employer = allCompanies ? [...data] : drawCompanies(data);
  return (
    <Container maxWidth='lg'>
      <Grid container>
        <Grid item xs = {3}>
          <CompanyFilterBar filterCompany={filterCompany} />
        </Grid>
        <Grid item xs = {9}>
          <CompaniesBar employer={employer} currPage={currPage} otherCopmanies={otherCopmanies} />
        </Grid>
      </Grid>
    </Container>

  );
}