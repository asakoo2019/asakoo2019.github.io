import React from 'react';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        padding: theme.spacing(2),
        backgroundColor: 'rgb(255, 255, 204)',
        // color: "blue",
    },
}));

function CompaniesBarTop({employer}) {
    const classes = useStyles();
    return (
        <Grid container
            alignItems="flex-start"
            className={classes.root}
        >
            <Grid>
                <span>1 - 10 company results from {employer.length} total companies on asakoo.am</span>
            </Grid>
            <Grid>
                somthing
            </Grid>
        </Grid>
    );
}
export default CompaniesBarTop;