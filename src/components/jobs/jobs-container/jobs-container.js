import React, { Component } from 'react';

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
            <div>
                { elements }
            </div>
        )
    }
}