import React, {useState, useEffect} from 'react';
import { DialogContent, DialogContentText, DialogActions, Dialog, Button, TextField, Grid } from '@material-ui/core';
import { withStyles } from "@material-ui/core/styles";
import CitySelect from '../../selects/city-select';
import CountrySelect from '../../selects/country-select';
import GenderSelect from '../../selects/gender-select';
import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-number-input';
import CreateIcon from '@material-ui/icons/Create';
import { firestore } from '../../../firebase/db';
import { connect } from 'react-redux';

const style = {
  aboutUserModalBtn: {
    padding: '5px !important',
    minWidth: 0,
  },
  userPhoneNumber: {
    maxWidth: 200,
    marginTop: 36,
  },
};

const AboutUserModal = (props) => {
  const { classes, user, dispatch, id } = props;
  const [open, setOpen] = useState(false);
  const [userName, setUserName] = useState(null);
  const [userSurname, setUserSurname] = useState(null);
  const [userPhoneNumber, setUserPhoneNumber] = useState(null);
  const [userAdress, setUserAdress] = useState(null);
  const [userCity, setUserCity] = useState(null);
  const [userCountry, setUserCountry] = useState(null);
  const [userGender, setUserGender] = useState(null);
  const [userBirthDate, setUserBirthDate] = useState(null);

  useEffect(() => {
    setUserName(user.userName);
    setUserSurname(user.userSurname);
    setUserPhoneNumber(user.userPhoneNumber);
    setUserAdress(user.userAdress);
    setUserBirthDate(user.userBirthDate);
  }, [user.userName, user.userSurname, user.userPhoneNumber, user.userAdress, user.userBirthDate]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleSave = () => {
    dispatch({type: "SIGN-IN", payload: {
      ...user,
      userName: userName,
      userSurname: userSurname,
      userPhoneNumber: userPhoneNumber,
      userAdress: userAdress,
      userCity: userCity,
      userCountry: userCountry,
      userGender: userGender,
      userBirthDate: userBirthDate,
    }});
    if (userName !== null) {
      firestore.collection("users").doc(id)
      .update({
        userName: userName
      }).catch(function(error) {
        console.error("Error updating document: ", error);
      });
    };

    if (userSurname !== null) {
      firestore.collection("users").doc(id)
      .update({
        userSurname: userSurname
      }).catch(function(error) {
        console.error("Error updating document: ", error);
      });
    };

    if (userPhoneNumber !== null) {
      firestore.collection("users").doc(id)
      .update({
        userPhoneNumber: userPhoneNumber
      }).catch(function(error) {
        console.error("Error updating document: ", error);
      });
    };

    if (userAdress !== null) {
      firestore.collection("users").doc(id)
      .update({
        userAdress: userAdress
      }).catch(function(error) {
        console.error("Error updating document: ", error);
      });
    };

    if (userCity !== null) {
      firestore.collection("users").doc(id)
      .update({
        userCity: userCity
      }).catch(function(error) {
        console.error("Error updating document: ", error);
      });
    };

    if (userCountry !== null) {
      firestore.collection("users").doc(id)
      .update({
        userCountry: userCountry
      }).catch(function(error) {
        console.error("Error updating document: ", error);
      });
    };

    if (userGender !== null) {
      firestore.collection("users").doc(id)
      .update({
        userGender: userGender
      }).catch(function(error) {
        console.error("Error updating document: ", error);
      });
    };

    if (userBirthDate !== null) {
      firestore.collection("users").doc(id)
      .update({
        userBirthDate: userBirthDate
      }).catch(function(error) {
        console.error("Error updating document: ", error);
      });
    };
    setOpen(false);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Button className={classes.aboutUserModalBtn} variant="outlined" color="primary" onClick={handleClickOpen}>
        <CreateIcon/>
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogContent>
          <DialogContentText>
            Personal information
          </DialogContentText>
          <Grid container spacing={2}>
            <Grid item>
              <TextField margin="normal"
                className={classes.userUserName}
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                label="Name" />
            </Grid>
            <Grid item>
              <TextField margin="normal"
                className={classes.userUserSurname}
                value={userSurname}
                onChange={(e) => setUserSurname(e.target.value)}
                label="Surname" />
            </Grid>
            <Grid item>
              <TextField margin="normal"
                disabled
                className={classes.userEmail}
                value={user.email}
                label="E-mail" />
            </Grid>
          </Grid>
          <Grid container spacing={2}>
            <Grid item>
              <PhoneInput
                country="Armenia"
                placeholder="Enter phone number"
                value={userPhoneNumber}
                className={classes.userPhoneNumber}
                onChange={setUserPhoneNumber}/>
            </Grid>
            <Grid item>
              <TextField margin="normal"
                className={classes.userAdress}
                value={userAdress}
                onChange={(e) => setUserAdress(e.target.value)}
                label="Adress" />
            </Grid>
            <Grid item>
              <CitySelect user={user}
                setUserCity={setUserCity}/>
            </Grid>
            <Grid item>
              <CountrySelect user={user}
                setUserCountry={setUserCountry}/>
            </Grid>
          </Grid>
          <Grid container spacing={2}>
            <Grid item>
              <TextField margin="normal"
                className={classes.userBirthDate}
                value={userBirthDate}
                onChange={(e) => setUserBirthDate(e.target.value)}
                label="Birthday" />
            </Grid>
            <Grid item>
              <GenderSelect user={user}
                setUserGender={setUserGender}/>
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleSave} color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default connect()(withStyles(style)(AboutUserModal));