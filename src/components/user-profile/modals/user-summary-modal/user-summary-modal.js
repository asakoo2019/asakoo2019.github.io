import React, {useState, useEffect} from 'react';
import { DialogContent, DialogContentText, DialogActions, Dialog, TextareaAutosize, Button } from '@material-ui/core';
import { withStyles } from "@material-ui/core/styles";

const style = {
  textArea: {
    resize: 'none',
    width: '100%',
    outline: 'none',
    height: '200px !important',
  },
};

const UserSummaryModal = (props) => {
  const { classes, user } = props;
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);

  useEffect(() => {
    setValue(user.aboutUser);
  }, [user]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleSave = () => {
    props.setAboutUser(value);
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
            Add summary to highlight your experience.
          </DialogContentText>
          <TextareaAutosize
            className={classes.textArea}
            defaultValue={value}
            onChange={(e) => setValue(e.target.value)} />
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

export default withStyles(style)(UserSummaryModal);