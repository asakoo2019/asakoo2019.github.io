import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button,Typography, Paper, Grid  } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import './activ-jobs.css';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        textAlign: 'center',
        width: '100%',
        backgroundColor: 'rgb(255, 255, 179)',
        margin: theme.spacing(2, 0),
        padding: theme.spacing(3),
    },
    jobContainer: {
        backgroundColor: "white"
    },
    jobName: {
        margin: theme.spacing(2),
    },
    activeJob: {
        border: '1px solid black',
        margin: theme.spacing(2),
    },
    paper: {
        maxWidth: 400,
        margin: `${theme.spacing(1)}px auto`,
        padding: theme.spacing(2)
      }
    // jobText :{
    //     textAlign: 'left',
    // },

}));
export default function ActiveJobs({ companyInfo }) {
    const classes = useStyles();
    const history = useHistory();
    const [plus, setPlus] = useState(0);
    const jobs = companyInfo.companyJobs.slice(plus, plus + 3).map(item => {
        const jobCategoryText = item.jobDetails.length > 20 ? item.jobDetails.slice(0, 60) + '...' : item.jobDetails;
        return (
            <Grid item xs={3}
                key={item.id}
                // border={1}
                // className={classes.activeJob}
            >
                <Paper className={classes.paper}>
                    <Grid>
                        <Typography variant="h6" className={classes.jobName}>{item.jobName}</Typography>
                    </Grid>
                    <Grid>
                        <Typography>Deadline: {item.jobDeadline} </Typography>
                        <Typography> {item.location}</Typography>

                    </Grid>
                    <Grid>
                        <Typography>{jobCategoryText}</Typography>
                    </Grid>
                    <Grid>
                        <Button
                            variant="outlined"
                            color="secondary"
                            onClick={() => history.push(`/jobs/${item.id}`)}
                        >
                            View More
                    </Button>
                    </Grid>
                </Paper>
            </Grid>

        );
    })
    function nextButton() {
        let x = (plus + 3 < companyInfo.companyJobs.length) ? plus + 1 : plus;
        setPlus(x)
    }
    function previousButton() {
        let x = (plus > 0) ? plus - 1 : plus;
        setPlus(x)
    }

    return (
        <Grid
            className={classes.root}
        >
            <Typography variant="h3">ACTIVE JOBS ({companyInfo.companyJobs.length})</Typography>
            <Grid
                container
                direction="row"
                justify="space-evenly"
                alignItems="center"
                className={classes.jobContainer}
            >
                <Button
                    variant="contained"
                    color="secondary"
                    onClick={previousButton}
                >{'<'}</Button>
                {jobs}
                <Button
                    variant="contained"
                    color="secondary"
                    onClick={nextButton}
                >{'>'}</Button>
            </Grid>
        </Grid>
    );
}
