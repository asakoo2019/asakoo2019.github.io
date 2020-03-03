import React, {useState, useEffect} from 'react';
import { DialogContent,
    DialogContentText,
    DialogActions,
    Dialog,
    Button,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    Grid
  } from '@material-ui/core';
import { withStyles } from "@material-ui/core/styles";
import CreateIcon from '@material-ui/icons/Create';
import { firestore } from '../../../firebase/db';
import { connect } from 'react-redux';

const style = {
  lenguageSelect: {
    minWidth: 200,
  },
  userLanguageModalBtn: {
    padding: '5px !important',
    minWidth: 0,
  },
};

const UserLanguagesModal = (props) => {
  const { classes, user, showItems, dispatch } = props;
  const [open, setOpen] = useState(false);
  const [language, setLanguage] = useState('');
  const [level, setLevel] = useState('');
  const id = require('uuid/v4');

  useEffect(() => {
    switch (language) {
      case 'Armenian': setLanguage('Armenian');
      break;
      case 'Russian': setLanguage('Russian');
      break;
      case 'English': setLanguage('English');
      break;
      default: ;
    };
  }, [language]);
  
  useEffect(() => {
    switch (level) {
      case 'Beginner': setLevel('Beginner');
      break;
      case 'Advanced': setLevel('Advanced');
      break;
      case 'Full proficiency': setLevel('Full proficiency');
      break;
      default: ;
    };
  }, [level]);

  const handleClickOpen = () => {
    setLanguage('');
    setLevel('');
    setOpen(true);
  };
  
  const handleSave = () => {
    if (language !== '' && level !== '') {
    const currentLanguage = {language, level, id: id()};
    firestore.collection("users").doc(props.id)
      .update({
        userLanguages: [...user.userLanguages, currentLanguage]
      }).catch(function(error) {
        console.error("Error updating document: ", error);
      });
      dispatch({type: "SIGN-IN", payload: {...user, userLanguages: [...user.userLanguages, currentLanguage]}});
    };
    setOpen(false);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      {showItems && <Button className={classes.userLanguageModalBtn} variant='outlined' color="primary" onClick={handleClickOpen}>
          <CreateIcon/>
        </Button>}
      <Dialog className={classes.formDialog} open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogContent>
          <DialogContentText>
            Choose the level for your language.
          </DialogContentText>
          <Grid container spacing={2}>
            <Grid item>
              <FormControl margin="normal" className={classes.lenguageSelect}>
                <InputLabel>Language</InputLabel>
                <Select value={language}
                  onChange={event => setLanguage(event.target.value)}>
                  <MenuItem value={'Armenian'}>Armenian</MenuItem>
                  <MenuItem value={'Russian'}>Russian</MenuItem>
                  <MenuItem value={'English'}>English</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item>
              <FormControl margin="normal" className={classes.lenguageSelect}>
                <InputLabel>Level</InputLabel>
                <Select value={level}
                  onChange={event => setLevel(event.target.value)}>
                  <MenuItem value={'Beginner'}>Beginner</MenuItem>
                  <MenuItem value={'Advanced'}>Advanced</MenuItem>
                  <MenuItem value={'Full proficiency'}>Full proficiency</MenuItem>
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
    </div>
  );
};

export default connect()(withStyles(style)(UserLanguagesModal));