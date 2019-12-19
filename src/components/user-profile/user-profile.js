import React from 'react';
import { firestore } from '../firebase/db';
import DropzoneDialogBlock from '../image-uploader-block';
import { Grid } from '@material-ui/core';
import './user-profile.css';
// import FormDialog from '../modal';

const docRef = firestore.collection("users").doc("rs0x1RuWYJhOjjQXnBkUDLHbFnR2");

docRef.get().then(function(doc) {
  if (doc.exists) {
    let user = doc.data();
    console.log(user.userName);
  } else {
    console.log("No such document!");
  }
}).catch(function(error) {
  console.log("Error getting document:", error);
});

const UserProfile = () => {
  return (
    <Grid container
      className='userBlock'>
      {/* <img src={user.userImage} alt={user.userName}/>
      <h6>{user.userName}</h6>
      <h6>{user.userSurname}</h6>
      <Grid container
        alignItems='center'>
        <Grid container item xs={8}>
          <h6>{user.aboutUser}</h6>
        </Grid>
        <Grid container item xs={3}>
          <FormDialog/>
        </Grid>
      </Grid> */}
      <DropzoneDialogBlock/>
    </Grid>
  );
};

export default UserProfile;