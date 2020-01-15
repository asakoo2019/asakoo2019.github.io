import React from 'react';
import { Grid, Button } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import CreateIcon from '@material-ui/icons/Create';

const Experiences = (props) => {
  const {user} = props;

  const deleteItem = (id) => {
    const index = user.userWorkExperience.findIndex((el) => el.id === id);
    const newArray = [
      ...user.userWorkExperience.slice(0, index),
      ...user.userWorkExperience.slice(index + 1)
    ];
    props.setUserWorkExperience(newArray);
  };

  let experience;

  if (user.userWorkExperience){
    experience = user.userWorkExperience.map((item) => {
      return (
        <Grid container
          key={item.id}>
          <Grid item xs={4}>
            <h6>{item.companyName}</h6>
          </Grid>
          <Grid item xs={3}>
            <p>{item.jobTitle}</p>
          </Grid>
          <Grid item xs={3}>
            <p>{`${item.from} - ${item.to}`}</p>
          </Grid>
          <Grid item xs={1}>
            {props.setUserWorkExperience && <Button variant="outlined" color='primary' onClick={() => deleteItem(item.id)}>
              <DeleteIcon color='error'/>
            </Button>}
          </Grid>
          <Grid item xs={1}>
            {props.setUserWorkExperience && <Button variant="outlined" color='primary' onClick={()=>{console.log(item.id)}}>
              <CreateIcon color='error'/>
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
      {experience}
    </>
  );
};

export default Experiences;