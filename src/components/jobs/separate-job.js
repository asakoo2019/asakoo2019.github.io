import React from 'react';
import Grid from '@material-ui/core/Grid';
import './jobs.css';



function SepatateJob({jobs}) {
    
    let elements = jobs.map((item) => {
        return (
            <Grid   container
                    justify="flex-start"
                    alignItems="center"
                    className = 'separate-job'
                    key={item.id}>
                <Grid  item xs={2}>
                    <img src={item.imageURL} alt='Company logo' />
                </Grid>
                <Grid item xs={10}>
                    <p> { item.about } </p>
                </Grid>
            </Grid>
        )
    })
    
    return (
        <div>
            { elements }
        </div>
    )
}

export default SepatateJob;