import React, { useState } from 'react';
import { Checkbox, FormControlLabel, Grid, FormControl, FormLabel, FormGroup } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

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

const styles = {
  checkboxSize: {
    padding: '3px 0',
    color: '#FE654F',
  },
	jobsFilter: {
    padding: '15px 0 12px 15px',
		backgroundColor: 'rgb(255, 255, 255)',
  },
};

const JobsFilter = (props) => {
  const [categories, setCategories] = useState([]);
  const { classes } = props;
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
        control ={<Checkbox color='primary' className={classes.checkboxSize}/>}
        label = {item}
        value = {item}
        onChange = {(e) => filterJob(e.target.value)} />
    );
  });

  return (
    <FormControl>
      <Grid container
        className={classes.jobsFilter}
        direction='column'>
          <FormLabel>
            Filter By Category
          </FormLabel>
          <FormGroup>
            {renderCategories}
          </FormGroup>
      </Grid>
    </FormControl>
  );
};

export default withStyles(styles)(JobsFilter);