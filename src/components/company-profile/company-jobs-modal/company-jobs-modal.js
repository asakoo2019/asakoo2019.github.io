import React, { useState, useEffect } from 'react';
import { DialogContent, DialogActions, Dialog, Button, TextField, Grid,
  TextareaAutosize, DialogContentText, FormControl, InputLabel, Select, MenuItem } from '@material-ui/core';
import { withStyles } from "@material-ui/core/styles";
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import CreateIcon from '@material-ui/icons/Create';

const style = {
  textAreaBlock: {
    marginTop: 20,
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
  jobDeadline: {
    maxWidth: 200,
    marginTop: 15,
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
  const [jobDeadline, setJobDeadline] = useState('');
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

  useEffect(() => {
    switch (jobCategory) {
      case 'Software development': setJobCategory('Software development');
      break;
      case 'Quality Assurance /Control': setJobCategory('Quality Assurance /Control');
      break;
      case 'Web/Graphic design': setJobCategory('Web/Graphic design');
      break;
      case 'Product/Project Management': setJobCategory('Product/Project Management');
      break;
      case 'Other IT': setJobCategory('Other IT');
      break;
      case 'Sales/service management': setJobCategory('Sales/service management');
      break;
      case 'Administrative/office-work': setJobCategory('Administrative/office-work');
      break;
      case 'Tourism/Hospitality/HoReCa': setJobCategory('Tourism/Hospitality/HoReCa');
      break;
      case 'Marketing/Advertising': setJobCategory('Marketing/Advertising');
      break;
      case 'Communications/Journalism/PR': setJobCategory('Communications/Journalism/PR');
      break;
      case 'Construction': setJobCategory('Construction');
      break;
      case 'Business/Management': setJobCategory('Business/Management');
      break;
      case 'Art/Design/Architecture': setJobCategory('Art/Design/Architecture');
      break;
      case 'Production': setJobCategory('Production');
      break;
      case 'Foreign language': setJobCategory('Foreign language');
      break;
      default: ;
    };
  }, [jobCategory]);

  const handleClickOpen = () => {
    setJobName('');
    setLocation('');
    setJobCategory('');
    setJobType('');
    setJobDetails('');
    setTerm('');
    setJobDeadline(new Date());
    setOpen(true);
  };

  const handleSave = () => {
    if (jobName !== '' && term !== '' && location !== '' && jobCategory !== '' && jobType !== '' && jobDeadline !== ''){
      props.setCompanyJobs(
        [...company.companyJobs, {jobName, term, location, jobCategory, jobType, jobDetails, id: id(), checked: false,viewCount: 0, jobDeadline: jobDeadline.toLocaleDateString(undefined, { day:'numeric', month: 'numeric', year: 'numeric' }), companyName: company.companyName}]
      );
    };
    setOpen(false);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      {props.setCompanyJobs && <Button variant="outlined" color="primary" onClick={handleClickOpen}>
          <CreateIcon/>
        </Button>}
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
            <FormControl margin="normal" className={classes.select}>
                <InputLabel>Job category</InputLabel>
                <Select value={jobCategory}
                  onChange={(e) => setJobCategory(e.target.value)}>
                  <MenuItem value={'Software development'}>Software development</MenuItem>
                  <MenuItem value={'Quality Assurance/Control'}>Quality Assurance /Control</MenuItem>
                  <MenuItem value={'Web/Graphic design'}>Web/Graphic design</MenuItem>
                  <MenuItem value={'Product/Project Management'}>Product/Project Management</MenuItem>
                  <MenuItem value={'Other IT'}>Other IT</MenuItem>
                  <MenuItem value={'Sales/service management'}>Sales/service management</MenuItem>
                  <MenuItem value={'Administrative/office-work'}>Administrative/office-work</MenuItem>
                  <MenuItem value={'Tourism/Hospitality/HoReCa'}>Tourism/Hospitality/HoReCa</MenuItem>
                  <MenuItem value={'Marketing/Advertising'}>Marketing/Advertising</MenuItem>
                  <MenuItem value={'Communications/Journalism/PR'}>Communications/Journalism/PR</MenuItem>
                  <MenuItem value={'Construction'}>Construction</MenuItem>
                  <MenuItem value={'Business/Management'}>Business/Management</MenuItem>
                  <MenuItem value={'Art/Design/Architecture'}>Art/Design/Architecture</MenuItem>
                  <MenuItem value={'Production'}>Production</MenuItem>
                  <MenuItem value={'Foreign language'}>Foreign language</MenuItem>
                </Select>
              </FormControl>
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
            <Grid item className={classes.jobDeadline}>
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                  <KeyboardDatePicker size='small'
                    id="date-picker-dialog"
                    label='Job deadline'
                    format="dd.MM.yyyy"
                    value={jobDeadline}
                    onChange={(date) => setJobDeadline(date)}
                    KeyboardButtonProps={{'aria-label': 'change date',}}
                    minDate={new Date()} />
                </MuiPickersUtilsProvider>
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