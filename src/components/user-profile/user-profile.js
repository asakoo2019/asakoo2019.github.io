import React, {useState, useEffect} from 'react';
import { firestore, auth } from '../firebase/db';
import DropzoneDialogBlock from '../image-uploader-block';
import { Grid } from '@material-ui/core';
import './user-profile.css';
import FormDialog from '../modal';

const UserProfile = () => {
  const [user, setUser] = useState({});
  const [id, setId] = useState(' ');
  const [downloadURL, setDownloadURL] = useState(null);
  console.log(id)
  auth.onAuthStateChanged((user) => {
    if (user) {
      setId(user.uid);
    } else {
      // User not logged in or has just logged out.
    }
  });
  useEffect(() => {
    const docRef = firestore.collection("users").doc(id);
    docRef.get().then(function(doc) {
      if (doc.exists) {
        setUser(doc.data());
      } else {
        console.log("No such document!");
      }
    }).catch(function(error) {
      console.log("Error getting document:", error);
    });
  }, [id]);
  return (
    <Grid container
      className='userBlock'>
      <img src={user.userImage} alt={user.userName}/>
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