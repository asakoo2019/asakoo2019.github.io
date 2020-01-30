import React from 'react';
import {Grid, Button, Avatar} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory, useRouteMatch } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(2),
  },
}));

function CompanyItem({ currentCompany }) {
  const classes = useStyles();
  const history = useHistory();
  const match = useRouteMatch();

  return (
    <Grid container
      className={classes.root}
    >
      <Grid
        item xs={4}
      >
        <Grid
          container
          direction="row"
          justify="flex-start"
          alignItems="center"
        >
          <Avatar src={currentCompany.companyImage} />
          <span> {currentCompany.companyName}<br />{currentCompany.companyViewCount} total views </span>

        </Grid>

      </Grid>
      <Grid
        item xs={6}
      >
        <span>Active jobs({currentCompany.companyJobs.length})</span>
      </Grid>
      <Grid
        item xs={2}
      >
        <Button onClick={() => { history.push(`${match.url}/${currentCompany.id}`) }} >
          View More
        </Button>
      </Grid>
    </Grid>
  );
}

export default CompanyItem;