import React from 'react';
<<<<<<< HEAD
import { DialogContent, DialogContentText, DialogActions, Dialog, TextareaAutosize, Button } from '@material-ui/core';
import { withStyles } from "@material-ui/core/styles";

const style = {
  textArea: {
    resize: 'none',
    width: '100%',
    outline: 'none'
  }
};

function FormDialog(props) {
  const { classes } = props;
=======
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

export default function FormDialog() {
>>>>>>> 201601a32ab2f30ca7b5fdd4967a53985c9781d3
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
<<<<<<< HEAD
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>+</Button>
      <Dialog className={classes.formDialog} open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogContent>
          <DialogContentText>
            Add summary to highlight your experience.
          </DialogContentText>
          <TextareaAutosize className={classes.textArea}
            autoFocus/>
=======
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Open form dialog
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To subscribe to this website, please enter your email address here. We will send updates
            occasionally.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Email Address"
            type="email"
            fullWidth
          />
>>>>>>> 201601a32ab2f30ca7b5fdd4967a53985c9781d3
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleClose} color="primary">
<<<<<<< HEAD
            Save
=======
            Subscribe
>>>>>>> 201601a32ab2f30ca7b5fdd4967a53985c9781d3
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
<<<<<<< HEAD
}

export default withStyles(style)(FormDialog);
=======
}
>>>>>>> 201601a32ab2f30ca7b5fdd4967a53985c9781d3
