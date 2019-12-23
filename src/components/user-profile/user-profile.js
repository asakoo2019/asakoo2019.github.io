import React, {useState, useEffect} from 'react';
import './user-profile.css';
import { firestore, auth } from '../firebase/db';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import { Grid, Container } from '@material-ui/core';
import UserImageBlock from './user-image-block';
import UserSummaryModal from './modals/user-summary-modal';
import AboutUserModal from './modals/about-user-modal';

const styles = {
  userAllBlocks: {
    borderBottom: '1px solid #FE654F',
    marginBottom: 20,
    paddingBottom: 20,
  },
  aboutUserBlock: {
    marginTop: 20,
  },
  userName: {
    marginRight: 15,
  },
  userSummaryBlock: {

  },
};

const UserProfile = (props) => {
  const [user, setUser] = useState({});
  const [id, setId] = useState(' ');
  const [downloadURL, setUserImage] = useState(null);
  const [userName, setUserName] = useState(null);
  const [userSurname, setUserSurname] = useState(null);
  const [userPhoneNumber, setUserPhoneNumber] = useState(null);
  const [aboutUser, setAboutUser] = useState(null);
  const { classes } = props;

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

    if (userName !== null) {
      firestore.collection("users").doc(id)
        .update({
          userName: userName
        }).then(function() {
          console.log("Document successfully updated!");
        }).catch(function(error) {
          console.error("Error updating document: ", error);
        });
    };

    if (userSurname !== null) {
      firestore.collection("users").doc(id)
        .update({
          userSurname: userSurname
        }).then(function() {
          console.log("Document successfully updated!");
        }).catch(function(error) {
          console.error("Error updating document: ", error);
        });
    };

    if (userPhoneNumber !== null) {
      firestore.collection("users").doc(id)
      .update({
        userPhoneNumber: userPhoneNumber
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
  }, [id, downloadURL, userName, userSurname, aboutUser, userPhoneNumber]);

  return (
    <Container className='userBlock'>
      <Grid container
        className={classNames(classes.aboutUserBlock, classes.userAllBlocks)}
        justify='space-around'>
        <Grid container
          item xs={2}>
          <UserImageBlock setUserImage={setUserImage} user={user}/>
        </Grid>
        <Grid container
          item xs={8}
          direction='column'>
          <Grid container>
            <h6 className={classes.userName}>{user.userName}</h6>
            <h6>{user.userSurname}</h6>
          </Grid>
          <Grid>
            <h6>{user.userPhoneNumber}</h6>
          </Grid>
        </Grid>
        <Grid container
          item xs={1}>
          <AboutUserModal
            user={user}
            setUserName={setUserName}
            setUserSurname={setUserSurname}
            setUserPhoneNumber={setUserPhoneNumber}/>
        </Grid>
      </Grid>
      {/* About User Block*/}
      <Grid container
        className={classNames(classes.userSummaryBlock, classes.userAllBlocks)}
        alignItems='center'
        justify='space-around'>
        <Grid container item xs={10}>
          <h6>{user.aboutUser}</h6>
        </Grid>
        <Grid container item xs={1}>
          <UserSummaryModal
            user={user}
            id={id}
            setAboutUser={setAboutUser}/>
        </Grid>
      </Grid>
    </Container>
  );
};

export default withStyles(styles)(UserProfile);