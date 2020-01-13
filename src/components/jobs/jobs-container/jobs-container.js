import React, { Component } from 'react';
import { Grid } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const styles = {
    jobBlock: {
        marginBottom: 10,
        padding: '10px 0',
        borderBottom: '1px solid',
    },
};

class JobsContainer extends Component {
    
    render() {
        
        const { jobs, classes } = this.props;
        const job1 = [...jobs];
        console.log(job1);
        
        const elements = job1.sort((a, b) => a.viewCount - b.viewCount).map(item => {
            const { jobCategory, id, jobImage, aboutJob,viewCount } = item;
            return (
                <Grid 
                    className={ classes.jobBlock}
                    key={ id }
                    container
                    justify='space-between'>
                    <Grid item xs>
                        <img src={ jobImage } width='64' height='64' alt={ jobCategory } />
                    </Grid>
                    <Grid item xs>
                        <p>{ jobCategory }</p>
                    </Grid>
                    <Grid item xs>
                        <p>{ aboutJob }</p>
                    </Grid>
                    <Grid container justify= 'flex-end' item xs>
                        <p>{viewCount}</p>
                    </Grid>
                </Grid>
            )
        })
        
        return (
            <Grid container
                
                item xs = {8}>
                { elements }
            </Grid>
        )
    }
}

export default withStyles(styles)(JobsContainer)