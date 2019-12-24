import React, { useState, useEffect } from 'react';
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
    props.setUserCity(city);
  }, [city, props]);

  const handleChange = event => {
    setCity(event.target.value);
  };

  return (
    <div>
      <FormControl className={classes.citySelect}>
        <InputLabel>City</InputLabel>
        <Select value={user.userCity}
          onChange={handleChange}>
          <MenuItem value={'yerevan'}>Yerevan</MenuItem>
          <MenuItem value={'gyumri'}>Gyumri</MenuItem>
          <MenuItem value={'vanadzor'}>Vanadzor</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
};

export default withStyles(style)(CitySelect);