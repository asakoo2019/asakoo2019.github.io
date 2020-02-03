import React, { useEffect, useState } from 'react';
import { Container, Grid } from '@material-ui/core';
import { firestore } from '../../firebase/db';
import { useHistory } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const styles = {
	jobSingleLoader: {
    margin: 50,
  },
};

const JobSingle = (props) => {
	const { classes } = props;
	const [jobs, setJobs] = useState([]);
	const [element, setElement] = useState(null);
	const [currentJob, setCurrentJob] = useState(null);
	const [job, setJob] = useState(null);
	const [companyId, setCompanyId] = useState('');
	const history = useHistory();
	const pathName = history.location.pathname;
	const LastSleshIndex = pathName.lastIndexOf('/');
	const searchId = pathName.slice(LastSleshIndex + 1);

	useEffect(() => {
		let jobs = [];
		const docRef = firestore.collection("companies");
		docRef.get().then(function(querySnapshot) {
			querySnapshot.forEach(function(doc) {
				if (doc.data().companyJobs && doc.data().companyJobs.length !== 0){
					jobs = jobs.concat(doc.data().companyJobs);
					setJobs(jobs);
					jobs.forEach(item => {
						if(item.id === searchId && doc.data().id === item.companyId){
							setCompanyId(doc.data().id);
							const index = doc.data().companyJobs.findIndex((el) => el.id === item.id);
							const newArray = [
								...doc.data().companyJobs.slice(0, index),
								...doc.data().companyJobs.slice(index + 1)
							];
							setJob(newArray);
						};
					});
				};
			});
		});
	}, [searchId]);

	useEffect(() => {
		const element = jobs.map(item => {
			if (item.id === searchId) {
				return (
					<Grid key={item.id}>
						<h1>{item.jobName}</h1>
						<h1>{item.viewCount + 1}</h1>
					</Grid>
				);
			};
			return null;
		});
		setElement(element);
	}, [jobs, searchId]);

	useEffect(() => {
		if (jobs.length) {
			let current = {};
			jobs.map(item => {
				if (item.id === searchId) {
					current = {...item, viewCount: (item.viewCount + 1)};
				return current;
			};
				return null;
			});
			setCurrentJob(current);
		};
	}, [jobs, job, searchId]);
	
	useEffect(() => {
		if(job && currentJob) {
			firestore.collection("companies").doc(companyId)
      .update({
        companyJobs: [...job, currentJob]
      }).catch(function(error) {
        console.error("Error updating document: ", error);
      });
		};
	}, [job, currentJob, companyId]);

	return (
		<Container>
			{jobs.length ? element : 
      <Grid container justify='center'>
        <CircularProgress size={150} className={classes.jobSingleLoader}/>
      </Grid>}
		</Container>
	);
};

export default withStyles(styles)(JobSingle);