import React from 'react';
import './nav-bar.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { withStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';

import Blog from '../../blog';
import Companies from '../../companies';
import Jobs from '../../jobs';
import HomePageContainer from '../../home-page-container';
import SignIn from '../../sign-in';
import Registration from '../../registration';

const styles = {
  navItem: {
    padding: 15
  }
};

const NavBar = (props) => {
  const { classes } = props;
  return (
    <Router>
      <nav>
        <Grid container >
          <Grid item xs={8}
                container
                justify='flex-start'>
          <Link to="/" className={classes.navItem}>Home</Link>
          <Link to="/jobs" className={classes.navItem}>Jobs</Link>
          <Link to="/companies" className={classes.navItem}>Companies</Link>
          <Link to="/blog" className={classes.navItem}>Blog</Link>
          </Grid>
          <Grid item xs={4}
                container
                justify='flex-end'>
            <Link to="/sign-in" className={classes.navItem}>Sign In</Link>
            <Link to="/registration" className={classes.navItem}>Registration</Link>
          </Grid>
        </Grid>
      </nav>
      <Switch>
        <Route exact path="/jobs" component={Jobs} />
        <Route exact path="/companies" component={Companies} />
        <Route exact path="/blog" component={Blog} />
        <Route exact path="/sign-in" component={SignIn} />
        <Route exact path="/registration" component={Registration} />
        <Route path="/" component={HomePageContainer} />
      </Switch>
    </Router>
  );
};

export default withStyles(styles)(NavBar);