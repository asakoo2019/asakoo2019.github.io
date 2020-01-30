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
    'Foreign language'
];

const JobsFilter = (props) => {
    const [type, setType] = useState ([]);

    const filterJob = (value) => {
        let arr = [...type];
        const x = type.indexOf(value);
        if (x < 0){
          arr.push(value);
        } else {
          arr = arr.filter(item => item!== value)
        }
        setType([...arr]);
        if (arr.length){
          props.setAllJobs(false);
        } else {
          props.setAllJobs(true);
        }
        props.setCurrentPage(10);
    };

    const categories = jobCategories.map(item => {
        return (
          <FormControlLabel
            key = {item}
            control ={<Checkbox/>}
            label = {item}
            value = {item}
            onChange = {(e) => filterJob(e.target.value) }
          />
        );
      })    

    return (
        <Grid container
            direction='column'
            item xs={3}>
            <FormControl>
                <FormLabel>Filter By Category</FormLabel>
                <FormGroup>
                    {categories}
                </FormGroup>
            </FormControl>
        </Grid>
    )
}

export default JobsFilter;