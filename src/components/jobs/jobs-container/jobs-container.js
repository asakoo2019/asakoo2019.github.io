import React, { Component } from 'react';
import { Grid } from '@material-ui/core';

export default class  RightSide extends Component {

    render() {
        const { jobs } = this.props;
        
        const elements = jobs.map(item => {
            const { label, id } = item;
            return (
                <div key={ id }>
                    <span>{ label }</span>
                </div>
            )
        })

        return (
            <Grid container
                direction='column'
                item xs={8}>
                { elements }
            </Grid>
        )
    }
}