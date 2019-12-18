import React from 'react';
<<<<<<< HEAD
// import { firestore } from '../firebase/db';
import DropzoneDialogBlock from '../image-uploader-block';
import userImage from './1.jpg'
=======
import { firestore } from '../firebase/db';
import DropzoneDialogBlock from '../image-uploader-block';
>>>>>>> home
import { Grid } from '@material-ui/core';
import './user-profile.css';
import FormDialog from '../modal';

<<<<<<< HEAD
// const user = firestore.collection('users').doc('IaRlvQrADIVN2lOxZytECU0fwGB3').get()
//              .then(doc => doc.data());
// console.log(user);

const user = { 
  userName: 'Hovo',
  userSurname: 'Mnatsakanyan',
  aboutUser: 'This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description.',
  userImage: userImage,
  id: 1
};

const UserProfile = () => {
=======


const UserProfile = () => {
  const user = firestore.collection('users').doc('IaRlvQrADIVN2lOxZytECU0fwGB3').get().then(doc => doc.data());
  user.then((obj) => {
    console.log(obj);
  });
>>>>>>> home
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
      <DropzoneDialogBlock/>
    </Grid>
  );
};

export default UserProfile;