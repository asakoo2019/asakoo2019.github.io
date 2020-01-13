import React, { Component } from 'react';
import JobsFilter from './jobs-filter';
import JobsContainer from './jobs-container';
import { Container, Grid } from '@material-ui/core';
import jobImage from './image.jpg';

const jobData = [
    {id: 'dsadsads', jobCategory: 'Marketolog', checked: false, viewCount: 9, jobImage: jobImage, aboutJob: 'lav gorca',},
    {id: 'jvdouhsbiusdhn', jobCategory: 'Software developer', checked: false, viewCount: 5, jobImage: jobImage, aboutJob: 'lav gorca',},
    {id: 'jhsfdjsf', jobCategory: 'Marketolog', checked: false, viewCount: 19, jobImage: jobImage, aboutJob: 'lav gorca',},
    {id: 'sdasdasdwdasad', jobCategory: 'Marketolog eng', checked: false, viewCount: 14, jobImage: jobImage, aboutJob: 'lav gorca',},
    {id: 'dnskjngisdkjfnsdkj', jobCategory: 'Software developer', checked: false, viewCount: 5, jobImage: jobImage, aboutJob: 'lav gorca',},
    {id: 'dfsidvn8fh2fdhdfh9', jobCategory: 'Engineer', checked: false, viewCount: 10, jobImage: jobImage, aboutJob: 'lav gorca',},
    {id: 'dshbfsidvndin8fh2fdhdfh9', jobCategory: 'Engineer', checked: false, viewCount: 2, jobImage: jobImage, aboutJob: 'lav gorca',},
    {id: 'dshbfsidvndinfn54dfh9', jobCategory: 'Engineer', checked: false, viewCount: 15, jobImage: jobImage, aboutJob: 'lav gorca',},
    {id: 'dshbfvndin4g8fh2fdhdfh9', jobCategory: 'Engineer', checked: false, viewCount: 19, jobImage: jobImage, aboutJob: 'lav gorca',},
    {id: 'dshbfsidvsfsw8fh2fdhdfh9', jobCategory: 'Engineer', checked: false, viewCount: 1, jobImage: jobImage, aboutJob: 'lav gorca',},
    {id: 'dbnfngfssqesafh2fdhdfh9', jobCategory: 'Engineer', checked: false, viewCount: 0, jobImage: jobImage, aboutJob: 'lav gorca',},
    {id: 'dshifngf8n4g8f2wwdfdhdfh9', jobCategory: 'Engineer', checked: false, viewCount: 7, jobImage: jobImage, aboutJob: 'lav gorca',},
    {id: 'dsn4gsds8fh2fdhdfh9', jobCategory: 'Engineer', checked: false, viewCount: 120, jobImage: jobImage, aboutJob: 'lav gorca',},
    {id: 'dshbdhdfh9', jobCategory: 'Engineer', checked: false, viewCount: 10, jobImage: jobImage, aboutJob: 'lav gorca',},
    {id: 'jhsfjsf', jobCategory: 'Marketolog', checked: false, viewCount: 9, jobImage: jobImage, aboutJob: 'lav gorca',},
    {id: 'duhvbsihvnsiv', jobCategory: 'Marketolog', checked: false, viewCount: 1, jobImage: jobImage, aboutJob: 'lav gorca',},
];

export default class Jobs extends Component {

    constructor() {
        super();
        this.state = { 
            jobs: jobData,
        }
    }

    createJob = (jobCategory, id) => {
        return {
            jobCategory,
            id,
            checked: false,
        }
    }

    checkboxToggle = (jobName, item) => {

        const { id, checked, ...rest  } = item;
        const { jobs } = this.state;
        
        this.setState(state => {

            const idx = state.jobs.findIndex((item) => {
                return item.id === id
            })
            const before = jobs.slice(0, idx);
            const after = jobs.slice(idx + 1);
            const newItem = Object.assign(this.createJob(jobs[idx].jobCategory, jobs[idx].id), {
                checked: !checked,
                l: jobName,
                ...rest})
            
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
        const jobsChecked = jobs.filter(item => item.checked)
        const checked = [];

        jobsChecked.forEach(item => {

            if (item.l) checked.push(item.l)
        })

        const newJob = jobs.filter(item => checked.includes(item.jobCategory))

        return (
            <Container>
                <Grid container
                    justify='space-between'>
                    <JobsFilter 
                        jobs = { jobs }
                        checkboxChange= { this.checkboxToggle } />
                    <JobsContainer
                        jobs = { checked.length ? newJob : jobs } />
                </Grid>
            </Container>
        )
    }
}