import React, { useState } from 'react';
import { InputLabel, MenuItem, FormControl, Select } from '@material-ui/core';
import { withStyles } from "@material-ui/core/styles";

const style = {
  citySelect: {
    minWidth: 120,
  },
};

const CitySelect = (props) => {
  const { classes, user } = props;
  const [city, setCity] = useState('');

  const handleChange = event => {
    setCity(event.target.value);
  };

  return (
    <div>
      <FormControl className={classes.citySelect}>
        <InputLabel>City</InputLabel>
        <Select value={city}
          onChange={handleChange}>
          <MenuItem value={user.userCity}>Yerevan</MenuItem>
          <MenuItem value={user.userCity}>Gyumri</MenuItem>
          <MenuItem value={user.userCity}>Vanadzor</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
};

export default withStyles(style)(CitySelect);