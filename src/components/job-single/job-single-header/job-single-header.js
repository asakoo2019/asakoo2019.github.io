import React, { useEffect, useState } from 'react';
import { Container } from '@material-ui/core';
import { firestore } from '../../firebase/db';

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

    console.log(job);

    return (
        <Container>
            <img src='' alt='company image' />
        </Container>
    )
}

export default JobSingleHeader;