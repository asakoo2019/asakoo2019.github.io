import React from 'react';
import { Grid, Button } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom';

const styles = {
	jobBlock: {
		marginBottom: 10,
		padding: '10px 0',
		borderBottom: '1px solid',
		height: 80,
	},
	paginationBtn: {
		padding: '8px 15px !important',
		minWidth: 0,
		marginBottom: 24,
	},
	viewMoreBtn: {
		height: 50,
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
			<Grid
				className={ classes.jobBlock}
				key={ id }
				container
				justify='space-between'>
				<Grid item xs>
					<img src={ jobImage } width='64' height='64' alt={ jobCategory } />
				</Grid>
				<Grid item xs>
					<p>{ jobCategory }</p>
				</Grid>
				<Grid item xs>
					<p>{ jobDetails }</p>
				</Grid>
				<Grid container justify= 'flex-end' item xs>
					<p>{ viewCount }</p>
				</Grid>
				<Button className={classes.viewMoreBtn} onClick={() => viewMore(id)}>
					View More
				</Button>
			</Grid>
		);
	});

	const viewMore = (id) => {
		history.push(`/jobs/${id}`);
	};
	
	return (
		<>
			<Grid container
				item xs={8}>
				{ elements }
			</Grid>
			<Grid container
				item xs={12} spacing={1}>
				{pagination(newJobs)}
			</Grid>
		</>
	);
};

export default withStyles(styles)(JobsContainer);