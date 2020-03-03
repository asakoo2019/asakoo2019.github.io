import React, { useState, useEffect } from 'react';
import { InputLabel, MenuItem, FormControl, Select } from '@material-ui/core';
import { withStyles } from "@material-ui/core/styles";

const style = {
  genderSelect: {
    minWidth: 90,
  },
};

const GenderSelect = (props) => {
  const { classes, user } = props;
  const [gender, setGender] = useState(user.userGender);

  useEffect(() => {
    switch (gender) {
      case 'Male': setGender('Male');
      break;
      case 'Female': setGender('Female');
      break;
      default: ;
    };
    props.setUserGender(gender);
  }, [gender, props]);

  const handleChange = event => {
    setGender(event.target.value);
  };

  return (
    <>
      <FormControl margin="normal" className={classes.genderSelect}>
        <InputLabel>Gender</InputLabel>
        <Select value={gender}
          onChange={handleChange}>
          <MenuItem value={'Male'}>Male</MenuItem>
          <MenuItem value={'Female'}>Female</MenuItem>
        </Select>
      </FormControl>
    </>
  );
};

export default withStyles(style)(GenderSelect);