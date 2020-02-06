import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Typography, Grid,IconButton, withWidth } from '@material-ui/core';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import EventIcon from '@material-ui/icons/Event';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';


const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        textAlign: 'center',
        width: '100%',
        backgroundColor: 'rgb(255, 255, 255)',
        margin: theme.spacing(2, 0),
        padding: theme.spacing(3),

    },
    jobItem: {
        backgroundColor: "white",
        margin: theme.spacing(1),
        padding: theme.spacing(1),
		boxShadow: '0px 0px 5px 2px rgba(0,0,0,0.5)',
        
    },
    jobNames: {
        
        backgroundColor: 'rgb(190, 190, 190, 0.3)',
        color: "#fff",
        [theme.breakpoints.up('sm')]:{
            height: theme.spacing(10),
        },
        [theme.breakpoints.down('xs')]:{
            height: 'auto',
        }
    },
    jobName: {
        fontWeight: 500,
        textAlign: 'center',
        padding: theme.spacing(2),
        color: '#FE654F',
        [theme.breakpoints.up('sm')]:{
            fontSize: 18,
        },
        [theme.breakpoints.down('xs')]:{
            fontSize: 15,
        },
    },
    aboutJobInfo: {
        fontSize: 15,
        width: '100%',
        padding: theme.spacing(0),
    },
    aboutJobIcon: {
        fontSize: '15px',
        color: '#FE654F',
    },
    viewMoreBtn: {
        color: '#000',
        height: 40,
        backgroundColor: '#FE654F',
        },
    button: {
        padding: theme.spacing(2),
        backgroundColor: '#FE654F',
        fontSize: 18,
        fontWeight: 600,
    },
    componentTitle: {
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

        return (
            <Grid item xs={8} sm={8} md={5} lg={3} key={item.id} className={classes.jobItem}>
                <Grid className={classes.jobNames}>
                    <Typography className={classes.jobName}>{item.jobName}</Typography>
                </Grid>
                <Grid >
                    <Typography className={classes.aboutJobInfo}><EventIcon className={classes.aboutJobIcon} /> {item.jobDeadline} </Typography>
                    <Typography className={classes.aboutJobInfo}><LocationOnIcon className={classes.aboutJobIcon} /> {item.location}</Typography>

                </Grid>
                <Grid container justify='center'>
                    <Button
                        variant="outlined"
                        color="secondary"
                        onClick={() => history.push(`/jobs/${item.id}`)}
                        className = {classes.viewMoreBtn}
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
            <Typography variant="h4" gutterBottom className = {classes.componentTitle}>ACTIVE JOBS ({companyInfo.companyJobs.length})</Typography>
            <Grid container
                direction="row"
                justify="space-evenly"
                alignItems="center"

            >
                <Grid item xs={1}>
                    <IconButton
                        onClick={previousButton}
                        className = {classes.button}
                    >
                        <ArrowBackIosIcon/>
                    </IconButton>
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
                    <IconButton
                        onClick={nextButton}
                        className = {classes.button}
                    >
                        <ArrowForwardIosIcon/>
                    </IconButton>
                </Grid>
            </Grid>
        </Grid>
    );
}
ActiveJobs.propTypes = {
    width: PropTypes.oneOf(["lg", "md", "sm", "xl", "xs"]).isRequired
};
export default withWidth()(ActiveJobs)