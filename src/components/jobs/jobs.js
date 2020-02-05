import React, { useState, useEffect } from 'react';
import JobsFilter from './jobs-filter';
import JobsContainer from './jobs-container';
import { Container, Grid } from '@material-ui/core';
import { firestore } from '../firebase/db';
import { withStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import { connect } from 'react-redux';

const styles = {
	companies: {
		marginTop: 24,
		marginBottom: 24,
	},
	jobsLoader: {
    margin: 50,
    color: '#FE654F',
  },
};

const mStP = (state) => ({
  state,
});

const Jobs = (props) => {
	const { classes } = props;
	const [jobs, setJobs] = useState([]);
	const [allJobs, setAllJobs] = useState(true);
	const [currentPage, setCurrentPage] = useState(10);
	const [categories, setCategories] = useState([]);
	const [emptySearch, setEmptySearch] = useState('');

	useEffect(() => {
		if(typeof props.state.search === 'string') {
			setEmptySearch(props.state.search);
		} else {
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
					setJobs(props.state.search.length ? props.state.search : newArray);
					};
				});
			});
		};
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
			{jobs.length ? <Grid container
				justify='space-between'
				className={classes.companies}>
				<Grid item xs={12} sm={4} lg={3}>
					<JobsFilter
						jobs={jobs}
						setCurrentPage={setCurrentPage}
						setCategories={setCategories}
						setAllJobs={setAllJobs}/>
				</Grid>
				<Grid item xs={12} sm={8} lg={9}>
					<JobsContainer
					renderJobs={renderJobs}
					currentPage={currentPage}
					otherJobs={otherJobs}
					emptySearch={emptySearch} />
				</Grid>
			</Grid> :
			<Grid container justify='center'>
        <CircularProgress size={150} className={classes.jobsLoader}/>
      </Grid>}
		</Container>
	);
};

export default connect(mStP)(withStyles(styles)(Jobs));