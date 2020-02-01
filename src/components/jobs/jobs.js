import React, { useState, useEffect } from 'react';
import JobsFilter from './jobs-filter';
import JobsContainer from './jobs-container';
import { Container, Grid } from '@material-ui/core';
import { firestore } from '../firebase/db';
import { withStyles } from '@material-ui/core/styles';

const styles = {
	companies: {
		marginTop: 24,
		marginBottom: 24,
	},
};

const Jobs = (props) => {
	const { classes } = props;
	const [jobs, setJobs] = useState([]);
	const [allJobs, setAllJobs] = useState(true);
	const [currentPage, setCurrentPage] = useState(10);
  const [categories, setCategories] = useState([]);

	useEffect(() => {
		let job = [];
		const docRef = firestore.collection("companies");
		docRef.get().then(function(querySnapshot) {
			querySnapshot.forEach(function(doc) {
				if (doc.data().companyJobs && doc.data().companyJobs.length !== 0){
				job.push(doc.data().companyJobs);
				let newArray = [];
				job.forEach(item => {
					newArray = newArray.concat(item);
				});
				setJobs(newArray);
				};
			});
		});
	}, []);

	const otherJobs = (i) => {
    let num = i * 10;
    setCurrentPage(num);
  };

  const drawJobs = (jobs) => {
    const result = [];
    const len = jobs.length;
    for (let i = 0; i < len; i++){
      for (let j = 0; j < categories.length; j++){
        if (categories[j] === jobs[i].jobCategory){
          result.push(jobs[i]);
        };
      };
		};
    return result;
	};
	
	const renderJobs = allJobs ? [...jobs] : drawJobs(jobs);

	return (
		<Container>
			<Grid container
				justify='space-between'
				className={classes.companies}>
				<Grid item xs={3}>
					<JobsFilter
						jobs = { jobs }
						setCurrentPage={setCurrentPage}
						setCategories={setCategories}
						setAllJobs={setAllJobs}/>
				</Grid>
				<Grid item xs={9}>
					<JobsContainer
					renderJobs={renderJobs}
					currentPage={currentPage}
					otherJobs={otherJobs} />
				</Grid>
			</Grid>
		</Container>
	);
};

export default withStyles(styles)(Jobs);