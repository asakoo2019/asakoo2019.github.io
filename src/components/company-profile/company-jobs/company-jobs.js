import React from 'react';
import { Grid, Button } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import { withStyles } from "@material-ui/core/styles";

const style = {
  jobBtn: {
    padding: '5px !important',
    minWidth: 0,
  },
};

const CompanyJobs = (props) => {
  const {company, classes} = props;

  const deleteItem = (id) => {
    const index = company.companyJobs.findIndex((el) => el.id === id);
    const newArray = [
      ...company.companyJobs.slice(0, index),
      ...company.companyJobs.slice(index + 1)
    ];
    props.setCompanyJobs(newArray);
  };

  let job;

  if (company.companyJobs){
    job = company.companyJobs.map((item) => {
      return (
        <Grid container
          key={item.id}>
          <Grid item xs={3}>
            <h6>{item.jobName}</h6>
          </Grid>
          <Grid item xs={3}>
            <h6>{item.term}</h6>
          </Grid>
          <Grid item xs={3}>
            <h6>{item.jobType}</h6>
          </Grid>
          <Grid item xs={2}>
            <h6>{item.location}</h6>
          </Grid>
          <Grid item xs={1}>
            {props.setCompanyJobs && <Button className={classes.jobBtn} color='primary' onClick={() => deleteItem(item.id)}>
              <DeleteIcon color='error'/>
            </Button>}
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

export default withStyles(style)(CompanyJobs);