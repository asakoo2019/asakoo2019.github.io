import React, { useState } from 'react';
import CompanyFilterBar from './filter-bar'
import {
    Hidden,
    Button,
    makeStyles,
    withWidth
} from '@material-ui/core';
import PropTypes from 'prop-types';

const useStyles = makeStyles(theme => ({
    root: {
        marginTop: theme.spacing(1),
    },
    toggleButton: {
        backgroundColor: 'red',
        color: 'white',
    },
}));

function HiddenFilterBar({ filterCompany, type, width }) {
    const classes = useStyles();
    const [view, setView] = useState(true);

    function hideShow() {
        if (width === 'md' || width === 'lg') {
            setView(true)
        } else {
            setView(!view);
        }
    };

    const filterbar = <CompanyFilterBar filterCompany={filterCompany} type={type} hideShow={hideShow} />
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

