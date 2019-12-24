import React, { Component } from 'react';
import { Checkbox, FormControlLabel, Grid } from '@material-ui/core';

export default class JobsFilter extends Component {

    checkboxChange = (id, checked, index) => {
        this.props.checkboxChange(id, checked, index);
    }
    render() {
        const { jobs } = this.props;
        const uniqueArr = jobs.map(item => {
            return item.label
        })
        .filter((job, i, arr) => {
            return arr.indexOf(job) === i
        })

        const elements = jobs.map((item, i) => {
            const { id, checked } = item;
            
            return uniqueArr[i] ? (
                <FormControlLabel key={id} 
                    control= {<Checkbox
                        checked={checked}
                        onChange = {() => this.checkboxChange(id, checked, uniqueArr[i])}
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