import React from 'react';
import Grid from '@material-ui/core/Grid';
import './activ-jobs.css';

class ActiveJobs extends React.Component {
    render(){
        return(
            <Grid 
                className = 'activeJobsDiv'
            >
                <Grid className = 'activeJobsContainer'>
                    <div className = "activeJobs">

                    </div>
                </Grid>
            </Grid>
        );
    }
}
export default ActiveJobs;