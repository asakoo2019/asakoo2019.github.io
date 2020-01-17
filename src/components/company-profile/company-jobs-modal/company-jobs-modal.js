import React, { useState, useEffect } from 'react';
import { DialogContent, DialogActions, Dialog, Button, TextField, Grid,
  TextareaAutosize, DialogContentText, FormControl, InputLabel, Select, MenuItem } from '@material-ui/core';
import { withStyles } from "@material-ui/core/styles";

const style = {
  textAreaBlock: {
    marginJobTypep: 20,
  },
  textArea: {
    resize: 'none',
    width: '100%',
    outline: 'none',
    height: '200px !important',
  },
  select: {
    minWidth: 200,
  },
};

const CompanyJobsModal = (props) => {
  const { classes, company } = props;
  const [open, setOpen] = useState(false);
  const [jobName, setJobName] = useState('');
  const [location, setLocation] = useState('');
  const [jobCategory, setJobCategory] = useState('');
  const [jobType, setJobType] = useState('');
  const [jobDetails, setJobDetails] = useState('');
  const [term, setTerm] = useState('');
  const id = require('uuid/v4');
  
  useEffect(() => {
    switch (term) {
      case 'Permanent': setTerm('Permanent');
      break;
      case 'Temporary': setTerm('Temporary');
      break;
      case 'Freelance': setTerm('Freelance');
      break;
      case 'Contract': setTerm('Contract');
      break;
      case 'Internship': setTerm('Internship');
      break;
      default: ;
    };
  }, [term]);

  useEffect(() => {
    switch (jobType) {
      case 'Full time': setJobType('Full time');
      break;
      case 'Part time': setJobType('Part time');
      break;
      case 'Training': setJobType('Training');
      break;
      case 'Fixed term contract': setJobType('Fixed term contract');
      break;
      default: ;
    };
  }, [jobType]);

  useEffect(() => {
    switch (location) {
      case 'Yerevan': setLocation('Yerevan');
      break;
      case 'Gyumri': setLocation('Gyumri');
      break;
      case 'Vanadzor': setLocation('Vanadzor');
      break;
      default: ;
    };
  }, [location]);

  const handleClickOpen = () => {
    setJobName('');
    setLocation('');
    setJobCategory('');
    setJobType('');
    setJobDetails('');
    setTerm('');
    setOpen(true);
  };

  const handleSave = () => {
    if (jobName !== '' && term !== '' && location !== '' && jobCategory !== '' && jobType !== ''){
      props.setCompanyJobs(
        [...company.companyJobs, {jobName, term, location, jobCategory, jobType, jobDetails, id: id()}]
      );
    };
    setOpen(false);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>+</Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogContent>
          <Grid container spacing={2}>
            <Grid item>
              <TextField margin="normal"
                value={jobName}
                onChange={(e) => setJobName(e.target.value)}
                label="Job name" />
            </Grid>
            <Grid item>
              <FormControl margin="normal" className={classes.select}>
                <InputLabel>Employment term</InputLabel>
                <Select value={term}
                  onChange={(e) => setTerm(e.target.value)}>
                  <MenuItem value={'Permanent'}>Permanent</MenuItem>
                  <MenuItem value={'Temporary'}>Temporary</MenuItem>
                  <MenuItem value={'Freelance'}>Freelance</MenuItem>
                  <MenuItem value={'Contract'}>Contract</MenuItem>
                  <MenuItem value={'Internship'}>Internship</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item>
            <FormControl margin="normal" className={classes.select}>
                <InputLabel>Location</InputLabel>
                <Select value={location}
                  onChange={(e) => setLocation(e.target.value)}>
                  <MenuItem value={'Yerevan'}>Yerevan</MenuItem>
                  <MenuItem value={'Gyumri'}>Gyumri</MenuItem>
                  <MenuItem value={'Vanadzor'}>Vanadzor</MenuItem>
                </Select>
              </FormControl>
            </Grid>
          </Grid>
          <Grid container spacing={2}
            justify='space-around'>
            <Grid item>
              <TextField margin="normal"
                value={jobCategory}
                onChange={(e) => setJobCategory(e.target.value)}
                label="Job category" />
            </Grid>
            <Grid item>
            <FormControl margin="normal" className={classes.select}>
                <InputLabel>Job type</InputLabel>
                <Select value={jobType}
                  onChange={(e) => setJobType(e.target.value)}>
                  <MenuItem value={'Full time'}>Full time</MenuItem>
                  <MenuItem value={'Part time'}>Part time</MenuItem>
                  <MenuItem value={'Training'}>Training</MenuItem>
                  <MenuItem value={'Fixed term contract'}>Fixed term contract</MenuItem>
                </Select>
              </FormControl>
            </Grid>
          </Grid>
          <Grid container spacing={2} className={classes.textAreaBlock}>
            <DialogContentText>
              Job details:
            </DialogContentText>
            <TextareaAutosize className={classes.textArea}
              defaultValue={jobDetails}
              onChange={(e) => setJobDetails(e.target.value)} />
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

export default withStyles(style)(CompanyJobsModal);