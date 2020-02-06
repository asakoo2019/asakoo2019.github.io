import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,      
    },
    toptext: {
        margin: theme.spacing(0, 1),
        padding: theme.spacing(1, 3),
        backgroundColor: 'rgb(255, 255, 255)',
    },
    total: {
        fontSize: 18,
        color: '#FE654F',
    }
}));

function CompaniesBarTop({length, currPage}) {
    const classes = useStyles();
    return (
        <Grid container
            alignItems="flex-start"
            className={classes.root}
        >
            <Grid className = {classes.toptext}>
                <Typography>{currPage - 10 + 1}-{currPage > length? length: currPage} company results from <span className = {classes.total}>{length}</span> total companies on asakoo.am</Typography>
            </Grid>
            {/* <Grid>
                somthing
            </Grid> */}
        </Grid>
    );
}
export default CompaniesBarTop; 