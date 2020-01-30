import React from 'react';
import CompanyItem from './company-item';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import { Grid } from '@material-ui/core';


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

export default function CompaniesBar({ employer, otherCopmanies, currPage }) {
    const classes = useStyles();
    const comps = employer.slice(currPage - 10, currPage).map((item) => {
        return (
            <CompanyItem
                key={`${item.id}`}
                currentCompany={item}
            />
        );
    });
    function handleChange (e, i){
        return otherCopmanies(e, i)
    }
    const button = (arr) => {
        let maxButtons = Math.ceil(arr.length / 10);
        let result = [];
        if (maxButtons > 1) {
            for (let i = 1; i <= maxButtons; i++) {
                result.push(<Button
                    key={`${i}`}
                    onClick={(e) => handleChange(e, i)}
                >
                    {i}
                </Button>)
            }
        }
        return result
    }

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
                <span>1 - 10 company results from {employer.length} total companies on asd.am</span>
            </Grid>
            <Grid container
                direction="column"
                justify="flex-start"
                alignItems="flex-start"
            >
                {comps}
            </Grid>
            <Grid container
                className={classes.gridDown}
            >
                {button(employer)}
            </Grid>
        </Grid>
    );
}