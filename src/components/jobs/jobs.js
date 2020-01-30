import React, { useState, useEffect } from 'react';
import JobsFilter from './jobs-filter';
import JobsContainer from './jobs-container';
import { Container, Grid } from '@material-ui/core';
import { firestore } from '../firebase/db';

function Jobs() {
    const [jobs, setJobs] = useState([]);
    const [allJobs, setAllJobs] = useState (true);
    const [currPage, setCurrentPage] = useState(10);

    useEffect(() => {
        let job = [];
        const docRef = firestore.collection("companies");
        docRef.get().then(function(querySnapshot) {
            querySnapshot.forEach(function(doc) {
                if (doc.data().companyJobs && doc.data().companyJobs.length !== 0){
                job.push(doc.data().companyJobs);
                let newArray = [];
                job.forEach(item => {
                    newArray = newArray.concat(item)
                });
                setJobs(newArray);
                };
            });
        });
    }, []);
    
    const createJob = (jobCategory, id) => {
        return {
            jobCategory,
            id,
            checked: false,
        }
    }

    const checkboxToggle = (jobName, item) => {

        const { id, checked, ...rest  } = item;

        const idx = jobs.findIndex((item) => {
            return item.id === id
        })
        const before = jobs.slice(0, idx);
        const after = jobs.slice(idx + 1);
        const newItem = Object.assign(createJob(jobs[idx].jobCategory, jobs[idx].id), {
            checked: !checked,
            l: jobName,
            ...rest});

        setJobs([
            ...before,
            newItem,
            ...after,
        ]);

    };
    
    const jobsChecked = jobs.filter(item => item.checked)
    const checked = [];

    jobsChecked.forEach(item => {

        if (item.l) checked.push(item.l);
    });

    const newJob = jobs.filter(item => checked.includes(item.jobCategory))

    return (
        <Container>
            <Grid container
                justify='space-between'>
                <JobsFilter
                    jobs = { jobs }
                    checkboxChange= { checkboxToggle } setCurrentPage={setCurrentPage}/>
                <JobsContainer
                    jobs = { checked.length ? newJob : jobs } />
            </Grid>
        </Container>
    );
};

export default Jobs;