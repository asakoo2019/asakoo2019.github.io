import React, {useState, useEffect} from 'react';
import { DialogContent, DialogContentText, DialogActions, Dialog, TextareaAutosize, Button } from '@material-ui/core';
import { withStyles } from "@material-ui/core/styles";
import CreateIcon from '@material-ui/icons/Create';
import { connect } from 'react-redux';
import { firestore } from '../../firebase/db';

const style = {
  textArea: {
    resize: 'none',
    width: '100%',
    outline: 'none',
    height: '200px !important',
  },
};

const CompanySummaryModal = (props) => {
  const { classes, company, id, dispatch } = props;
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);

  useEffect(() => {
    setValue(company.aboutCompany);
  }, [company]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleSave = () => {
    if (value !== null) {
      firestore.collection("companies").doc(id)
      .update({
        aboutCompany: value
      }).then(function() {
      }).catch(function(error) {
        console.error("Error updating document: ", error);
      });
    };
    dispatch({type: "SIGN-IN", payload: {...company, aboutCompany: value}});
    setOpen(false);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        <CreateIcon/>
      </Button>
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

export default connect()(withStyles(style)(CompanySummaryModal));