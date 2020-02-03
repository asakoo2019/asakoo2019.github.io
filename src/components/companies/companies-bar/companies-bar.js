import React from 'react';
import CompanyItem from './items-block/company-item';
import CompaniesBarTop from './companies-top-bar/comp-top-bar';
import PaginationBar from './pagination-bar/pagination-bar';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';


const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    gridSpace: {
        padding: theme.spacing(2),
        width: '100%',
    },
}));

export default function CompaniesBar({ employer, otherCopmanies, currPage }) {
    const classes = useStyles();
    let maxPageButton = Math.ceil(employer.length / 10);

    return (
        <Grid container
            direction="column"
            justify="flex-start"
            alignItems="flex-start"
        >
            <Grid item
                className={classes.gridSpace}
            >
                <CompaniesBarTop employer={employer} />
            </Grid>
            <Grid item
                className={classes.gridSpace}
            >
                <Grid container
                    direction="column"
                    justify="flex-start"
                    alignItems="flex-start"
                >
                    {employer.slice(currPage - 10, currPage).map((item) => {
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
                { maxPageButton > 1?<PaginationBar employer = {employer} maxPageButton = {maxPageButton} otherCopmanies = {otherCopmanies}/>: null}
            </Grid>
        </Grid>
    );
}