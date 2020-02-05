import React, { useState } from 'react';
import {
    Grid,
    FormLabel,
    FormControl,
    FormGroup,
    FormControlLabel,
    Checkbox,
    Typography,
    makeStyles,
    withWidth
} from '@material-ui/core';
import PropTypes from 'prop-types';

import {
    Hidden,
    Button,

} from "@material-ui/core";

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
    },
    toggleButton: {
        backgroundColor: 'red',
        color: 'white',
    },
    filterName: {
        [theme.breakpoints.down('md')]: {
            fontSize: '14px',
          },
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

function CompanyFilterBar({ filterCompany, type, hideShow }) {
    const classes = useStyles();

    function handleCompChange(e) {
        return filterCompany(e);
    }

    return (
        <Grid className={classes.root}>
            <FormControl
                className={classes.formControl}
            >
                <FormLabel className={classes.formControl}>Filter By Category</FormLabel>
                <FormGroup>
                    {companyCategoryArr.map(item => {
                        let checked = false;
                        type.forEach(str => { if (str === item) { checked = true } })
                        return (
                            <FormControlLabel className={classes.formControlLabel}
                                key={item}
                                control={<Checkbox className={classes.size} checked={checked} />}
                                label={<Typography className = {classes.filterName}>{item}</Typography>}
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

function HiddenFilterBar({ filterCompany, type, width }) {
    const classes = useStyles();
    const [view, setView] = useState(true);

    function hideShow() {
        if (width === 'md') {
            setView(true)
        } else {
            setView(!view);
        }
    };

    const filterbar = <CompanyFilterBar filterCompany={filterCompany} type={type} hideShow ={hideShow}/>
    return (
        <>
            <Hidden mdUp={width === 'md' ? true : view}>
                <Button
                    className={classes.toggleButton}
                    onClick={hideShow}
                >
                    Filter Companies
                </Button>

            </Hidden>
            <Hidden smDown={view} >
                {filterbar}
            </Hidden>

        </>
    );
}
HiddenFilterBar.propTypes = {
    width: PropTypes.oneOf(["lg", "md", "sm", "xl", "xs"]).isRequired
};
export default withWidth()(HiddenFilterBar)

