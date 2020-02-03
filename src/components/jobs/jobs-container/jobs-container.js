import React from 'react';
import { Grid, Button } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';

const styles = {
	jobBlock: {
		marginBottom: 10,
		padding: '10px 0',
		borderBottom: '1px solid #FE654F',
		cursor: 'pointer',
	},
	paginationBtn: {
		padding: '8px 15px !important',
		minWidth: 0,
	},
	viewMoreBtn: {
		height: 40,
	},
	jobImage: {
		width: '80%',
	},
};

const JobsContainer = (props) => {
	const history = useHistory();
	const { renderJobs, classes, currentPage, otherJobs } = props;
	const newJobs = [...renderJobs];

	const pagination = (arr) => {
		let maxButtons = Math.ceil(arr.length / 10);
		let buttonsArray = [];
		if (maxButtons > 1) {
			for (let i = 1; i <= maxButtons; i++) {
				buttonsArray.push(
					<Grid item key={i}>
						<Button color='primary'
							variant="outlined"
							size='small'
							onClick={() => otherJobs(i)}
							className={classes.paginationBtn}>
							{i}
						</Button>
					</Grid>
				);
			};
		};
		return buttonsArray;
	};	

	const viewMore = (id) => {
		history.push(`/jobs/${id}`);
	};

	const elements = newJobs
	.slice(currentPage - 10, currentPage)
	.sort((a, b) => b.viewCount - a.viewCount)
	.map(item => {
		let { jobCategory, id, jobImage, jobDetails, viewCount } = item;
		if (jobDetails.length > 50) {
      jobDetails = jobDetails.substring(0, 50) + "...";
    };
		return (
			<Grid container
				alignItems='center'
				justify='space-between'
				className={ classes.jobBlock}
				key={ id }
				spacing={1}
				onClick={() => viewMore(id)}>
				<Grid container justify="center" item xs={2}>
					<img src={ jobImage } alt={ jobCategory } className={classes.jobImage}/>
				</Grid>
				<Grid container justify="center" item xs={4}>
					<p>{ jobCategory }</p>
				</Grid>
				<Grid container justify="center" item xs={2}>
					<p>{ jobDetails }</p>
				</Grid>
				<Grid container justify="center" item xs={2}>
					<p>Total view { viewCount }</p>
				</Grid>
				<Grid item xs={2}>
					<Button color='primary' variant="outlined" className={classes.viewMoreBtn} onClick={() => viewMore(id)}>
					View More
				</Button>
				</Grid>
			</Grid>
		);
	});
	
	return (
		<>
			{ elements }
			<Grid container
				item spacing={1}>
				{pagination(newJobs)}
			</Grid>
		</>
	);
};

export default connect()(withStyles(styles)(JobsContainer));