import React, { useEffect, useState } from 'react';
import { Container } from '@material-ui/core';
import { firestore } from '../../../../firebase/db';

const JobSingleHeader = () => {

    const [job, setJob] = useState({});

    useEffect(() => {
        let job = [];
        const docRef = firestore.collection("companies");
        docRef.get().then(function(querySnapshot) {
            querySnapshot.forEach(function(doc) {
                if (doc.data().companyJobs && doc.data().companyJobs.length !== 0){
                job.push(doc.data().companyJobs);
                setJob(job[0]);}
            });
        });
    }, []);

    console.log(job[0])

    return (
        <Container>
            <h1>{job.id}</h1>
        </Container>
    )
}

export default JobSingleHeader;