import React, { Component } from 'react';
import { Grid, Button } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom';

const styles = {
    jobBlock: {
        marginBottom: 10,
        padding: '10px 0',
        borderBottom: '1px solid',
    },
};

const JobsContainer = (props) => {

    const history = useHistory();

    const viewMore = (id) => {
        history.push(`/jobs/${id}`);
    };
        
    const { jobs, classes } = props;
    const job1 = [...jobs];
    
    const elements = job1.sort((a, b) => b.viewCount - a.viewCount).map(item => {
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
                <Button onClick={ () => viewMore(id)}>
                    View More
                </Button>
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

export default withStyles(styles)(JobsContainer);