import React from 'react';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { Checkbox } from '@material-ui/core';
//import { useState, useEffect } from 'react';

function CompanyFilter (props){
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
                <FormControlLabel
                    control ={<Checkbox checked={props.state.checkedA} onChange={props.fiterChecked} value = 'checkedA'/>}
                    label = 'Finance/Banking/Insurance'

                />
                <FormControlLabel
                    control ={<Checkbox checked={props.state.checkedB} onChange={props.fiterChecked} value = 'checkedB'/>}
                    label = 'Information technologies'
                />
                <FormControlLabel
                    control ={<Checkbox checked={props.state.checkedC} onChange={props.fiterChecked} value = 'checkedC'/>}
                    label = 'Import/Export/Trade'
                />
                <FormControlLabel
                    control ={<Checkbox checked={props.state.checkedD} onChange={props.fiterChecked} value = 'checkedD'/>}
                    label = 'Marketing/Advertising/PR'
                />
                <FormControlLabel
                    control ={<Checkbox checked={props.state.checkedE} onChange={props.fiterChecked} value = 'checkedE'/>}
                    label = 'Tourism/Hospitality/Entertainment'
                />
                <FormControlLabel
                    control ={<Checkbox checked={props.state.checkedF} onChange={props.fiterChecked} value = 'checkedF'/>}
                    label = 'Medical/Pharmaceutical'
                />
                 <FormControlLabel
                    control ={<Checkbox checked={props.state.checkedG} onChange={props.fiterChecked} value = 'checkedG'/>}
                    label = 'TV/Radio/Media'
                />
                <FormControlLabel
                    control ={<Checkbox checked={props.state.checkedH} onChange={props.fiterChecked} value = 'checkedH'/>}
                    label = 'Telecommunications'
                />
                <FormControlLabel
                    control ={<Checkbox checked={props.state.checkedI} onChange={props.fiterChecked} value = 'checkedI'/>}
                    label = 'Services'
                />
                <FormControlLabel
                    control ={<Checkbox checked={props.state.checkedJ} onChange={props.fiterChecked} value = 'checkedJ'/>}
                    label = 'Government'
                />
                <FormControlLabel
                    control ={<Checkbox checked = {props.state.checkedK} onChange = {props.fiterChecked} value = 'checkedK'/>}
                    label = 'Agriculture/Winemaking'
                />
                <FormControlLabel
                    control ={<Checkbox checked={props.state.checkedL} onChange={props.fiterChecked} value = 'checkedL'/>}
                    label = 'Online Service'
                />
            </FormGroup>

        </FormControl>
    );
}
export default CompanyFilter;