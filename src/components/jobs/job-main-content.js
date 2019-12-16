import React from 'react';
import Grid from '@material-ui/core/Grid';
import './jobs.css';
import SepatateJob from './separate-job';

class JobMainContent extends React.Component {

    render() {

        return (
            <Grid item xs={9} className='job-main-content'>
                <div className='job-list-item'>
                    <SepatateJob jobs ={this.props.jobs} />
                </div>
            </Grid>
        )
    }    
}

export default JobMainContent;