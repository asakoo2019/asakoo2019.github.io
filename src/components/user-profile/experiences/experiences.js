import React from 'react';
import { Grid, Button } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import CreateIcon from '@material-ui/icons/Create';
import { withStyles } from "@material-ui/core/styles";

const style = {
  experienceBtn: {
    padding: '5px !important',
    minWidth: 0,
  },
};

const Experiences = (props) => {
  const {user, classes} = props;
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
          <Grid item xs={2}>
            {props.setUserWorkExperience && <Button className={classes.experienceBtn} color='primary' onClick={() => deleteItem(item.id)}>
              <DeleteIcon color='error'/>
            </Button>}
            {props.setUserWorkExperience && <Button className={classes.experienceBtn} color='primary' onClick={()=>{console.log(item.id)}}>
              <CreateIcon color='error'/>
            </Button>}
          </Grid>
          <Grid item xs={12}>
            <p>{item.experienceDetails}</p>
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

export default withStyles(style)(Experiences);