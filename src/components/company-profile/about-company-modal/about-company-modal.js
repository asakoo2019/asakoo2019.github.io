import React, {useState, useEffect} from 'react';
import { DialogContent, DialogContentText, DialogActions,
  Dialog, Button, TextField, Grid, FormControl, InputLabel, Select, MenuItem } from '@material-ui/core';
import { withStyles } from "@material-ui/core/styles";
import CitySelect from '../selects/city-select';
import CountrySelect from '../selects/country-select';
import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-number-input';

const style = {
  aboutCompanyModalBtn: {
    height: 34,
  },
  select: {
    minWidth: 200,
  },
  companyPhoneNumber: {
    maxWidth: 200,
    marginTop: 36,
  },
};

const AboutCompanyModal = (props) => {
  const { classes, company } = props;
  const [open, setOpen] = useState(false);
  const [companyName, setCompanyName] = useState(null);
  const [registerName, setRegisterName] = useState(null);
  const [companyPhoneNumber, setCompanyPhoneNumber] = useState(' ');
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

  useEffect(() => {
    switch (companyCategory) {
      case 'Finance/Banking/Insurance': setCompanyCategory('Finance/Banking/Insurance');
      break;
      case 'Information technologies': setCompanyCategory('Information technologies');
      break;
      case 'Design/Architecture/Construction': setCompanyCategory('Design/Architecture/Construction');
      break;
      case 'Consulting/ Legal': setCompanyCategory('Consulting/ Legal');
      break;
      case 'Import/Export/Trade': setCompanyCategory('Import/Export/Trade');
      break;
      case 'Marketing/Advertising/PR': setCompanyCategory('Marketing/Advertising/PR');
      break;
      case 'Tourism/Hospitality/Entertainment': setCompanyCategory('Tourism/Hospitality/Entertainment');
      break;
      case 'Medical/Pharmaceutical': setCompanyCategory('Medical/Pharmaceutical');
      break;
      case 'Sports /Beauty': setCompanyCategory('Sports /Beauty');
      break;
      case 'Education': setCompanyCategory('Education');
      break;
      case 'Retail business': setCompanyCategory('Retail business');
      break;
      case 'NGO/International organization': setCompanyCategory('NGO/International organization');
      break;
      case 'Services': setCompanyCategory('Services');
      break;
      case 'Mining/Manufacturing/Production': setCompanyCategory('Mining/Manufacturing/Production');
      break;
      case 'Online Service': setCompanyCategory('Online Service');
      break;
      default: ;
    };
  }, [companyCategory]);

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
              <PhoneInput
                country="Armenia"
                placeholder="Enter phone number"
                value={companyPhoneNumber}
                className={classes.companyPhoneNumber}
                onChange={setCompanyPhoneNumber}/>
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
            <FormControl margin="normal" className={classes.select}>
                <InputLabel>Company category</InputLabel>
                <Select value={companyCategory}
                  onChange={(e) => setCompanyCategory(e.target.value)}>
                  <MenuItem value={'Finance/Banking/Insurance'}>Finance/Banking/Insurance</MenuItem>
                  <MenuItem value={'Quality Assurance/Control'}>Information technologies</MenuItem>
                  <MenuItem value={'Design/Architecture/Construction'}>Design/Architecture/Construction</MenuItem>
                  <MenuItem value={'Consulting/ Legal'}>Consulting/ Legal</MenuItem>
                  <MenuItem value={'Import/Export/Trade'}>Import/Export/Trade</MenuItem>
                  <MenuItem value={'Marketing/Advertising/PR'}>Marketing/Advertising/PR</MenuItem>
                  <MenuItem value={'Tourism/Hospitality/Entertainment'}>Tourism/Hospitality/Entertainment</MenuItem>
                  <MenuItem value={'Medical/Pharmaceutical'}>Medical/Pharmaceutical</MenuItem>
                  <MenuItem value={'Sports /Beauty'}>Sports /Beauty</MenuItem>
                  <MenuItem value={'Education'}>Education</MenuItem>
                  <MenuItem value={'Retail business'}>Retail business</MenuItem>
                  <MenuItem value={'NGO/International organization'}>NGO/International organization</MenuItem>
                  <MenuItem value={'Services'}>Services</MenuItem>
                  <MenuItem value={'Mining/Manufacturing/Production'}>Mining/Manufacturing/Production</MenuItem>
                  <MenuItem value={'Online Service'}>Online Service</MenuItem>
                </Select>
              </FormControl>
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