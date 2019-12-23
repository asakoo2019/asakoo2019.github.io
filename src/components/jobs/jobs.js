import React, { Component } from 'react';
import JobsFilter from './jobs-filter';
import JobsContainer from './jobs-container';

const jobData = [
    {id: 'dsadsads', label: 'Marketolog', checked: false, viewCount: 9},
    {id: 'jvdsbodsjvsidhndouhsbiusdhn', label: 'Software developer', checked: false, viewCount: 5},
    {id: 'jhsfdjsf', label: 'Marketolog', checked: false, viewCount: 9},
    {id: 'dnskjngisdkjfnsdkj', label: 'Software developer', checked: false, viewCount: 5},
    {id: 'dshbfsidvndinfngf8n4g8fh2fdhdfh9', label: 'Engineer', checked: false, viewCount: 4},
    {id: 'jhsfjsf', label: 'Marketolog', checked: false, viewCount: 9},
    {id: 'duhvbsihvnsiv', label: 'Marketolog', checked: false, viewCount: 1},
];

export default class Jobs extends Component {

    constructor() {
        super();
        this.state = { 
            jobs: jobData,
        }
    }

    createJob = (label, id) => {
        return {
            label,
            id,
            checked: false,
        }
    }

    checkboxToggle = (id, checked, a) => {
        console.log('aaaaaaaaaa', a)
        const { jobs } = this.state;
        this.setState(state => {
            const idx = state.jobs.findIndex((item) => {
                return item.id === id
            })
            const before = jobs.slice(0, idx);
            const after = jobs.slice(idx + 1);
            const newItem = Object.assign(this.createJob(jobs[idx].label, jobs[idx].id), {checked: !checked, l: a})
            
            return {
                jobs: [
                    ...before,
                    newItem,
                    ...after,
                ]
            }
            
        })
    }
    render () {
        const { jobs } = this.state;
        const jobsChecked = jobs.filter(item => {
            return item.checked ? 'o_O' : 0
        })
        let checked = [];
        jobsChecked.forEach(item => {
            if (item.l) {
                checked.push(item.l)
            }
        })
        console.log(checked);
        const newJob = jobs.filter(item => {

           return checked.includes(item.label);
           
        })
        return (
            <div>
                <JobsFilter 
                    jobs = { jobs }
                    checkboxChange= { this.checkboxToggle } />
                <hr />
                <JobsContainer
                    jobs = { checked.length ? newJob : jobs } />
            </div>
        )
    }
}