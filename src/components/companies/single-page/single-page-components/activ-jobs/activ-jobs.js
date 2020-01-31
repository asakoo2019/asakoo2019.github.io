import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
      textAlign: 'center',
      width: '100%',
    },

}));
export default function ActiveJobs ({companyInfo}) {
    const classes = useStyles();
    const jobs = companyInfo.companyJobs.map(item=>{
        return (
            <Grid
             key = {item.id}
            >
                <div>{item.jobCategory}</div>
                <div>here must be job datails</div>
                <div><Button>View More</Button></div>
            </Grid>
        );
    })
    return(
        <Grid
            className = {classes.root}
        >
            <h1>ACTIVE JOBS {companyInfo.companyJobs.length}</h1>
                <Grid
                    container
                    direction="row"
                    justify="space-evenly"
                    alignItems="center"
                >
                    {jobs}
                </Grid>  
        </Grid>
    );
}
