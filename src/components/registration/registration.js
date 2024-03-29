import React, { useState, useEffect } from 'react';
import { auth, firestore } from '../firebase/db';
import style from '../Login&RegistrationStyles&Npm/login&RegStyle';
import { withStyles } from "@material-ui/core/styles";
import passwordSchema from "../Login&RegistrationStyles&Npm/passwordValidation";
import EmailValidator from "../Login&RegistrationStyles&Npm/emailValidation";
import DateFnsUtils from '@date-io/date-fns';
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
  Grid,
  RadioGroup,
  FormLabel,
  FormControlLabel,
  Radio
} from "@material-ui/core";
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';
import { useHistory } from "react-router-dom";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import userImage from './avatar.png';
import companyImage from './company-icon.png';
import companyBackground from './clear-background-png-7.png';
import { connect } from 'react-redux';

function RegistrationComponent(props) {
  const {dispatch} = props;
  const history = useHistory();
  const [error, setError] = useState({
    nameError: '',
    surnameError: '',
    emailError: '',
    passwordError: '',
    repeatPasswordError: '',
    mailRepeatError: '',
    birthdayError: '',
  });
  const [values, setValues] = useState({
    name: '',
    surname: '',
    email: '',
    password: "",
    showPassword: false,
    repeatPassword: '',
    registrationType: 'Employee',
    gender: "Female",
  });
  const [birthday, setBirthday] = useState(new Date());

  const handleEnter = (event) => {
    passRegistration(event);
  }
  const handleKeyPress = (event) => {
    if (event.keyCode === 13) {
      handleEnter(event);
    }
  }

  useEffect(() => {
    document.addEventListener('keydown', handleKeyPress);
    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }); 
  
  const handleDateChange = date => {
    setBirthday(date);
  };

  function doTextFieldValidation(textFieldName, errorMessage) {
    switch (textFieldName) {
      case 'emailError':
        if (!EmailValidator.validate(values.email)) {
          setError({ ...error, [textFieldName]: errorMessage });
          return { [textFieldName]: errorMessage };
        } else {
          setError({ ...error, [textFieldName]: '' });
        };
        break;
      case 'passwordError':
        if (errorMessage.length) {
          setError({ ...error, [textFieldName]: errorMessage });
          return { [textFieldName]: errorMessage };
        } else {
          setError({ ...error, [textFieldName]: '' });
          return { [textFieldName]: '' };
        };
      case 'repeatPasswordError':
        if (values.password !== values.repeatPassword) {
          setError({ ...error, [textFieldName]: errorMessage });
          return { [textFieldName]: errorMessage };
        } else {
          setError({ ...error, [textFieldName]: '' });
          return { [textFieldName]: '' };
        };
      case 'nameError':
        if (!values.name.length) {
          setError({ ...error, [textFieldName]: errorMessage });
          return { [textFieldName]: errorMessage };
        } else {
          setError({ ...error, [textFieldName]: '' });
          return { [textFieldName]: '' };
        };
      case 'surnameError':
        if (!values.surname.length) {
          setError({ ...error, [textFieldName]: errorMessage });
          return { [textFieldName]: errorMessage };
        } else {
          setError({ ...error, [textFieldName]: '' });
          return { [textFieldName]: '' };
        };
      default: return "for avoiding warnings";
    };
  };

  function passRegistration(event) {
    event.preventDefault();
    const { emailError, passwordError, repeatPasswordError, birthdayError, nameError, surnameError, mailRepeatError } = error;
    
    if (!emailError && !passwordError && !repeatPasswordError && !birthdayError && !nameError && !surnameError && 
      !mailRepeatError) {
        // if (isLogedIn) {
          auth.createUserWithEmailAndPassword(values.email, values.password)
            .then(user => {
              const id = user.user.uid;
              // const { name, gender, surname, registrationType, email } = values;
              if (values.registrationType === 'Employee') {
                const user = {
                  userName: values.name,
                  userSurname: values.surname,
                  userBirthDate: birthday.toLocaleDateString(undefined, {
                    day:'numeric',
                    month: 'numeric',
                    year: 'numeric'
                  }),
                  id: id,
                  userGender: values.gender,
                  email: values.email,
                  registrationType: values.registrationType,
                  userImage: userImage,
                  userPhoneNumber: '',
                  userAdress: '',
                  userCity: 'Yerevan',
                  userCountry: 'Armenia',
                  userWorkExperience: [],
                  userProfessionalSkills: [],
                  userLanguages: [],
                  aboutUser: '',
                };
                firestore.collection("users").doc(id).set(user);
                dispatch({type: "SIGN-IN", payload: user});
                history.push(`/${values.registrationType.toLowerCase()}/${id}`);
              } else {
                const company = {
                  companyName: values.name,
                  registerName: values.surname,
                  companyCreatingData: birthday.toLocaleDateString(undefined, {
                    day:'numeric',
                    month: 'numeric',
                    year: 'numeric'
                  }),
                  id: id,
                  email: values.email,
                  registrationType: values.registrationType,
                  companyViewCount: 0,
                  aboutCompany: '',
                  companyImage: companyImage,
                  companyBackground: companyBackground,
                  companyJobs: [],
                  companyPhoneNumber: '',
                  companyCategory: '',
                  companyCity: 'Yerevan',
                  companyCountry: 'Armenia',
                  companyAdress: '',
                };
                firestore.collection("companies").doc(id).set(company);
                dispatch({type: "SIGN-IN", payload: company});
                history.push(`/${values.registrationType.toLowerCase()}/${id}`);
              }
            }).catch(function (err) {
              setError(e => ({ ...e, mailRepeatError: err.message }));
          });
    } else {
      const nameError = doTextFieldValidation('nameError', 'Fill this field');
      const surnameError = doTextFieldValidation('surnameError', 'Fill this field');
      const emailError = doTextFieldValidation('emailError', 'Fill this field');
      const passwordError = doTextFieldValidation('passwordError', passwordSchema.validate(values.password, { list: true }));
      const repeatPasswordError = doTextFieldValidation('repeatPasswordError', 'Fill this field');
      setError({ ...error, ...nameError, ...surnameError, ...passwordError, ...emailError, ...repeatPasswordError });
    };
  };

  const handleChange = prop => event => {
    if (prop === values.showPassword) {
      setValues({ ...values, [prop]: !values.showPassword });
    } if (prop === 'email') {
      setError({...error, mailRepeatError : ''});
      // setIsLogedIn(false);
    }
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = event => {
    event.preventDefault();
  };

  const { classes } = props;
  return (
    <Grid container justify="center" className={classes.mainDiv} >
      <FormControl className={classes.form} fullWidth>
        <Typography align="center"
          color="textPrimary"
          variant="h4"
          className={classes.h1}
          display='block'>
          Registration
			</Typography>
        <FormControl className={classes.txtb}>
          <FormLabel component="legend">Register as</FormLabel>
          <RadioGroup value={values.registrationType}
            onChange={handleChange('registrationType')}>
            <Grid container spacing={3}>
              <Grid item xs={6}>
                <FormControlLabel value="Employee" control={<Radio color="primary" />} label="Employee" />
              </Grid>
              <Grid item xs={6}>
                <FormControlLabel value="Employer" control={<Radio color="primary" />} label="Employer" />
              </Grid>
            </Grid>
          </RadioGroup>
        </FormControl>
        {values.registrationType === 'Employee' ? (<FormControl className={classes.txtb}>
          <FormLabel component="legend">Gender</FormLabel>
          <RadioGroup
            value={values.gender}
            onChange={handleChange('gender')}>
            <Grid container spacing={3}>
              <Grid item xs={6}>
                <FormControlLabel value="Female" control={<Radio color="primary" />} label="Female" />
              </Grid>
              <Grid item xs={6}>
                <FormControlLabel value="Male" control={<Radio color="primary" />} label="Male" />
              </Grid>
            </Grid>
          </RadioGroup>
        </FormControl>) : null}
        <TextField label={values.registrationType === "Employer" ? "Company Name" : "Name"}
          value={values.name}
          onChange={handleChange('name')}
          variant="outlined"
          type="text"
          className={classes.txtb}
          onBlur={() => doTextFieldValidation('nameError', 'Fill this field')}
          helperText={error.nameError}
          error={!!error.nameError} />
        <TextField
          label={values.registrationType === "Employer" ? "Name" : "Surname"}
          variant="outlined"
          value={values.surname}
          onChange={handleChange('surname')}
          onBlur={() => doTextFieldValidation('surnameError', 'Fill this field')}
          helperText={error.surnameError}
          type="text"
          className={classes.txtb}
          error={!!error.surnameError} />
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <KeyboardDatePicker margin="normal"
            id="date-picker-dialog"
            label={values.registrationType === 'Employee' ? 'Birthday' : 'Creating date'}
            format="dd.MM.yyyy"
            className={classes.txtb}
            value={birthday}
            onChange={handleDateChange}
            maxDate={new Date()}
            KeyboardButtonProps={{
              'aria-label': 'change date',
            }}
          />
        </MuiPickersUtilsProvider>
        <TextField error={(!!error.emailError || !!error.mailRepeatError)}
          helperText={error.emailError + error.mailRepeatError}
          label="Email" variant="outlined" type="text"
          className={classes.txtb}
          onChange={handleChange('email')}
          onBlur={() => doTextFieldValidation('emailError', 'Not valid email')}
          value={values.email} />
        <TextField error={!!error.passwordError}
          onBlur={() => doTextFieldValidation('passwordError', passwordSchema
            .validate(values.password, { list: true }))}
          helperText={error.passwordError === "" ? "" : error.passwordError.map(currentError => {
            switch (currentError) {
              case 'min': return '\u2022 Minimum length 6';
              case 'max': return ' \u2022 Maximum length 20,'
              case 'uppercase': return ' \u2022 Must have uppercase letters'
              case 'lowercase': return ' \u2022 Must have lowercase letters';
              case 'digits': return ' \u2022 Must have digits';
              case 'spaces': return ' \u2022 Should not have spaces';
              default: return " for avoiding warnings"
            }
          })}
          label="Password"
          variant="outlined"
          type={values.showPassword ? "text" : "password"}
          className={classes.txtb}
          onChange={handleChange('password')} value={values.password} />
        <FormControl className={classes.txtb} variant="outlined" error={!!error.repeatPasswordError}>
          <InputLabel htmlFor="outlined-adornment-password">
            Password Again
					</InputLabel>
          <OutlinedInput
            type={values.showPassword ? "text" : "password"}
            value={values.repeatPassword}
            onChange={handleChange("repeatPassword")}
            onBlur={() => doTextFieldValidation('repeatPasswordError', 'Please repeat the password')}
            endAdornment={
              <InputAdornment position="end">
                <IconButton aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end">
                  {values.showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
            labelWidth={120} />
          <FormHelperText id="outlined-weight-helper-text">{error.repeatPasswordError}</FormHelperText>
        </FormControl>
        <Button className={classes.btn} onClick={(event) => { passRegistration(event) }}>Register</Button>
      </FormControl>
    </Grid>
  )
};

export default connect()(withStyles(style)(RegistrationComponent));