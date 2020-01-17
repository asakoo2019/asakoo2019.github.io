import React, { Component } from 'react';
import { Checkbox, FormControlLabel, Grid } from '@material-ui/core';

export default class JobsFilter extends Component {

    checkboxChange = (uniqueJob, item) => {
        
        this.props.checkboxChange(uniqueJob, item);
    }
    render() {
        const { jobs } = this.props;

        const uniqueArr = jobs.map(item => item.jobCategory)
        .filter((job, i, arr) => arr.indexOf(job) === i);

        const elements = jobs.map((item, i) => {
            const { id, checked } = item;
           
            return uniqueArr[i] ? (
                <FormControlLabel key={id} 
                    control= {<Checkbox
                        checked={checked}
                        onChange = {() => this.checkboxChange(uniqueArr[i], item)}
                        value={uniqueArr[i]} />}
                    label={uniqueArr[i]} />
            ): null;
        })
        return (
            <Grid container
                direction='column'
                item xs={3}>
                { elements }
            </Grid>
        )
    }
}