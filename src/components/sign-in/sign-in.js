import React, { useState, useEffect } from "react";
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
import { auth, firestore } from "../firebase/db";
import style from '../Login&RegistrationStyles&Npm/login&RegStyle';
import { useHistory } from "react-router-dom";

function SignIn(props) {
  const history = useHistory();
  const [isForgotPassword, setIsForgotPassword] = useState(false);
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

  const handleEnter = () => {
    passLogin();
  }
  const handleKeyPress = (event) => {
    if (event.keyCode === 13) {
      handleEnter();
    }
  }

  useEffect(() => {
    document.addEventListener('keydown', handleKeyPress);
    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }); 

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
      firestore.collection("users").get()
      .then(function(doc) {
        let key;
        let registrationType;
        for (let i = 0; i < doc.docs.length; i++) {
          if (doc.docs[i].data().email === values.email) {
            key = doc.docs[i].data().id;
            registrationType = doc.docs[i].data().registrationType.toLowerCase();
          };
        };
        if (key) {
          history.push(`/${registrationType}/${key}`);
        } else {
          firestore.collection("companies").get()
          .then(function(doc) {
            for (let i = 0; i < doc.docs.length; i++) {
              if (doc.docs[i].data().email === values.email) {
                key = doc.docs[i].data().id;
                registrationType = doc.docs[i].data().registrationType.toLowerCase();
              };
            };
            history.push(`/${registrationType}/${key}`);
          });
        };
      })
      .error(err => {console.log(err)});
    })
    .catch(function(err) {
      const errorCode = err.code;
      const errorMessage = err.message;
      switch (errorCode) {
        case 'auth/invalid-email': setError({emailError: errorMessage, passwordError: ''});
                                   setIsForgotPassword(false);
        break;
        case 'auth/user-not-found': setError({emailError: errorMessage, passwordError: ''});
                                    setIsForgotPassword(false);
        break;
        case 'auth/wrong-password': setError({emailError: '', passwordError: errorMessage});
                                    setIsForgotPassword(true);
        break;
        default: ;
      };
    });
  };

  const forgotPassword = () => {
    auth.sendPasswordResetEmail(values.email)
    .then(function (u) {
    alert('Please check your email...')
    }).catch(function (e) {
    console.log(e);
    console.log(email);
    });
  };

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
          Sign in
        </Typography>
        <TextField
          autoFocus
          label="Sign in"
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
        {isForgotPassword ? <p className = {classes.forgotPassword} onClick={forgotPassword}>Forgot password?</p> : <p></p>}
      </FormControl>
      </Grid>
    </div>
  );
}

export default withStyles(style)(SignIn);
