import React from 'react';
import { Grid, Button } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom';

const styles = {
	jobBlock: {
		marginBottom: 24,
		backgroundColor: 'rgb(255, 255, 255)',
		cursor: 'pointer',
		padding: '12px 0',
		transition: '.3s',
		"&:hover": {
			boxShadow: '0px 0px 10px 3px rgba(0,0,0,0.5)',
			transition: '.3s',
		}
	},
	paginationBtn: {
		padding: '8px 15px !important',
		minWidth: 0,
	},
	viewMoreBtn: {
		height: 40,
		backgroundColor: '#FE654F',
	},
	jobImage: {
		width: '60%',
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
		let { id, jobImage, jobDetails, viewCount, jobName } = item;
		if (jobDetails.length > 50) {
      jobDetails = jobDetails.substring(0, 50) + "...";
		};
		return (
			<Grid container
				alignItems='center'
				justify='space-between'
				className={ classes.jobBlock}
				key={ id }
				onClick={() => viewMore(id)}>
				<Grid container justify="center" item xs={6} lg={2}>
					<img src={ jobImage } alt={ jobName } className={classes.jobImage}/>
				</Grid>
				<Grid container justify="center" item xs={6} lg={3}>
					<h6>{ jobName }</h6>
				</Grid>
				<Grid container justify="center" item xs={6} lg={3}>
					<p>{ jobDetails }</p>
				</Grid>
				<Grid direction='column' container alignItems="center" item xs={6} lg={2}>
					<p>Total views</p>
					<p>{ viewCount }</p>
				</Grid>
				<Grid container justify='center' item xs={12} lg={2}>
					<Button className={classes.viewMoreBtn} onClick={() => viewMore(id)}>
					View More
				</Button>
				</Grid>
			</Grid>
		);
	});
	
	return (
		<>
			{props.emptySearch.length ? <h6>{props.emptySearch}</h6> :
			<>
				{ elements }
				<Grid container
					item spacing={1}>
					{pagination(newJobs)}
				</Grid>
			</>
			}
		</>
	);
};

export default withStyles(styles)(JobsContainer);