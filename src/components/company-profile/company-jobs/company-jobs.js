import React from 'react';
import { Grid, Button } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import { withStyles } from "@material-ui/core/styles";
import { connect } from 'react-redux';
import { firestore } from '../../firebase/db';
import CompanyJobsCangeModal from '../company-jobs-cange-modal';

const style = {
  jobBtn: {
    padding: '5px !important',
    minWidth: 0,
  },
};

const CompanyJobs = (props) => {
  const { company, classes, showItems, dispatch } = props;

  const deleteItem = (id) => {
    const index = company.companyJobs.findIndex((el) => el.id === id);
    const newArray = [
      ...company.companyJobs.slice(0, index),
      ...company.companyJobs.slice(index + 1)
    ];
    firestore.collection("companies").doc(props.id)
    .update({
      companyJobs: newArray
    }).catch(function(error) {
      console.error("Error updating document: ", error);
    });
    dispatch({type: "SIGN-IN", payload: {...company, companyJobs: newArray}});
  };

  let job;

  if (company.companyJobs){
    job = company.companyJobs.map((item) => {
      return (
        <Grid container
          key={item.id}>
          <Grid item xs={12} sm={3}>
            <h6>{item.jobName}</h6>
          </Grid>
          <Grid item xs={12} sm={3}>
            <h6>{item.term}</h6>
          </Grid>
          <Grid item xs={12} sm={3}>
            <h6>{item.jobType}</h6>
          </Grid>
          <Grid item xs={12} sm={2}>
            <h6>{item.location}</h6>
          </Grid>
          <Grid container item xs={1} sm={1} justify="center">
            <Grid>
              {showItems && <CompanyJobsCangeModal company={company} showItems={showItems} item={item}/>}
            </Grid>
            <Grid>
              {showItems && <Button className={classes.jobBtn} color='primary' onClick={() => deleteItem(item.id)}>
                <DeleteIcon color='error'/>
              </Button>}
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <p>{item.jobDetails}</p>
          </Grid>
        </Grid>
      );
    });
  };

  return (
    <>
      {job}
    </>
  );
};

export default connect()(withStyles(style)(CompanyJobs));