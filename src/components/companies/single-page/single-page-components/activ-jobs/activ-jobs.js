import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
      textAlign: 'center',
    },

}));
export default function ActiveJobs ({companyInfo}) {
    const classes = useStyles();
    //const comp = companyInfo.companyJobs;
    
    const jobs = (item) =>{
        let drawJobs = null;
        if (item) {
            for (let i = 1; i <= item.length; i++){
                    drawJobs = (<div> {i} </div>)
                }
        }
        return drawJobs
    };
    return(
        <Grid
            className = {classes.root}
        >
            <h1>ACTIVE JOBS ({companyInfo.companyJobs ? companyInfo.companyJobs.length : ''})</h1>
                <Grid
                    container
                    direction="row"
                    justify="space-evenly"
                    alignItems="center" 
                >
                    {jobs(companyInfo.companyJobs)}
                </Grid>  
        </Grid>
    );
}
