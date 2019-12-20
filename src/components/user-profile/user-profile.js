import React, {useState, useEffect} from 'react';
import { firestore, auth } from '../firebase/db';
import DropzoneDialogBlock from '../image-uploader-block';
import { Grid } from '@material-ui/core';
import './user-profile.css';
import FormDialog from '../modal';

const UserProfile = () => {
  const [user, setUser] = useState({});
  const [id, setId] = useState(' ');
  const [downloadURL, setUserImage] = useState(null);
  const [aboutUser, setAboutUser] = useState(null);
  
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setId(user.uid);
      } else {
        setId(' ');
      };
    });
    if (id !== ' ') {
      const docRef = firestore.collection("users").doc(id);
      docRef.get().then(function(doc) {
        if (doc.exists) {
          setUser(doc.data());
        } else {
          console.log("No such document!");
        }})
      .catch(function(error) {
        console.log("Error getting document:", error);
      });
    };
    if(downloadURL !== null) {
      firestore.collection("users").doc(id)
        .update({
          userImage: downloadURL
        }).then(function() {
          console.log("Document successfully updated!");
        }).catch(function(error) {
          console.error("Error updating document: ", error);
        });
    };
    if (aboutUser !== null) {
      firestore.collection("users").doc(id)
        .update({
          aboutUser: aboutUser
        }).then(function() {
          console.log("Document successfully updated!");
        }).catch(function(error) {
          console.error("Error updating document: ", error);
        });
    };
  }, [id, downloadURL, aboutUser]);

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
          <FormDialog setAboutUser={setAboutUser}/>
        </Grid>
      </Grid>
      <DropzoneDialogBlock setUserImage = {setUserImage}/>
    </Grid>
  );
};

export default UserProfile;