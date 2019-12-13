import React, { useState } from "react";
import {
  TextField,
  Typography,
  InputAdornment,
  IconButton,
  FormControl,
  InputLabel,
  OutlinedInput,
  Button,
  FormHelperText,
  Grid
} from "@material-ui/core";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import { withStyles } from "@material-ui/core/styles";
import { auth } from "../firebase/db";
import style from '../Login&RegistrationStyles&Npm/login&RegStyle';

function SignIn(props) {
  const [values, setValues] = useState({
    email: '',
    password: "",
    showPassword: false
  });
  const [error, setError] = useState({
    emailError: '',
    passwordError: ''
  })
  const { classes } = props;
  const {email, password, showPassword} = values;
  const {emailError, passwordError} = error;

  const handleChange = prop => event => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = event => {
    event.preventDefault();
  };

  function passLogin() {
    auth.signInWithEmailAndPassword(email, password)
    .then(function(message) {
      setError({email: '', password: ''});
      //continue
    })
    .catch(function(err) {
      const errorCode = err.code;
      const errorMessage = err.message;
      switch (errorCode) {
        case 'auth/invalid-email': setError({emailError: errorMessage, passwordError: ''});
        break;
        case 'auth/user-not-found': setError({emailError: errorMessage, passwordError: ''});
        break;
        case 'auth/wrong-password': setError({emailError: '', passwordError: errorMessage});
        break;
        default:
      } 
    });

  }

  return (
    <div>
      <Grid className = {classes.mainDiv} container justify="center" alignItems="center">
      <FormControl variant="filled" className={classes.form}>
        <Typography
          align="center"
          color="textPrimary"
          variant="h4"
          className={classes.h1}
        >
          Login
        </Typography>
        <TextField
          autoFocus
          label="Login"
          variant="outlined"
          className={classes.txtb}
          value={email}
          onChange={handleChange("email")}
          error = {!!emailError}
          helperText = {emailError}
        />

        <FormControl className={classes.txtb} variant="outlined" error = {!!passwordError}>
          <InputLabel htmlFor="outlined-adornment-password">
            Password
          </InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={handleChange("password")}
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
          <FormHelperText id="outlined-weight-helper-text">{passwordError}</FormHelperText>
        </FormControl>
        <Button className={classes.btn} onClick = {(event) => passLogin(event)}>Sign in</Button>
      </FormControl>
      </Grid>
    </div>
  );
}

export default withStyles(style)(SignIn);
