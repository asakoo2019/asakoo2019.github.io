import React from 'react';
import { Grid, Button } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom';

const styles = {
	jobBlock: {
		marginBottom: 10,
		padding: '10px 0',
		borderBottom: '1px solid #FE654F',
	},
	paginationBtn: {
		padding: '8px 15px !important',
		minWidth: 0,
	},
	viewMoreBtn: {
		height: 40,
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

	const elements = newJobs
	.slice(currentPage - 10, currentPage)
	.sort((a, b) => b.viewCount - a.viewCount)
	.map(item => {
		const { jobCategory, id, jobImage, jobDetails, viewCount } = item;
		return (
			<Grid container
				alignItems='center'
				justify='space-between'
				className={ classes.jobBlock}
				key={ id }>
				<Grid item xs={2}>
					<img src={ jobImage } width='100' height='100' alt={ jobCategory } />
				</Grid>
				<Grid item xs={3}>
					<p>{ jobCategory }</p>
				</Grid>
				<Grid item xs={3}>
					<p>{ jobDetails }</p>
				</Grid>
				<Grid item xs={2}>
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

	const viewMore = (id) => {
		history.push(`/jobs/${id}`);
	};
	
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

export default withStyles(styles)(JobsContainer);