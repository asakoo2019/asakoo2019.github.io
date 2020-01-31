import React, {useState} from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import {useHistory} from 'react-router-dom';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        textAlign: 'center',
        width: '100%',
    },

}));
export default function ActiveJobs({ companyInfo }) {
    const classes = useStyles();
    const history = useHistory();
    const [plus, setPlus] = useState(0)
     const jobs = companyInfo.companyJobs.slice(plus, plus + 3).map(item => {
        return (
            <Grid
                key={item.id}
            >
                <div>{item.jobCategory}</div>
                <div>here must be job datails</div>
                <div><Button
                    onClick = {()=>history.push(`/jobs/${item.id}`) }
                >View More</Button></div>
            </Grid>
        );
    })
    function nextButton(){
        
        let x = (plus + 3<companyInfo.companyJobs.length)? plus + 1: plus;
        setPlus( x )
    }
    function previousButton(){
        
        let x = (plus > 0)? plus - 1: plus;
        setPlus( x )
    }
    return (
        <Grid
            className={classes.root}
        >
            <h1>ACTIVE JOBS {companyInfo.companyJobs.length}</h1>
            <Grid
                container
                direction="row"
                justify="space-evenly"
                alignItems="center"
            >
                <Button 
                    onClick = {previousButton}
                >{'<'}</Button>
                    {jobs}
                <Button
                    onClick = {nextButton}
                >{'>'}</Button>  
            </Grid>
        </Grid>
    );
}
