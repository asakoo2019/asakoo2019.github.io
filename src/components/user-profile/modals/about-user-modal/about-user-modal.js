import React, {useState, useEffect} from 'react';
import { DialogContent, DialogContentText, DialogActions, Dialog, Button, TextField } from '@material-ui/core';
import { withStyles } from "@material-ui/core/styles";

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
  const [phoneNumber, setUserPhoneNumber] = useState(null);

  useEffect(() => {
    setUserName(user.userName);
    setUserSurname(user.userSurname);
    setUserPhoneNumber(user.userPhoneNumber);
  }, [user.userName, user.userSurname, user.userPhoneNumber])

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleSave = () => {
    props.setUserName(userName);
    props.setUserSurname(userSurname);
    props.setUserPhoneNumber(phoneNumber);
    setOpen(false);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>+</Button>
      <Dialog className={classes.formDialog} open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogContent>
          <DialogContentText>
            Personal information
          </DialogContentText>
          <TextField
            className={classes.userUserName}
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            label="Name" />
            <TextField
            className={classes.userUserSurname}
            value={userSurname}
            onChange={(e) => setUserSurname(e.target.value)}
            label="Surname" />
          <TextField
            className={classes.userPhoneNumber}
            value={phoneNumber}
            onChange={(e) => setUserPhoneNumber(e.target.value)}
            label="Phone Number" />
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
}

export default withStyles(style)(AboutUserModal);