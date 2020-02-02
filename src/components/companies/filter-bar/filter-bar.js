import React from 'react';
import { Grid, FormLabel, FormControl, FormGroup, FormControlLabel, Checkbox } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        backgroundColor: 'rgb(255, 255, 204)',
    },
    formControl: {
        padding: theme.spacing(2),
        color: 'red',
    },
    formControlLabel:{
        color: 'blue',
        
    }
}));

const companyCategoryArr = [
    'Finance/Banking/Insurance',
    'Quality Assurance/Control',
    'Design/Architecture/Construction',
    'Consulting/ Legal',
    'Import/Export/Trade',
    'Marketing/Advertising/PR',
    'Tourism/Hospitality/Entertainment',
    'Medical/Pharmaceutical',
    'Sports /Beauty',
    'Education',
    'Retail business',
    'NGO/International organization',
    'Services',
    'Mining/Manufacturing/Production',
    'Online Service',
];

function CompanyFilterBar({ filterCompany }) {
    const classes = useStyles();

    function handleCompChange(e) {
        return filterCompany(e);
    }

    return (
        <div className={classes.root}>
            <FormControl
                className={classes.formControl}
            >
                <FormLabel className={classes.formControl}>Filter By Category</FormLabel>
                <FormGroup>
                    {companyCategoryArr.map(item => {
                        return (
                            <FormControlLabel className={classes.formControlLabel} 
                                key={item}
                                control={<Checkbox />}
                                label={item}
                                value={item}
                                onChange={(e) => handleCompChange(e.target.value)}
                            />
                        );
                    })}
                </FormGroup>
            </FormControl>
        </div>

    );
}
export default CompanyFilterBar;