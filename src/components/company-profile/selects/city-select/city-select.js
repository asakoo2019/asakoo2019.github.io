import React, { useState, useEffect } from 'react';
import { InputLabel, MenuItem, FormControl, Select } from '@material-ui/core';
import { withStyles } from "@material-ui/core/styles";

const style = {
  citySelect: {
    minWidth: 90,
  },
};

const CitySelect = (props) => {
  const { classes, company } = props;
  const [city, setCity] = useState(company.companyCity);
  
  useEffect(() => {
    switch (city) {
      case 'Yerevan': setCity('Yerevan');
      break;
      case 'Gyumri': setCity('Gyumri');
      break;
      case 'Vanadzor': setCity('Vanadzor');
      break;
      default: ;
    };
    props.setCompanyCity(city);
  }, [city, props]);

  const handleChange = event => {
    setCity(event.target.value);
  };

  return (
    <>
      <FormControl margin="normal" className={classes.citySelect}>
        <InputLabel>City</InputLabel>
        <Select value={city}
          onChange={handleChange}>
          <MenuItem value={'Yerevan'}>Yerevan</MenuItem>
          <MenuItem value={'Gyumri'}>Gyumri</MenuItem>
          <MenuItem value={'Vanadzor'}>Vanadzor</MenuItem>
        </Select>
      </FormControl>
    </>
  );
};

export default withStyles(style)(CitySelect);