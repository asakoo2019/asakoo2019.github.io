import React, {useState} from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import MenuItem from '@material-ui/core/MenuItem';
import passwordSchema from "../../Login&RegistrationStyles&Npm/passwordValidation";

import {
    InputAdornment,
    IconButton,
    FormControl,
    InputLabel,
    OutlinedInput,
    FormHelperText,
  } from "@material-ui/core";
  import Visibility from "@material-ui/icons/Visibility";
  import VisibilityOff from "@material-ui/icons/VisibilityOff";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function ChangePasswordDialog(props) {
  const [newPassword, setNewPassword] = useState('');
  const [passwordError, setPasswordError] = useState([]);
  const newPasswordHandleChange = (event) => {
    setNewPassword(event.target.value);
  }
  const [open, setOpen] = React.useState(false);
  const [showPassword, setShowPassword] = useState(false)

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = event => {
    event.preventDefault();
  };

  const validatePassword = () => {
      const passwordValidationArray = passwordSchema.validate(newPassword, { list: true });
      if(passwordValidationArray.length) {
        setPasswordError(passwordValidationArray);
        return;
      }
      props.changePassword(newPassword);
      handleClose();
  }

  return (
    <div>
      <MenuItem onClick={handleClickOpen}>
        Change Password
      </MenuItem>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description">
        <DialogTitle id="alert-dialog-slide-title">{"TopTeam"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            Write your new password
          </DialogContentText>
          <FormControl variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">
            Password
          </InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={showPassword ? "text" : "password"}
            value={newPassword}
            error = {!!passwordError.length}
            onChange={newPasswordHandleChange}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
            labelWidth={70}
          />
          <FormHelperText id="outlined-weight-helper-text">{passwordError.map(currentError => {
            switch (currentError) {
              case 'min': return '\u2022 Minimum length 6';
              case 'max': return ' \u2022 Maximum length 20,'
              case 'uppercase': return ' \u2022 Must have uppercase letters'
              case 'lowercase': return ' \u2022 Must have lowercase letters';
              case 'digits': return ' \u2022 Must have digits';
              case 'spaces': return ' \u2022 Should not have spaces';
              default: return " for avoiding warnings"
            }
          })}</FormHelperText>
        </FormControl>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Disagree
          </Button>
          <Button onClick={() => validatePassword()} color="primary">
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}


