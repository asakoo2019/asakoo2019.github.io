import React, {useState, useEffect} from 'react';
import { DialogContent, DialogContentText, DialogActions, Dialog, Button, TextField, Grid } from '@material-ui/core';
import { withStyles } from "@material-ui/core/styles";
import CitySelect from '../selects/city-select';
import CountrySelect from '../selects/country-select';

const style = {
  aboutCompanyModalBtn: {
    height: 34,
  },
};

const AboutCompanyModal = (props) => {
  const { classes, company } = props;
  const [open, setOpen] = useState(false);
  const [companyName, setCompanyName] = useState(null);
  const [registerName, setRegisterName] = useState(null);
  const [companyPhoneNumber, setCompanyPhoneNumber] = useState(null);
  const [companyAdress, setCompanyAdress] = useState(null);
  const [companyCity, setCompanyCity] = useState(' ');
  const [companyCountry, setCompanyCountry] = useState(' ');
  const [companyCreatingData, setCompanyCreatingData] = useState(company.companyCreatingData);
  const [companyCategory, setCompanyCategory] = useState(null);

  useEffect(() => {
    setCompanyName(company.companyName);
    setRegisterName(company.registerName);
    setCompanyPhoneNumber(company.companyPhoneNumber);
    setCompanyAdress(company.companyAdress);
    setCompanyCreatingData(company.companyCreatingData);
    setCompanyCategory(company.companyCategory);
  }, [company.companyName, company.registerName, company.companyPhoneNumber, company.companyAdress, company.companyCreatingData, company.companyCategory]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleSave = () => {
    props.setCompanyName(companyName);
    props.setRegisterName(registerName);
    props.setCompanyPhoneNumber(companyPhoneNumber);
    props.setCompanyCity(companyCity);
    props.setCompanyCountry(companyCountry);
    props.setCompanyAdress(companyAdress);
    props.setCompanyCreatingData(companyCreatingData);
    props.setCompanyCategory(companyCategory)
    setOpen(false);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Button className={classes.aboutCompanyModalBtn} variant="outlined" color="primary" onClick={handleClickOpen}>+</Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogContent>
          <DialogContentText>
            Personal information
          </DialogContentText>
          <Grid container spacing={2}>
            <Grid item>
              <TextField margin="normal"
                className={classes.companyCompanyName}
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
                label="Name" />
            </Grid>
            <Grid item>
              <TextField margin="normal"
                className={classes.companyRegisterName}
                value={registerName}
                onChange={(e) => setRegisterName(e.target.value)}
                label="Company Register Name" />
            </Grid>
            <Grid item>
              <TextField margin="normal"
                disabled
                className={classes.companyEmail}
                value={company.email}
                label="E-mail" />
            </Grid>
          </Grid>
          <Grid container spacing={2}>
            <Grid item>
              <TextField margin="normal"
                className={classes.companyPhoneNumber}
                value={companyPhoneNumber}
                placeholder='+37400112233'
                onChange={(e) => setCompanyPhoneNumber(e.target.value)}
                label="Phone Number" />
            </Grid>
            <Grid item>
              <TextField margin="normal"
                className={classes.companyAdress}
                value={companyAdress}
                onChange={(e) => setCompanyAdress(e.target.value)}
                label="Adress" />
            </Grid>
            <Grid item>
              <CitySelect company={company}
                setCompanyCity={setCompanyCity}/>
            </Grid>
            <Grid item>
              <CountrySelect company={company}
                setCompanyCountry={setCompanyCountry}/>
            </Grid>
          </Grid>
          <Grid container spacing={2}>
            <Grid item>
              <TextField margin="normal"
                className={classes.companyCreatingData}
                value={companyCreatingData}
                onChange={(e) => setCompanyCreatingData(e.target.value)}
                label="Company creating data" />
            </Grid>
            <Grid item>
              <TextField margin="normal"
                className={classes.companyCategory}
                value={companyCategory}
                onChange={(e) => setCompanyCategory(e.target.value)}
                label="Company category" />
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

export default withStyles(style)(AboutCompanyModal);