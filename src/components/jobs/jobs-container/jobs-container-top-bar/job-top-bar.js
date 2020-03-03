import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    root: {
        marginBottom: 24,
    },
    toptext: {
        padding: theme.spacing(1, 3),
        backgroundColor: 'rgb(255, 255, 255)',
    },
    total: {
        fontSize: 18,
        color: '#FE654F',
    }
}));

function JobsBarTop({ length, currentPage }) {
    const classes = useStyles();
    
    return (
        <Grid container
            alignItems="flex-start"
            className={classes.root}
        >
            <Grid className={classes.toptext}>
                <Typography>{currentPage - 10 + 1}-{currentPage > length ? length : currentPage} company results from <span className={classes.total}>{length}</span> total companies on TopTeam.am</Typography>
            </Grid>
        </Grid>
    );
}
export default JobsBarTop; 