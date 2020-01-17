import React from 'react';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { Checkbox } from '@material-ui/core';

function CompanyFilter (props){  
    const filerBar = props.filterBarArr.map((item, index) => {
        return (
        <FormControlLabel
            key  = {` a +${index}`}
            control = {<Checkbox  onChange = {props.fiterChecked} value = {item}/>}
            label = {item}
        />);
    })
    return (
        <FormControl>
            {/* <FormLabel>Filter by activity type</FormLabel>
            {/* <FormGroup>
                <FormControlLabel
                    control ={<Checkbox  value='checkedC'/>}
                    label = 'employer'
                />
                <FormControlLabel
                    control ={<Checkbox/>}
                    label = 'training provider'
                />
            </FormGroup> */} 
            <FormLabel>Filter By Industry</FormLabel>
            <FormGroup>
                {filerBar}
            </FormGroup>

        </FormControl>
    );
}
export default CompanyFilter;