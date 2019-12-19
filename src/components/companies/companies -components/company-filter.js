import React from 'react';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { Checkbox } from '@material-ui/core';

function CompanyFilter (){
    return (

        <FormControl>
            <FormLabel>Filter by activity type</FormLabel>
            <FormGroup>
                <FormControlLabel
                    control ={<Checkbox/>}
                    label = 'employer'
                />
                <FormControlLabel
                    control ={<Checkbox/>}
                    label = 'training provider'
                />
            </FormGroup>
            <FormLabel>Filter By Industry</FormLabel>
            <FormGroup>
                <FormControlLabel
                    control ={<Checkbox/>}
                    label = 'Finance/Banking/Insurance'
                />
                <FormControlLabel
                    control ={<Checkbox/>}
                    label = 'Information technologies'
                />
                <FormControlLabel
                    control ={<Checkbox/>}
                    label = 'Import/Export/Trade'
                />
                <FormControlLabel
                    control ={<Checkbox/>}
                    label = 'Marketing/Advertising/PR'
                />
                <FormControlLabel
                    control ={<Checkbox/>}
                    label = 'Tourism/Hospitality/Entertainment'
                />
                <FormControlLabel
                    control ={<Checkbox/>}
                    label = 'Medical/Pharmaceutical'
                />
                 <FormControlLabel
                    control ={<Checkbox/>}
                    label = 'TV/Radio/Media'
                />
                <FormControlLabel
                    control ={<Checkbox/>}
                    label = 'Telecommunications'
                />
                <FormControlLabel
                    control ={<Checkbox/>}
                    label = 'Services'
                />
                <FormControlLabel
                    control ={<Checkbox/>}
                    label = 'Government'
                />
                <FormControlLabel
                    control ={<Checkbox/>}
                    label = 'Agriculture/Winemaking'
                />
                <FormControlLabel
                    control ={<Checkbox/>}
                    label = 'Online Service'
                />
            </FormGroup>

        </FormControl>
    );
}
export default CompanyFilter;