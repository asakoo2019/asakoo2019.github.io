import React, { useState, useEffect } from 'react';
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
  userExperianceModalBtn: {
    padding: '5px !important',
    minWidth: 0,
  },
};

const UserExperienceCangeModal = (props) => {
  const { classes, user, dispatch } = props;
  const [open, setOpen] = useState(false);
  const [companyName, setCompanyName] = useState('');
  const [jobTitle, setJobTitle] = useState('');
  const [category, setCategory] = useState('');
  const [from, setFrom] = useState('');
  let [to, setTo] = useState('');
  const [jobDetails, setJobDetails] = useState('');
  const [currentExperience, setCurrentExperience] = useState(null);
  const [experience, setExperience] = useState([]);

  const handleClickOpen = () => {
    setCompanyName(props.item.companyName);
    setJobTitle(props.item.jobTitle);
    setCategory(props.item.category);
    setFrom(props.item.from);
    setTo(props.item.to);
    setJobDetails(props.item.jobDetails);
    user.userWorkExperience.forEach(item => {
      if(item.id === props.item.id){
        const index = user.userWorkExperience.findIndex((el) => el.id === item.id);
        const newArray = [
          ...user.userWorkExperience.slice(0, index),
          ...user.userWorkExperience.slice(index + 1)
        ];
        setExperience(newArray);
      };
    });
    setOpen(true);
  };

  useEffect(() => {
    const current = {id: props.item.id, companyName, jobTitle, category, from, to, jobDetails};
    setCurrentExperience(current);
  }, [companyName, jobTitle, category, from, to, jobDetails, props.item.id]);

  const handleSave = () => {
    if (to === '') {
      to = 'until now';
    };
    if (companyName !== '' && jobTitle !== '' && category !== '' && from !== '' && currentExperience){
      firestore.collection("users").doc(user.id)
      .update({
        userWorkExperience: [...experience, currentExperience]
      }).catch(function(error) {
        console.error("Error updating document: ", error);
      });
      dispatch({type: "SIGN-IN", payload: {...user, userWorkExperience: [...experience, currentExperience]}});
    };
    setOpen(false);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Button className={classes.userExperianceModalBtn} color="primary" onClick={handleClickOpen}>
        <CreateIcon color='error'/>
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
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                label="Company category" />
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

export default connect()(withStyles(style)(UserExperienceCangeModal));