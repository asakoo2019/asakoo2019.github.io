import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Typography, Grid, withWidth } from '@material-ui/core';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import EventIcon from '@material-ui/icons/Event';


const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        textAlign: 'center',
        width: '100%',
        backgroundColor: 'rgb(255, 255, 179)',
        margin: theme.spacing(2, 0),
        padding: theme.spacing(3),

    },
    jobItem: {
        backgroundColor: "white",
        margin: theme.spacing(1),
        padding: theme.spacing(1),
        borderRadius: '20px',

    },
    jobName: {
        borderRadius: '10px',
        height: 60,
        fontSize: '18px',
        fontWeight: '500',
        backgroundColor: '#FE654F',
        color: "#fff"
    },
    aboutJobInfo :{
        fontSize: '15px',
        width: '100%',
        padding: theme.spacing(1),
    },
    aboutJobIcon: {
        fontSize: '15px',
        color: '#FE654F',
    },
}));

function ActiveJobs({ companyInfo, width }) {
    const classes = useStyles(1);
    const history = useHistory();
    const [plus, setPlus] = useState(0);
    let numQuantity = 3;
    switch (width) {
        case 'xs': numQuantity = 1; break;
        case 'sm': numQuantity = 1; break;
        case 'md': numQuantity = 2; break;
        default: numQuantity = 3; break;
    }

    const jobs = companyInfo.companyJobs.slice(plus, plus + numQuantity).map((item, index) => {
        // const jobCategoryText = item.jobDetails.length > 20 ? item.jobDetails.slice(0, 160) + '...' : item.jobDetails;

        return (
            <Grid item xs={8} sm={8} md={5} lg = {3} key={item.id} className={classes.jobItem}>
                     <Grid className={classes.jobName}>
                        <Typography  className={classes.jobName}>{item.jobName}</Typography>
                    </Grid>
                    <Grid >
                        <Typography className = {classes.aboutJobInfo}><EventIcon className = {classes.aboutJobIcon}/> {item.jobDeadline} </Typography>
                        <Typography className = {classes.aboutJobInfo}><LocationOnIcon className = {classes.aboutJobIcon}/> {item.location}</Typography>

                    </Grid>
                    {/* <Grid>
                        <Typography  height = '50px'>{item.jobDetails}</Typography>
                    </Grid> */}
                    <Grid container justify='center'>
                        <Button
                            variant="outlined"
                            color="secondary"
                            onClick={() => history.push(`/jobs/${item.id}`)}
                        >
                            View More
                    </Button>
                    </Grid>
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
        <Grid item
            className={classes.root}
        >
            <Typography variant="h4" gutterBottom>ACTIVE JOBS ({companyInfo.companyJobs.length})</Typography>
            <Grid container
                direction="row"
                justify="space-evenly"
                alignItems="center"

            >
                <Grid item xs={1}>
                    <Button
                        variant="contained"
                        color="secondary"
                        onClick={previousButton}
                    >{'<'}
                    </Button>
                </Grid>
                <Grid item xs={10} >
                    <Grid container
                        direction="row"
                        justify="center"
                        alignItems="center"

                    >
                        {jobs}
                    </Grid>
                </Grid>
                <Grid item xs={1}>
                    <Button
                        variant="contained"
                        color="secondary"
                        onClick={nextButton}
                    >{'>'}
                    </Button>
                </Grid>
            </Grid>
        </Grid>
    );
}
ActiveJobs.propTypes = {
    width: PropTypes.oneOf(["lg", "md", "sm", "xl", "xs"]).isRequired
};
export default withWidth()(ActiveJobs)