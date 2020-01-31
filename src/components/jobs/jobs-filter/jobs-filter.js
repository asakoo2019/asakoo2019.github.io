import React, { useState } from 'react';
import { Checkbox, FormControlLabel, Grid, FormControl, FormLabel, FormGroup } from '@material-ui/core';

const jobCategories = [
  'Software development',
  'Quality Assurance/Control',
  'Web/Graphic design',
  'Product/Project Management',
  'Other IT',
  'Sales/service management',
  'Administrative/office-work',
  'Tourism/Hospitality/HoReCa',
  'Marketing/Advertising',
  'Communications/Journalism/PR',
  'Construction',
  'Business/Management',
  'Art/Design/Architecture',
  'Production',
  'Foreign language',
];

const JobsFilter = (props) => {
  const [categories, setCategories] = useState([]);
  props.setCategories(categories);

  const filterJob = (value) => {
    let category = [...categories];
    const index = categories.indexOf(value);
    if (index < 0) {
      category.push(value);
    } else {
      category = category.filter(item => item !== value);
    };
    setCategories([...category]);
    if (category.length){
      props.setAllJobs(false);
    } else {
      props.setAllJobs(true);
    };
    props.setCurrentPage(10);
  };

  const renderCategories = jobCategories.map(item => {
    return (
      <FormControlLabel key = {item}
        control ={<Checkbox color='primary'/>}
        label = {item}
        value = {item}
        onChange = {(e) => filterJob(e.target.value)} />
    );
  });

  return (
    <Grid container
      direction='column'
      item xs={3}>
      <FormControl>
        <FormLabel>
          Filter By Category
        </FormLabel>
        <FormGroup>
          {renderCategories}
        </FormGroup>
      </FormControl>
    </Grid>
  );
};

export default JobsFilter;