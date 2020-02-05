import React from 'react';
import {
    Grid,
    FormLabel,
    FormControl,
    FormGroup,
    FormControlLabel,
    Checkbox,
    Typography,
    makeStyles
} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root: {
        marginTop: theme.spacing(1),
        // backgroundColor: 'rgb(255, 255, 204)',
    },
    formControl: {
        padding: theme.spacing(1),

    },
    size: {
        width: '8px',
        height: '8px',
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
        <Grid container className={classes.root}>
            <FormControl
                className={classes.formControl}
            >
                <FormLabel className={classes.formControl}>Filter By Category</FormLabel>
                <FormGroup>
                    {companyCategoryArr.map(item => {
                        return (
                            <FormControlLabel className={classes.formControlLabel}
                                key={item}
                                control={<Checkbox className={classes.size} />}
                                label={<Typography>{item}</Typography>}
                                value={item}
                                onChange={(e) => handleCompChange(e.target.value)}
                            />
                        );
                    })}
                </FormGroup>
            </FormControl>
        </Grid>
    );
}
export default CompanyFilterBar;