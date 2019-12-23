<<<<<<< HEAD
import React from 'react';
import './jobs.css';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import betimage from './betconstruct.jpg';

import JobsSearch from './jobs-search';
import JobMainContent from './job-main-content';

const jobs = [
  {
      imageURL: betimage,
      about: 'Lorem text about company',
      jobCategory:'Software development',
      id: 1,
  },
  {
      imageURL: betimage,
      about: 'Lorem text about company 1',
      jobCategory: 'Software development',
      id: 2,
  },
  {
      imageURL: betimage,
      about: 'Lorem text about company 2',
      jobCategory: 'Quality Assurance',
      id: 3,
  }
]

function Jobs() {
  return (
    <Container>
          <Grid
            container
            justify="flex-start"
            alignItems="flex-start"
          >
            <JobsSearch />
            <JobMainContent jobs={jobs} />
          </ Grid>
     </Container>
    
  )
}
=======
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
>>>>>>> 622fbba3c38878f9034b06d0da3c610782cfe8aa

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