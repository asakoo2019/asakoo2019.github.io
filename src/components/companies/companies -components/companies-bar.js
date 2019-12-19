import React from 'react';
import CompanyItem from './company-item';
import { makeStyles } from '@material-ui/core/styles';
//import { Button } from '@material-ui/core';
import {Grid} from '@material-ui/core';
import PaginationPart from './pagein'



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
    // const  [a, setA] = useStyles(0);
    // const  [b, setB] = useStyles(10);
    const classes  = useStyles();
    const comps = props.employer.map((item, index) => {
        return (
            <CompanyItem 
                userId = {item.userId}
                companyName =  {item.companyName}
                regtype = {item.regtype}
            />
        );
    });
    // function otherCopmanies (num) {
    //     console.log(num)
    //     // useStat ({ a : num*10 - 10})
    //     // setState ({ b : num*10})
    // }
    // const button = (arr)=> {
    //     let x = Math.ceil(arr.length/10);
    //     let result = [];
    //     for (let i = 1; i <= x; i++){
    //         result.push(<Button
    //             onClick = {() => otherCopmanies(i)}

    //         >
    //             {i}
    //         </Button>)
    //     }
    //     return result
    // }
        return (
            <Grid container
                direction="column"
                justify="flex-start"
                alignItems="center"
                className={classes.root}
    
            >
                <Grid container
                    alignItems="flex-start"
                    className={classes.gridUp}    
                >
                    <span>1 - 10 company results from {props.employer.length} total companies on asd.am</span>
                </Grid>
                {/* <Grid container
                    direction = "column"
                    justify = "flex-start"
                    alignItems = "flex-start"
                >  
                    {comps}
                </Grid> */}
                <Grid container
                    className={classes.gridDown}
                >
                    <PaginationPart companies = {comps}/>
                </Grid>  
            </Grid>
            
        );  
}
export default CompaniesBar;