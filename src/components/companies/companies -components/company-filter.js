import React, {useState, useEffect} from 'react';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { Checkbox } from '@material-ui/core';
//import { useState, useEffect } from 'react';

function CompanyFilter (){
    const obj = {
        ['Finance/Banking/Insurance']: false,
        ['Information technologies']:false,
        ['Import/Export/Trade']: false,
        ['Import/Export/Trade']: false,
        ['Marketing/Advertising/PR']: false,
        ['Tourism/Hospitality/Entertainment']: false,
    }
    const [state, setState] = useState(obj);
    
    const handleChange =  event => {
        
      };
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
                    control ={<Checkbox value = 'Finance/Banking/Insurance'/>}
                    label = 'Finance/Banking/Insurance'
                />
                <FormControlLabel
                    control ={<Checkbox value = 'Information technologies'/>}
                    label = 'Information technologies'
                />
                <FormControlLabel
                    control ={<Checkbox value = 'Import/Export/Trade'/>}
                    label = 'Import/Export/Trade'
                />
                <FormControlLabel
                    control ={<Checkbox value = 'Marketing/Advertising/PR'/>}
                    label = 'Marketing/Advertising/PR'
                />
                <FormControlLabel
                    control ={<Checkbox value = 'Tourism/Hospitality/Entertainment'/>}
                    label = 'Tourism/Hospitality/Entertainment'
                />
                <FormControlLabel
                    control ={<Checkbox value = 'Medical/Pharmaceutical'/>}
                    label = 'Medical/Pharmaceutical'
                />
                 <FormControlLabel
                    control ={<Checkbox value = 'TV/Radio/Media'/>}
                    label = 'TV/Radio/Media'
                />
                <FormControlLabel
                    control ={<Checkbox value = 'Telecommunications'/>}
                    label = 'Telecommunications'
                />
                <FormControlLabel
                    control ={<Checkbox value = 'Services'/>}
                    label = 'Services'
                />
                <FormControlLabel
                    control ={<Checkbox value = 'Government'/>}
                    label = 'Government'
                />
                <FormControlLabel
                    control ={<Checkbox value = 'Agriculture/Winemakin'/>}
                    label = 'Agriculture/Winemaking'
                />
                <FormControlLabel
                    control ={<Checkbox value = 'Online Service'/>}
                    label = 'Online Service'
                />
            </FormGroup>

        </FormControl>
    );
}
export default CompanyFilter;