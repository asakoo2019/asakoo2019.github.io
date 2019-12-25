import React, {useState, useEffect} from 'react';
import { DialogContent, DialogContentText, DialogActions, Dialog, Button, TextField, Grid } from '@material-ui/core';
import { withStyles } from "@material-ui/core/styles";
import CitySelect from '../../selects/city-select';
import CountrySelect from '../../selects/country-select';
import GenderSelect from '../../selects/gender-select';

const style = {
  textArea: {
    resize: 'none',
    width: '100%',
    outline: 'none',
  },
};

const AboutUserModal = (props) => {
  const { classes, user } = props;
  const [open, setOpen] = useState(false);
  const [userName, setUserName] = useState(null);
  const [userSurname, setUserSurname] = useState(null);
  const [userPhoneNumber, setUserPhoneNumber] = useState(null);
  const [userAdress, setUserAdress] = useState(null);
  const [userCity, setUserCity] = useState(' ');
  const [userCountry, setUserCountry] = useState(' ');
  const [userGender, setUserGender] = useState(' ');
  const [userBirthDate, setUserBirthDate] = useState(user.userBirthDate);

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
    props.setUserName(userName);
    props.setUserSurname(userSurname);
    props.setUserPhoneNumber(userPhoneNumber);
    props.setUserCity(userCity);
    props.setUserCountry(userCountry);
    props.setUserGender(userGender);
    props.setUserAdress(userAdress);
    props.setUserBirthDate(userBirthDate);
    setOpen(false);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>+</Button>
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
              <TextField margin="normal"
                className={classes.userPhoneNumber}
                value={userPhoneNumber}
                onChange={(e) => setUserPhoneNumber(e.target.value)}
                label="Phone Number" />
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
    </div>
  );
};

export default withStyles(style)(AboutUserModal);