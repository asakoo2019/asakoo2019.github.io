import React, { useState, useEffect } from 'react';
import { InputLabel, MenuItem, FormControl, Select } from '@material-ui/core';
import { withStyles } from "@material-ui/core/styles";

const style = {
  countrySelect: {
    minWidth: 90,
  },
};

const CountrySelect = (props) => {
  const { classes, company } = props;
  const [country, setCountry] = useState(company.companyCountry);

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
    props.setCompanyCountry(country);
  }, [country, props]);

  const handleChange = event => {
    setCountry(event.target.value);
  };

  return (
    <>
      <FormControl margin="normal" className={classes.countrySelect}>
        <InputLabel>Country</InputLabel>
        <Select value={country}
          onChange={handleChange}>
          <MenuItem value={'Armenia'}>Armenia</MenuItem>
          <MenuItem value={'Russia'}>Russia</MenuItem>
          <MenuItem value={'Georgia'}>Georgia</MenuItem>
        </Select>
      </FormControl>
    </>
  );
};

export default withStyles(style)(CountrySelect);