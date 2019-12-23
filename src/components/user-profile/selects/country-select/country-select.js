import React, { useState } from 'react';
import { InputLabel, MenuItem, FormControl, Select } from '@material-ui/core';
import { withStyles } from "@material-ui/core/styles";

const style = {
  countrySelect: {
    minWidth: 120,
  },
};

const CountrySelect = (props) => {
  const { classes, user } = props;
  const [country, setCountry] = useState('');

  const handleChange = event => {
    setCountry(event.target.value);
  };

  return (
    <div>
      <FormControl className={classes.countrySelect}>
        <InputLabel>Country</InputLabel>
        <Select value={country}
          onChange={handleChange}>
          <MenuItem value={user.userCountry}>Armenia</MenuItem>
          <MenuItem value={user.userCountry}>Russia</MenuItem>
          <MenuItem value={user.userCountry}>Gorgia</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
};

export default withStyles(style)(CountrySelect);