import React, {useState, useEffect} from 'react';
import { firestore } from '../firebase/db';
import DropzoneDialogBlock from '../image-uploader-block';
import { Grid } from '@material-ui/core';
import './user-profile.css';
import FormDialog from '../modal';

const UserProfile = () => {
  const [user, setUser] = useState({});
  const [downloadURL, setDownloadURL] = useState(undefined);
  useEffect(() => {
    const docRef = firestore.collection("users").doc("rs0x1RuWYJhOjjQXnBkUDLHbFnR2");
    let a = docRef.get().then(function(doc) {
      if (doc.exists) {
        setUser(doc.data());
      } else {
        console.log("No such document!");
      }
    }).catch(function(error) {
      console.log("Error getting document:", error);
    });
  }, []);
  return (
    <Grid container
      className='userBlock'>
      <img src={downloadURL} alt={user.userName}/>
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
      </Grid>
      <DropzoneDialogBlock setDownloadURL = {setDownloadURL}/>
    </Grid>
  );
};

export default UserProfile;