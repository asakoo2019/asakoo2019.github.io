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
    toggleButton: {
        backgroundColor: '#FE654F',
        color: '#fff',
    },
}));

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

    const filterbar = <CompanyFilterBar filterCompany={filterCompany} type={type} />
    return (
        <div className = {classes.root}>
            <Hidden mdUp={(width === 'md' || width === 'lg' || width === 'xl') ? true : view}>
                <Button
                    className={classes.toggleButton}
                    onClick={hideShow}
                >
                    Filter Companies
                </Button>
            </Hidden>
            <Hidden smDown={view}>
                {filterbar}
            </Hidden>
        </div>
    );
}
HiddenFilterBar.propTypes = {
    width: PropTypes.oneOf(["lg", "md", "sm", "xl", "xs"]).isRequired
};
export default withWidth()(HiddenFilterBar)

