import React, { useState } from 'react';
import { DialogContent, DialogActions, Dialog, Button, TextField, Grid, TextareaAutosize, DialogContentText } from '@material-ui/core';
import { withStyles } from "@material-ui/core/styles";
import CreateIcon from '@material-ui/icons/Create';
import { firestore } from '../../../firebase/db';
import { connect } from 'react-redux';

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
};

const UserExperienceModal = (props) => {
  const { classes, user, dispatch } = props;
  const [open, setOpen] = useState(false);
  const [companyName, setCompanyName] = useState('');
  const [jobTitle, setJobTitle] = useState('');
  const [location, setLocation] = useState('');
  const [from, setFrom] = useState('');
  let [to, setTo] = useState('');
  const [jobDetails, setJobDetails] = useState('');
  const id = require('uuid/v4');

  const handleClickOpen = () => {
    setCompanyName('');
    setJobTitle('');
    setLocation('');
    setFrom('');
    setTo('');
    setJobDetails('');
    setOpen(true);
  };

  const handleSave = () => {
    if (to === '') {
      to = 'until now';
    };
    const currentExperiance = {companyName, jobTitle, location, from, to, jobDetails, id: id()};
    if (companyName !== '' && jobTitle !== '' && location !== '' && from !== ''){
      firestore.collection("users").doc(props.id)
      .update({
        userWorkExperience: [...user.userWorkExperience, currentExperiance]
      }).catch(function(error) {
        console.error("Error updating document: ", error);
      });
      dispatch({type: "SIGN-IN", payload: {...user, userWorkExperience: [...user.userWorkExperience, currentExperiance]}});
    };
    setOpen(false);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        <CreateIcon/>
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogContent>
          <Grid container spacing={2}>
            <Grid item>
              <TextField margin="normal"
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
                label="Company name" />
            </Grid>
            <Grid item>
              <TextField margin="normal"
                value={jobTitle}
                onChange={(e) => setJobTitle(e.target.value)}
                label="Job title" />
            </Grid>
            <Grid item>
              <TextField margin="normal"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                label="Location" />
            </Grid>
          </Grid>
          <Grid container spacing={2}
            justify='space-around'>
            <Grid item>
              <TextField margin="normal"
                value={from}
                onChange={(e) => setFrom(e.target.value)}
                label="From" />
            </Grid>
            <Grid item>
              <TextField margin="normal"
                value={to}
                onChange={(e) => setTo(e.target.value)}
                label="To" />
            </Grid>
          </Grid>
          <Grid container spacing={2} className={classes.textAreaBlock}>
            <DialogContentText>
              Job details: (Provide details covering this job position. Include information about your responsibilities, about the company and any other details that might interest your potential employer.)
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

export default connect()(withStyles(style)(UserExperienceModal));