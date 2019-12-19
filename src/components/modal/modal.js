import React from 'react';
<<<<<<< HEAD
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
=======
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
>>>>>>> aed63696f3bd2a220bd01da63ca67bfed503c205
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
=======
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>+</Button>
      <Dialog className={classes.formDialog} open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
>>>>>>> aed63696f3bd2a220bd01da63ca67bfed503c205
        <DialogContent>
          <DialogContentText>
            Add summary to highlight your experience.
          </DialogContentText>
<<<<<<< HEAD
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Email Address"
            type="email"
            fullWidth
          />
>>>>>>> 201601a32ab2f30ca7b5fdd4967a53985c9781d3
=======
          <TextareaAutosize className={classes.textArea}
            autoFocus/>
>>>>>>> aed63696f3bd2a220bd01da63ca67bfed503c205
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleClose} color="primary">
<<<<<<< HEAD
<<<<<<< HEAD
            Save
=======
            Subscribe
>>>>>>> 201601a32ab2f30ca7b5fdd4967a53985c9781d3
=======
            Save
>>>>>>> aed63696f3bd2a220bd01da63ca67bfed503c205
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
<<<<<<< HEAD
<<<<<<< HEAD
}

export default withStyles(style)(FormDialog);
=======
}
>>>>>>> 201601a32ab2f30ca7b5fdd4967a53985c9781d3
=======
}

export default withStyles(style)(FormDialog);
>>>>>>> aed63696f3bd2a220bd01da63ca67bfed503c205
