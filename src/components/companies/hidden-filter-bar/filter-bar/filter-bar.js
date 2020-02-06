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
        flexGrow: 1,
        marginTop: theme.spacing(1),
        backgroundColor: 'rgb(255, 255, 255)',
    },
    formControl: {
        [theme.breakpoints.up('md')]: {
            margin: theme.spacing(3),
        },
        [theme.breakpoints.down('md')]: {
            marginLeft: theme.spacing(3),
        },

    },
    size: {
        padding: '3px 0',
        color: '#FE654F',
    },
    // filterName: {
    //     [theme.breakpoints.down('md')]: {
    //         fontSize: '14px',
    //     },
    // }
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

function CompanyFilterBar({ filterCompany, type }) {
    const classes = useStyles();

    function handleCompChange(e) {
        return filterCompany(e);
    }

    return (
        <Grid item className={classes.root} zeroMinWidth>
            <FormControl className={classes.formControl}>
                <FormLabel>Filter By Category</FormLabel>
                <FormGroup >
                    {companyCategoryArr.map(item => {
                        let checked = false;
                        type.forEach(str => { if (str === item) { checked = true } })
                        return (
                            <FormControlLabel className={classes.formControlLabel}
                                key={item}
                                control={<Checkbox className={classes.size} checked={checked} />}
                                label={<Typography className={classes.filterName}>{item}</Typography>}
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