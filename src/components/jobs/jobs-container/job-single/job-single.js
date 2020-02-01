import React, { useEffect, useState } from 'react';
import { Container, Grid } from '@material-ui/core';
import { firestore, database } from '../../../firebase/db';
import { useHistory } from 'react-router-dom';

const JobSingle = () => {
	const [job, setJob] = useState([]);
	const [element, setElement] = useState('');
	const [id, setId] = useState('');
	const history = useHistory();
	const pathName = history.location.pathname;
	const LastSleshIndex = pathName.lastIndexOf('/');
	const searchId = pathName.slice(LastSleshIndex + 1);

	useEffect(() => {
		let job = [];
		const docRef = firestore.collection("companies");
		docRef.get().then(function(querySnapshot) {
			querySnapshot.forEach(function(doc) {
				if (doc.data().companyJobs && doc.data().companyJobs.length !== 0){
					job = job.concat(doc.data().companyJobs);
					setJob(job);
				};
			});
		});
	}, []);

	// job.map(item => {
	// 	if(item.id === searchId) {
	// 		firestore.collection("companies").doc(id)
	// 		.update({
	// 			companyJobs: [...job, (job.viewCount + 1)]
	// 		});
	// 		console.log(item);
	// 	};
	// });

	useEffect(() => {
		const element = job.map(item => {
			if (item.id === searchId) {
				setId(item.companyId);
				return (
					<Grid key={item.id}>
						<h1>{item.jobName}</h1>
					</Grid>
				);
			};
			return null;
		});
		setElement(element);
	}, [job, searchId]);

	return (
		<Container>
			{element}
		</Container>
	);
};

export default JobSingle;