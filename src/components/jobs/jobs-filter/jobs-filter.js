import React, { Component } from 'react';

export default class JobsFilter extends Component {

    checkboxChange = (id, checked, asd) => {
        this.props.checkboxChange(id, checked, asd);
    }
    render() {
        const { jobs } = this.props;
        const uniqueArr = jobs.map(item => {
            return item.label
        })
        .filter((job, i, arr) => {
            return arr.indexOf(job) === i
        })

        const elements = jobs.map((item, i) => {
            const { id, checked } = item;
            
            return uniqueArr[i] ? (
                <div key={id}>
                    <input 
                        type='checkbox'
                        checked={checked}
                        onChange = {() => this.checkboxChange(id, checked, uniqueArr[i])}
                        value={uniqueArr[i]} />
                    <span>{ uniqueArr[i] }</span>
                </div>
            ): null;
        })
        return (
            <div>
                { elements }
            </div>
        )
    }
}