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

const CompanyCategoriesModal = (props) => {
  const { classes, company } = props;
  const [open, setOpen] = useState(false);
  const [category, setCategory] = useState('');
  const id = require('uuid/v4');

  useEffect(() => {
    setCategory(company.aboutCompany);
  }, [company]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleSave = () => {
    if (category !== ''){
      props.setCompanyCategories([...company.companyCategories, {category: category, id: id()}]);
    };
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
            Add company category.
          </DialogContentText>
          <TextareaAutosize
            className={classes.textArea}
            defaultValue=''
            onChange={(e) => setCategory(e.target.value)} />
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

export default withStyles(style)(CompanyCategoriesModal);