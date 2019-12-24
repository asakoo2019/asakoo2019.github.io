import React from 'react';
import CompanyItem from './company-item';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import {Grid} from '@material-ui/core';
//import PaginationPart from './pagein'



const styles = makeStyles(theme => ({
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

class  CompaniesBar extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            currPage: 10,
        }
        this.otherCopmanies = this.otherCopmanies.bind(this)    
    }
    otherCopmanies (e) {
        //debugger
        let num = e.target.innerHTML;
        let a  = num * 10;
        console.log(a)
        this.setState(state => ({
          currPage: a
        }));
    }
    render () {
        //const { classes } = styles.theme;
        const comps = this.props.employer.slice (this.state.currPage - 10, this.state.currPage).map((item, index) => {
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
                    onClick = {this.otherCopmanies}
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
            //className={classes.root}

        >   
            <Grid container
                alignItems="flex-start"
                //className={classes.gridUp}    
            >
                <span>1 - 10 company results from {this.props.employer.length} total companies on asd.am</span>
            </Grid>
            <Grid container
                direction = "column"
                justify = "flex-start"
                alignItems = "flex-start"
            >  
                {comps}
            </Grid> 
            <Grid container
                // className={classes.gridDown}
            >
                {button(this.props.employer)}
            </Grid>  
        </Grid>
        
        );  
    }
        
        
}
export default CompaniesBar;