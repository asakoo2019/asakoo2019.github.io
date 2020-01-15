import React, {useState, useEffect} from 'react';
import './user-profile.css';
import { firestore, auth } from '../firebase/db';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import { Grid, Container } from '@material-ui/core';
import UserImageBlock from './user-image-block';
import UserSummaryModal from './modals/user-summary-modal';
import UserLanguagesModal from './modals/user-languages-modal';
import AboutUserModal from './modals/about-user-modal';
import PhoneIcon from '@material-ui/icons/Phone';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import MailIcon from '@material-ui/icons/Mail';
import WcIcon from '@material-ui/icons/Wc';
import DateRangeIcon from '@material-ui/icons/DateRange';
import { connect } from 'react-redux';
import { useHistory } from "react-router-dom";
import Languages from './languages';
import UserExperienceModal from './modals/user-experience-modal';
import Experiences from './experiences/experiences';

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
  userLine: {
    padding: 8,
    margin: 0,
  },
  aboutUserIcons: {
    color: '#FE654F',
  },
};

const mStP = (state) => ({
  user: state,
});

const UserProfile = (props) => {
  const [user, setUser] = useState({});
  const [id, setId] = useState(' ');
  const [downloadURL, setUserImage] = useState(null);
  const [userName, setUserName] = useState(null);
  const [userSurname, setUserSurname] = useState(null);
  const [userPhoneNumber, setUserPhoneNumber] = useState(null);
  const [userAdress, setUserAdress] = useState(null);
  const [aboutUser, setAboutUser] = useState(null);
  const [userCity, setUserCity] = useState(null);
  const [userCountry, setUserCountry] = useState(null);
  const [userBirthDate, setUserBirthDate] = useState(null);
  const [userGender, setUserGender] = useState(null);
  const [userLanguages, setUserLanguages] = useState(null);
  const [userWorkExperience, setUserWorkExperience] = useState(null);
  const { classes, dispatch } = props;
  const history = useHistory();

  useEffect(() => {
    let unmounted = false;
    if (id !== ' ') {
      const docRef = firestore.collection("users").doc(id);
      docRef.get().then(function(doc) {
        if (doc.exists) {
          if(!unmounted) {
            setUser(doc.data());
          };
        } else {
          console.log("No such document!");
        }})
      .catch(function(error) {
        console.log("Error getting document:", error);
      });
    };
    return () => {
      unmounted = true;
    };
  }, [id]);

  useEffect(() => {
    let unmounted = false;
    auth.onAuthStateChanged((logedInUser) => {
      if (logedInUser) {
        dispatch({type: "SIGN-IN", payload: user});
        setId(logedInUser.uid);
      } else {
        const pathName = history.location.pathname;
        const LastSleshIndex = pathName.lastIndexOf('/');
        const searchId = pathName.slice(LastSleshIndex + 1);
        if(!unmounted){
          setId(searchId);
        };
      };
    });
    console.log(1);
    return () => {
      unmounted = true;
    };
  }, [dispatch, history.location.pathname, user]);

  useEffect(() => {
    if (downloadURL !== null) {
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

    if (userAdress !== null) {
      firestore.collection("users").doc(id)
        .update({
          userAdress: userAdress
        }).then(function() {
          console.log("Document successfully updated!");
        }).catch(function(error) {
          console.error("Error updating document: ", error);
        });
    };

    if (userCity !== null) {
      firestore.collection("users").doc(id)
        .update({
          userCity: userCity
        }).then(function() {
          console.log("Document successfully updated!");
        }).catch(function(error) {
          console.error("Error updating document: ", error);
        });
    };

    if (userCountry !== null) {
      firestore.collection("users").doc(id)
        .update({
          userCountry: userCountry
        }).then(function() {
          console.log("Document successfully updated!");
        }).catch(function(error) {
          console.error("Error updating document: ", error);
        });
    };

    if (userGender !== null) {
      firestore.collection("users").doc(id)
        .update({
          userGender: userGender
        }).then(function() {
          console.log("Document successfully updated!");
        }).catch(function(error) {
          console.error("Error updating document: ", error);
        });
    };

    if (userBirthDate !== null) {
      firestore.collection("users").doc(id)
        .update({
          userBirthDate: userBirthDate
        }).then(function() {
          console.log("Document successfully updated!");
        }).catch(function(error) {
          console.error("Error updating document: ", error);
        });
    };
  }, [id, downloadURL, userName, userSurname, userPhoneNumber, userAdress, userCity, userCountry, userGender, userBirthDate]);

  useEffect(() => {
    let unmounted = false;
    if (id !== ' ') {
      const docRef = firestore.collection("users").doc(id);
      docRef.get().then(function(doc) {
        if (doc.exists) {
          if(!unmounted) {
            setUser(doc.data());
          };
        } else {
          console.log("No such document!");
        }})
      .catch(function(error) {
        console.log("Error getting document:", error);
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
      return () => {
        unmounted = true;
      };
  }, [id, aboutUser]);

  useEffect(() => {
    let unmounted = false;
    if (id !== ' ') {
      const docRef = firestore.collection("users").doc(id);
      docRef.get().then(function(doc) {
        if (doc.exists) {
          if(!unmounted) {
            setUser(doc.data());
          };
        } else {
          console.log("No such document!");
        }})
      .catch(function(error) {
        console.log("Error getting document:", error);
      });
    };
    
    if (userLanguages !== null) {
      firestore.collection("users").doc(id)
        .update({
          userLanguages: userLanguages
        }).then(function() {
          console.log("Document successfully updated!");
        }).catch(function(error) {
          console.error("Error updating document: ", error);
        });
    };
    return () => {
      unmounted = true;
    };
  }, [id, userLanguages]);

  useEffect(() => {
    let unmounted = false;
    if (id !== ' ') {
      const docRef = firestore.collection("users").doc(id);
      docRef.get().then(function(doc) {
        if (doc.exists) {
          if(!unmounted) {
            setUser(doc.data());
          };
        } else {
          console.log("No such document!");
        }})
      .catch(function(error) {
        console.log("Error getting document:", error);
      });
    };
    
    if (userWorkExperience !== null) {
      firestore.collection("users").doc(id)
        .update({
          userWorkExperience: userWorkExperience
        }).then(function() {
          console.log("Document successfully updated!");
        }).catch(function(error) {
          console.error("Error updating document: ", error);
        });
    };
    return () => {
      unmounted = true;
    };
  }, [id, userWorkExperience]);

  return (
    <Container className='userBlock'>

      {/* About User Block */}
      <Grid container
        className={classNames(classes.aboutUserBlock, classes.userAllBlocks)}
        justify='space-between'
        alignItems='center'>
        <Grid container
          item xs={12} sm={4} md={2}>
          {props.user ? <UserImageBlock setUserImage={setUserImage} user={user}/> : <UserImageBlock user={user}/>}
        </Grid>
        <Grid container
          item xs={12} sm={8} md={10}
          direction='column'>
          <Grid container
            justify='space-around'
            alignItems='center'>
            <Grid container item xs={11}>
              <h5 className={classes.userName}>{user.userName}</h5>
              <h5>{user.userSurname}</h5>
            </Grid>
            {props.user && <AboutUserModal
              user={user}
              setUserName={setUserName}
              setUserSurname={setUserSurname}
              setUserCity={setUserCity}
              setUserCountry={setUserCountry}
              setUserPhoneNumber={setUserPhoneNumber}
              setUserAdress={setUserAdress}
              setUserBirthDate={setUserBirthDate}
              setUserGender={setUserGender}/>}
          </Grid>
          <Grid container
            justify='space-around'>
            <Grid container
              item lg={3} md={6} sm={12}
              alignItems='center'>
              <PhoneIcon className={classes.aboutUserIcons}/>
              <p className={classes.userLine}>{user.userPhoneNumber}</p>
            </Grid>
            <Grid container
              item lg={4} md={6} sm={12}
              alignItems='center'>
              <MailIcon className={classes.aboutUserIcons}/>
              <p className={classes.userLine}>{user.email}</p>
            </Grid>
            <Grid container
              item lg={5} sm={12}
              alignItems='center'>
            <LocationOnIcon className={classes.aboutUserIcons}/>
              <p className={classes.userLine}>
                {`${user.userAdress} ${user.userCity} ${user.userCountry}`}
              </p>
            </Grid>
          </Grid>
          <Grid container
            alignItems='center'>
            <DateRangeIcon className={classes.aboutUserIcons}/>
            <p className={classes.userLine}>
              {user.userBirthDate}
            </p>
            <WcIcon className={classes.aboutUserIcons}/>
            <p className={classes.userLine}>
              {user.userGender}
            </p>
          </Grid>
        </Grid>
      </Grid>
      
      {/* User Summary Block */}
      <Grid container
        className={classNames(classes.userSummaryBlock, classes.userAllBlocks)}
        alignItems='center'
        justify='space-between'>
        <Grid item xs={10}>
          <h5>Summary</h5>
          <p>
            {user.aboutUser ? user.aboutUser : 'Add a short professional introduction by highlighting your most valuable skills and experiences in a few sentences.'}
          </p>
        </Grid>
        <Grid container item xs={1}
          justify='flex-end'>
          {props.user && <UserSummaryModal
            user={user}
            id={id}
            setAboutUser={setAboutUser}/>}
        </Grid>
      </Grid>

      {/* User Languages Block */}
      <Grid container
        className={classNames(classes.userLanguagesBlock, classes.userAllBlocks)}
        alignItems='center'
        justify='space-between'>
        <Grid item xs={10}>
          <h5>Languages</h5>
          {user.userLanguages ? (user.userLanguages.length ? (props.user ? <Languages user={user} setUserLanguages={setUserLanguages}/> : <Languages user={user} />) : 'Add levels of language proficiency.') : null}
        </Grid>
        <Grid container item xs={1}
          justify='flex-end'>
          {props.user ? <UserLanguagesModal user={user} setUserLanguages={setUserLanguages} /> : <UserLanguagesModal user={user} />}
        </Grid>
      </Grid>

      {/* User Experience Block */}
      <Grid container
        className={classNames(classes.userWorkExperienceBlock, classes.userAllBlocks)}
        alignItems='center'
        justify='space-between'>
        <Grid item xs={10}>
          <h5>Work experience</h5>
          {user.userWorkExperience ? (user.userWorkExperience.length ? (props.user ? <Experiences user={user} setUserWorkExperience={setUserWorkExperience} id={id} /> : <Experiences user={user} />) : 'Add your work experience and any significant accomplishments.') : null}
        </Grid>
        <Grid container item xs={1}
          justify='flex-end'>
          {props.user && <UserExperienceModal user={user} setUserWorkExperience={setUserWorkExperience} />}
        </Grid>
      </Grid>
    </Container>
  );
};

export default connect(mStP)(withStyles(styles)(UserProfile));