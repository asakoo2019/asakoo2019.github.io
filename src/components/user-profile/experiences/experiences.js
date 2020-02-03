import React from 'react';
import { Grid, Button } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import { withStyles } from "@material-ui/core/styles";
import { firestore } from '../../firebase/db';
import { connect } from 'react-redux';
import UserExperienceCangeModal from '../modals/user-experience-cange-modal';

const style = {
  experienceBtn: {
    padding: '5px !important',
    minWidth: 0,
  },
};

const Experiences = (props) => {
  const { user, classes, showItems, dispatch } = props;

  const deleteItem = (id) => {
    const index = user.userWorkExperience.findIndex((el) => el.id === id);
    const newArray = [
      ...user.userWorkExperience.slice(0, index),
      ...user.userWorkExperience.slice(index + 1)
    ];
    firestore.collection("users").doc(props.id)
    .update({
      userWorkExperience: newArray
    }).catch(function(error) {
      console.error("Error updating document: ", error);
    });
    dispatch({type: "SIGN-IN", payload: {...user, userWorkExperience: newArray}});
  };

  let experience;

  if (user.userWorkExperience){
    experience = user.userWorkExperience.map((item) => {
      return (
        <Grid container
          key={item.id}
          alignItems='center'>
          <Grid item xs={10} sm={4}>
            <h6>{item.companyName}</h6>
          </Grid>
          <Grid item xs={10} sm={4}>
            <p>{item.jobTitle}</p>
          </Grid>
          <Grid item xs={10} sm={3}>
            <p>{`${item.from} - ${item.to}`}</p>
          </Grid>
          <Grid container item xs={2} sm={1} justify="center">
            <Grid>
              {showItems && <UserExperienceCangeModal item={item} user={user} showItems={showItems}/>}
            </Grid>
            <Grid>
              {showItems && <Button className={classes.experienceBtn} color='primary' onClick={()=>{deleteItem(item.id)}}>
              <DeleteIcon color='error'/>
            </Button>}
            </Grid>
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

export default connect()(withStyles(style)(Experiences));