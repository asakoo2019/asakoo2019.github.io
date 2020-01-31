import React, { useEffect, useState } from 'react';
import { Container } from '@material-ui/core';
import { firestore } from '../../../../firebase/db';
import { connect } from 'react-redux';

const mStP = (state) => ({
    user: state,
});

const JobSingleHeader = (props) => {
    const [id, setId] = useState('');
    const [job, setJob] = useState([]);
    const [element, setElement] = useState('')
    console.log(job);

    useEffect(() => {
        setId(props.user);
    }, []);

    useEffect(() => {
        let job = [];
        const docRef = firestore.collection("companies");
        docRef.get().then(function(querySnapshot) {
            querySnapshot.forEach(function(doc) {
                if (doc.data().companyJobs && doc.data().companyJobs.length !== 0){
                job = job.concat(doc.data().companyJobs);
                setJob(job);}
            });
        });
    }, []);

    useEffect(() => {
        const element = job.map(item => {
            if (item.id === id) {
                return (
                    <h1>{item.jobName}</h1>
                )
            }
        })
        setElement(element)
    }, [job])
    

    return (
        <Container>
            {element}
        </Container>
    )
}

export default connect(mStP)(JobSingleHeader);