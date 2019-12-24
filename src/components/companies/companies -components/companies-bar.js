import React, {useSate} from 'react';
import CompanyItem from './company-item';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import {Grid} from '@material-ui/core';


const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
    },
    gridUp: {
        padding: theme.spacing(3),
        backgroundColor: '#ffffff',
    },
    gridMiddle: {
        padding: theme.spacing(2),
    },
    gridDown: {
        padding: theme.spacing(3),
        backgroundColor: '#fefeff',
        
    },
  }));

function  CompaniesBar (props) {   
    const classes = useStyles();
    const comps = props.employer.slice (props.currPage - 10, props.currPage).map((item, index) => {
        
        return (
            <CompanyItem 
                key = {item.userId}
                companyName =  {item.companyName}
                regtype = {item.regtype}
            />
        );
    });
    const button = (arr)=> {
        let maxButtons = Math.ceil(arr.length/10);
        let result = [];
        for (let i = 1; i <= maxButtons; i++){
            result.push(<Button
                key  = {i}
                onClick = {props.otherCopmanies}
            >
                {i}
            </Button>)
        }
        return result
    }
    return (
        <Grid container
            direction="column"
            justify="flex-start"
            alignItems="center"
            className = {classes.root}
        >   
            <Grid container
                alignItems="flex-start"
                className={classes.gridUp}    
            >
                <span>1 - 10 company results from {props.employer.length} total companies on asd.am</span>                
            </Grid>
            <Grid container
                direction = "column"
                justify = "flex-start"
                alignItems = "flex-start"
            >  
                {comps}
            </Grid> 
            <Grid container
                className={classes.gridDown}
            >
                {button(props.employer)}
            </Grid>  
        </Grid>      
    );   
}
export default CompaniesBar;