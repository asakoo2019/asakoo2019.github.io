import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Grid,  } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    button: {
        margin: theme.spacing(1),
        backgroundColor: '#FE654F',
        fontSize: 18,
        fontWeight: 600,
    },
    
}));

function PaginationBar({ maxPageButton, otherCopmanies }) {
    const classes = useStyles();
    function handleChange (i) {
        return otherCopmanies(i)
    }
    const button = () => {
        let result = [];
        for (let i = 1; i <= maxPageButton; i++) {
            result.push(<Button
                className={classes.button}
                size="small"
                variant="contained"
                key={`${i}`}
                onClick={() => handleChange(i)}
            >
                {i}
            </Button>)
        }
        return result
    }

    return (
        <Grid container
            alignItems="flex-start"
            className={classes.root}
        >
            {button()}
        </Grid>

    );
}
export default PaginationBar;