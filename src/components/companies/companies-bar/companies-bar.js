import React from 'react';
import CompanyItem from './items-block';
import CompaniesBarTop from './companies-top-bar';
import PaginationBar from './pagination-bar';
import { Grid, makeStyles } from '@material-ui/core';


const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        marginTop: theme.spacing(1),
    },
    gridSpace: {
        padding: theme.spacing(1),
        width: '100%',
    },
}));

export default function CompaniesBar({ employer, otherCopmanies, currPage, length }) {
    const classes = useStyles();
    const maxPageButton = Math.ceil(length / 10);

    return (

        <Grid container
            direction="column"
            justify="flex-start"
            alignItems="flex-start"
            className={classes.root}
        >
            <Grid item>
                <CompaniesBarTop length={length} currPage={currPage} />
            </Grid>
            <Grid item
                className={classes.gridSpace}
            >
                <Grid container
                    direction="column"
                    justify="flex-start"
                    alignItems="flex-start"
                >
                    {employer.map((item) => {
                        return (
                            <CompanyItem
                                key={`${item.id}`}
                                currentCompany={item}
                            />
                        );
                    })}
                </Grid>

            </Grid>
            <Grid item
                className={classes.gridSpace}
            >
                {maxPageButton > 1 ? <PaginationBar maxPageButton={maxPageButton} otherCopmanies={otherCopmanies} /> : null}
            </Grid>
        </Grid>
    );
}