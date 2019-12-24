import React, { useState, useEffect } from 'react';
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

  useEffect(() => {
    switch (country) {
      case 'Armenia': setCountry('Armenia');
      break;
      case 'Russia': setCountry('Russia');
      break;
      case 'Georgia': setCountry('Georgia');
      break;
      default: ;
    };
    props.setUserCountry(country);
  }, [country, props]);

  const handleChange = event => {
    setCountry(event.target.value);
  };

  return (
    <div>
      <FormControl className={classes.countrySelect}>
        <InputLabel>Country</InputLabel>
        <Select value={user.userCountry}
          onChange={handleChange}>
          <MenuItem value={'armenia'}>Armenia</MenuItem>
          <MenuItem value={'russia'}>Russia</MenuItem>
          <MenuItem value={'georgia'}>Georgia</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
};

export default withStyles(style)(CountrySelect);