import React, {useState, useEffect} from 'react';
import
  { DialogContent, DialogContentText, DialogActions, Dialog, Button, FormControl, InputLabel, Select, MenuItem }
from '@material-ui/core';
import { withStyles } from "@material-ui/core/styles";

const style = {
  
};

const UserLanguagesModal = (props) => {
  const { classes, user} = props;
  const [open, setOpen] = useState(false);

  const [language, setLanguage] = useState(user.userLanguages);

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
    // setValue(user.userLanguages.push(value));
  }, [language, user]);

  const handleChange = event => {
    setLanguage(event.target.value);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleSave = () => {
    props.setUserLanguages(language);
    setOpen(false);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>+</Button>
      <Dialog className={classes.formDialog} open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogContent>
          <DialogContentText>
            Choose the level for your languages.
          </DialogContentText>
          <FormControl margin="normal" className={classes.languageSelect}>
            <InputLabel>Language</InputLabel>
            <Select value={language}
              onChange={handleChange}>
              <MenuItem value={'Armenian'}>Armenian</MenuItem>
              <MenuItem value={'Russian'}>Russian</MenuItem>
              <MenuItem value={'English'}>English</MenuItem>
            </Select>
          </FormControl>
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

export default withStyles(style)(UserLanguagesModal);