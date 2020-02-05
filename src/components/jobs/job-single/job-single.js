import React, { useEffect, useState } from 'react';
import { Container, Grid } from '@material-ui/core';
import { firestore } from '../../firebase/db';
import { withStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import { useParams } from "react-router-dom";

const styles = {
	jobSingleLoader: {
    margin: 50,
    color: '#FE654F',
	},
	jobHeader: {
		height: 300,
		backgroundPosition: 'center',
		backgroundRepeat: 'no-repeat',
  	backgroundSize: 'cover',
	},
	jobImage: {
		width: 150,
	},
	singleJob: {
		marginTop: 24,
		marginBottom: 24,
	},
	secondText: {
		marginLeft: ".5em",
	},
	firstText: {
		color: '#FE654F',
	},
	singleJobContainer: {
		marginTop: 24,
	},
	jobDetailsText: {
		textAlign: 'justify',
	},
	allBlocks: {
		marginTop: 15,
		paddingBottom: 15,
		borderBottom: '1px solid #FE654F',
	},
	jobMail: {
		color: '#FE654F',
		fontWeight: 'bold',
	},
};

const JobSingle = (props) => {
	const { classes } = props;
	const [jobs, setJobs] = useState([]);
	const [element, setElement] = useState(null);
	const [currentJob, setCurrentJob] = useState(null);
	const [job, setJob] = useState(null);
	const [companyId, setCompanyId] = useState('');
	const [company, setCompany] = useState(null);
  const params = useParams();
	const searchId = params.id;

	useEffect(() => {
		let jobs = [];
		const docRef = firestore.collection("companies");
		docRef.get().then(function(querySnapshot) {
			querySnapshot.forEach(function(doc) {
				if (doc.data().companyJobs && doc.data().companyJobs.length){
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
		if (companyId !== '') {
			firestore.collection("companies").doc(companyId).get().then(function(doc) {
				if (doc.exists) {
					setCompany(doc.data());
				};
			}).catch(function(error) {
				console.log("Error getting document:", error);
			});
		};
	}, [companyId]);

	useEffect(() => {
		if (company !== null) {
			const element = jobs.map(item => {
				if (item.id === searchId) {
					return (
						<Grid key={item.id}  className={classes.singleJob}>

							{/* Single Job Header */}
							<Grid container className={classes.jobHeader}
								style={{ backgroundImage: `url(${company.companyBackground})` }}
								spacing={2}
								alignItems='flex-end'>
								<Grid container justify='center' item xs={12} sm={4} md={2}>
									<img src={company.companyImage} alt={item.jobName} className={classes.jobImage}/>
								</Grid>
								<Grid container item direction='column' xs={12} sm={8} md={10}>
									<Grid container item alignItems='center'>
										<h5 className={classes.firstText}>Company category:</h5>
										<p className={classes.secondText}>{company.companyCategory}</p>
									</Grid>
									<Grid container item alignItems='center'>
										<h5 className={classes.firstText}>Company name:</h5>
										<p className={classes.secondText}>{company.companyName}</p>
									</Grid>
									<Grid container item alignItems='center'>
										<h5 className={classes.firstText}>Company total views:</h5>
										<p className={classes.secondText}>{company.companyViewCount + 1}</p>
									</Grid>
								</Grid>
							</Grid>

							{/* Single Job Container */}
							<Grid container className={classes.singleJobContainer}>
								<Grid item xs={12}>
									<h2 className={classes.firstText}>{item.jobName.toUpperCase()}</h2>
								</Grid>
								<Grid container className={classes.allBlocks}>
									<Grid container item xs={12} sm={4} direction='column' spacing={2}>
										<Grid container item alignItems='center'>
											<h5 className={classes.firstText}>Employment term:</h5>
											<p className={classes.secondText}>{item.term}</p>
										</Grid>
										<Grid container item alignItems='center'>
											<h5 className={classes.firstText}>Category:</h5>
											<p className={classes.secondText}>{item.jobCategory}</p>
										</Grid>
									</Grid>
									<Grid container item xs={12} sm={4} direction='column' spacing={2}>
										<Grid container item alignItems='center'>
											<h5 className={classes.firstText}>Job type:</h5>
											<p className={classes.secondText}>{item.jobType}</p>
										</Grid>
										<Grid container item alignItems='center'>
											<h5 className={classes.firstText}>Location:</h5>
											<p className={classes.secondText}>{item.location}</p>
										</Grid>
									</Grid>
									<Grid container item xs={12} sm={4} direction='column' spacing={2}>
										<Grid container item alignItems='center'>
											<h5 className={classes.firstText}>Job deadline:</h5>
											<p className={classes.secondText}>{item.jobDeadline}</p>
										</Grid>
										<Grid container item alignItems='center'>
											<h5 className={classes.firstText}>Job total views:</h5>
											<p className={classes.secondText}>{item.viewCount + 1}</p>
										</Grid>
									</Grid>
								</Grid>
								{item.jobDetails ? <Grid container className={classes.allBlocks}>
									<Grid container direction='column'>
										<h5 className={classes.firstText}>Job details:</h5>
										<p className={classes.jobDetailsText}>{item.jobDetails}</p>
									</Grid>
								</Grid> : null}
								<Grid container className={classes.allBlocks}>
									<Grid container direction='column'>
										<h5 className={classes.firstText}>Additional information:</h5>
										<p className={classes.jobDetailsText}>
											Interested candidates who meet the requirements above and are confident that their background and experience qualify them for the position, are welcome to send their resume to: <span className={classes.jobMail}>{item.jobMail}</span> mentioning the position title ( "{item.jobName}" ) in the subject line of the email.
										</p>
									</Grid>
								</Grid>
							</Grid>
						</Grid>
					);
				};
				return null;
			});
			setElement(element);
		};
	}, [
		jobs,
		searchId,
		company,
		classes.jobHeader,
		classes.jobImage,
		classes.singleJob,
		classes.secondText,
		classes.firstText,
		classes.singleJobContainer,
		classes.jobDetailsText,
		classes.allBlocks,
		classes.jobMail,
	]);

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
			{(jobs.length && company && element) ? element : 
      <Grid container justify='center'>
        <CircularProgress size={150} className={classes.jobSingleLoader}/>
      </Grid>}
		</Container>
	);
};

export default withStyles(styles)(JobSingle);