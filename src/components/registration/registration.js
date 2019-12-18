<<<<<<< HEAD
import React, { useState, useEffect } from 'react';
=======
import React, { useState } from 'react';
>>>>>>> home
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
    Radio } from "@material-ui/core";
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';
import { useHistory } from "react-router-dom";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";

function RegistrationComponent(props) {
  const history = useHistory();
  const [error, setError] = useState({
    nameError: '',
    surnameError: '',
    emailError: '',
    passwordError: '',
    repeatPasswordError : '',
    mailRepeatError: '',
    birthdayError: '',
  });
  const [values, setValues] = React.useState({
    name: '',
    surname: '',
    email: '',
    password: "",
    showPassword: false,
    repeatPassword: '',
    registrationType: 'Employee',
    gender: "Female",
  });
  const [birthday, setBirthday] = React.useState(new Date());
  const handleDateChange = date => {
    setBirthday(date);
  };
    // console.log(history);

    // useEffect(() => {
    //   // Обновляем заголовок документа с помощью API браузера
    //   return () => {console.log(8)};
    // },[history.location.pathname]);

  function doTextFieldValidation(textFieldName, errorMessage) {
    switch(textFieldName) {
      case 'emailError':
        if (!EmailValidator.validate(values.email)) {
          setError({...error, [textFieldName]: errorMessage});
          return {[textFieldName]: errorMessage};
        } else {
          setError({...error, [textFieldName]: ''});
        };
        break;
      case 'passwordError':
        if (errorMessage.length) {
          setError({...error, [textFieldName]: errorMessage});
          return {[textFieldName]: errorMessage};
        } else {
          setError({...error, [textFieldName]: ''});
          return {[textFieldName]: ''};
        };
      case 'repeatPasswordError': 
        if (values.password !== values.repeatPassword) {
          setError({...error, [textFieldName]: errorMessage});
          return {[textFieldName]: errorMessage};
        } else {
          setError({...error, [textFieldName]: ''});
          return {[textFieldName]: ''};
        };
      case 'nameError':
        if (!values.name.length) {
          setError({...error, [textFieldName]: errorMessage});
          return {[textFieldName]: errorMessage};
        } else {
          setError({...error, [textFieldName]: ''});
          return {[textFieldName]: ''};
        };
      case 'surnameError' :
        if (!values.surname.length) {
          setError({...error, [textFieldName]: errorMessage});
          return {[textFieldName]: errorMessage};
        } else {
          setError({...error, [textFieldName]: ''});
          return {[textFieldName]: ''};
        };
      default: return "for avoiding warnings";
    };
  };

  function passRegistration(event) {
    event.preventDefault()
    const {emailError, passwordError, repeatPasswordError, birthdayError, nameError, surnameError} = error;
    const {email, password} = values;

    if (!emailError && !passwordError && !repeatPasswordError && !birthdayError && !nameError && !surnameError) {
      auth.createUserWithEmailAndPassword(email, password)
      .then(user => {
        const id = user.user.uid;
        const {name, gender, surname, registrationType, email} = values;
        if (registrationType === 'Employee') {
          firestore.collection("users").doc(id).set({
            userName: name,
            userSurname: surname,
            userBirthDate: birthday,
            userId: id,
            userGender: gender,
            userEmail: email,
            registrationType,
            userImage: null,
            userPhoneNumber: null,
            userAdress: null,
            userWorkExperience: [],
            userProfessionalSkills: [],
            userLanguages: [],
          });
          history.push("/user-profile");
        } else {
          firestore.collection("companies").doc(id).set({
            companyName: name, 
            registerName: surname, 
            companyCreatingData: birthday,
            companyId: id,
            companyEmail: email,
            registrationType,
            companyViewCount: 0,
            aboutCompany: null,
            companyImage: null,
            companyBackground: null,
            companyJobs: [],
            companyWebsite: null,
            companySocialMedias: {},
            companyCategory: [],
          });
          history.push("/company-profile");
        }
      setError({
        nameError: '',
        surnameError: '',
        emailError: '',
        passwordError: '',
        repeatPasswordError : '',
        mailRepeatError: '',
      });
      }).catch(function (err) {
        setError({...error, mailRepeatError: err.message});
      });
    } else {     
      const nameError =  doTextFieldValidation('nameError', 'Fill this field');
      const surnameError = doTextFieldValidation('surnameError', 'Fill this field');
      const emailError =  doTextFieldValidation('emailError', 'Fill this field');
      const passwordError = doTextFieldValidation('passwordError', passwordSchema.validate(values.password, { list: true }));
      const repeatPasswordError = doTextFieldValidation('repeatPasswordError', 'Fill this field');
      setError({...error, ...nameError, ...surnameError, ...passwordError, ...emailError, ...repeatPasswordError});
    };
  };
    
	const handleChange = prop => event => {
		if (prop === values.showPassword) {
			setValues({ ...values, [prop]: !values.showPassword});
		};
		setValues({ ...values, [prop]: event.target.value });
	};

	const handleClickShowPassword = () => {
		setValues({ ...values, showPassword: !values.showPassword });
	};

	const handleMouseDownPassword = event => {
		event.preventDefault();
	};
    
	const {classes} = props;
	return (
		<Grid container justify="center" className = {classes.mainDiv} >
			<FormControl className = {classes.form} fullWidth>
				<Typography align="center"
					color="textPrimary"
					variant="h4"
					className={classes.h1}
					display = 'block'>
					Registration
			</Typography>
			<FormControl  className={classes.txtb}>
				<FormLabel component="legend">Register as</FormLabel>
				<RadioGroup defaultValue="female" aria-label="gender" name="customized-radios" value = {values.registrationType} onChange={handleChange('registrationType')}>
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
			<FormControl  className={classes.txtb}>
				<FormLabel component="legend">Gender</FormLabel>
				<RadioGroup defaultValue="female"
					aria-label="gender"
					name="customized-radios"
					value = {values.gender}
					onChange={handleChange('gender')}>
					<Grid container spacing={3}>
						<Grid item xs={6}>
							<FormControlLabel value="Female" control={<Radio color="primary" />} label="Female" />
						</Grid>
						<Grid item xs={6}>
							<FormControlLabel value="Male" control={<Radio color="primary" />}label="Male" />
						</Grid>
					</Grid>
				</RadioGroup>
			</FormControl>
			<TextField label = {values.registrationType === "Employer" ? "Company Name" : "Name"}
				value = {values.name}
				onChange = {handleChange('name')}
				variant="outlined" 
				type="text"
				className = {classes.txtb}
				onBlur = {() => doTextFieldValidation('nameError', 'Fill this field')}
				helperText = {error.nameError}
				error = {!!error.nameError}/>
				<TextField 
				label = {values.registrationType === "Employer" ? "Name" : "Surname"}
				variant="outlined"
				value = {values.surname}
				onChange = {handleChange('surname')}
				onBlur = {() => doTextFieldValidation('surnameError', 'Fill this field')}
				helperText = {error.surnameError}
				type="text"
				className = {classes.txtb}
				error = {!!error.surnameError}/>
			<MuiPickersUtilsProvider utils={DateFnsUtils}>
				<KeyboardDatePicker margin="normal"
					id="date-picker-dialog"
					label={values.registrationType === 'Employee' ? 'Birthday' : 'Creating date'}
					format="MM.dd.yyyy"
					className={classes.txtb}
					value={!!birthday}
					onChange={handleDateChange}
					KeyboardButtonProps={{
						'aria-label': 'change date',
					}}
				/>
			</MuiPickersUtilsProvider>
				<TextField error = {(!!error.emailError || !!error.mailRepeatError)} 
					helperText={error.emailError + error.mailRepeatError}  
					label="Email" variant="outlined" type="text" 
					className = {classes.txtb} 
					onChange = {handleChange('email')}
					onBlur = {() => doTextFieldValidation('emailError', 'Not valid email')} 
					value={values.email}/>          
				<TextField error = {!!error.passwordError} 
					onBlur = {() => doTextFieldValidation('passwordError', passwordSchema
						.validate(values.password, { list: true }))}
					helperText={error.passwordError === "" ? "" : error.passwordError.map(currentError => { 
						switch (currentError) {
							case 'min': return <p className='MuiFormHelperText-root Mui-error' key={currentError}>
																		Minimum length 6</p>;
							case 'max': return <p className='MuiFormHelperText-root Mui-error' key={currentError}>
																		Maximum length 20</p>;
							case 'uppercase': return <p className='MuiFormHelperText-root Mui-error' key={currentError}>
																		Must have uppercase letters</p>;
							case 'lowercase': return <p className='MuiFormHelperText-root Mui-error' key={currentError}>
																		Must have lowercase letters</p>;
							case 'digits': return <p className='MuiFormHelperText-root Mui-error' key={currentError}>
																		Must have digits</p>;
							case 'spaces': return <p className='MuiFormHelperText-root Mui-error' key={currentError}>
																		Should not have spaces</p>;
							default: return "for avoiding warnings"
						}
					})}
					label="Password" 
					variant="outlined" 
					type= {values.showPassword ? "text" : "password"} 
					className = {classes.txtb} 
					onChange={handleChange('password')} value={values.password} />
				<FormControl className={classes.txtb} variant="outlined" error = {!!error.repeatPasswordError}>
					<InputLabel htmlFor="outlined-adornment-password">
						Password Again
					</InputLabel>
					<OutlinedInput
						type={values.showPassword ? "text" : "password"}
						value={values.repeatPassword}
						onChange={handleChange("repeatPassword")}
						onBlur = {() => doTextFieldValidation('repeatPasswordError', 'Please repeat the password')}
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
						labelWidth={120}/>
					<FormHelperText id="outlined-weight-helper-text">{error.repeatPasswordError}</FormHelperText>
				</FormControl>
				<Button className = {classes.btn} onClick={(event) => { passRegistration(event) }}>Authorize</Button>
			</FormControl>
		</Grid>
	)
};

export default withStyles(style)(RegistrationComponent);