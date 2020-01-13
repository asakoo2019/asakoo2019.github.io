import React from 'react';
import './nav-bar.css';
import { Switch, Route, Link } from "react-router-dom";
import { withStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import Companies from '../../companies';
import Jobs from '../../jobs';
import HomePageContainer from '../../home-page-container';
import SignIn from '../../sign-in';
import Registration from '../../registration';
import UserProfile from '../../user-profile';
import CompanyProfile from '../../company-profile';
import SettingsToggleMenu from '../../settings-toggle-menu';
import {connect} from 'react-redux';

const styles = {
  navItem: {
    padding: 15,
  },
};

const mStP = (state) => ({
  user: state,
});

const NavBar = (props) => {
  const { classes } = props;
  const regAndLogArray = [<Link key={1} to="/sign-in" className={classes.navItem}>Sign In</Link>,<Link key={2} to="/registration" className={classes.navItem}>Registration</Link>];
  return (
    <>
      <nav>
        <Grid container
          alignItems='center'>
          <Grid item xs={8}
            container
            justify='flex-start'>
            <Link to="/" className={classes.navItem}>Home</Link>
            <Link to="/jobs" className={classes.navItem}>Jobs</Link>
            <Link to="/companies" className={classes.navItem}>Companies</Link>
            <Link to="/user-profile" className={classes.navItem} />
            <Link to="/company-profile" className={classes.navItem} />
          </Grid>
          <Grid item xs={4}
            container
            justify='flex-end'>
            {!props.user ? regAndLogArray : <SettingsToggleMenu/>}
          </Grid>
        </Grid>
      </nav>
      <Switch>
        <Route exact path="/jobs" component={Jobs} />
        <Route exact path="/companies" component={Companies} />
        <Route exact path="/sign-in" component={SignIn} />
        <Route exact path="/registration" component={Registration} />
        <Route exact path="/employee/:id" component={UserProfile} />
        <Route exact path="/employer/:id" component={CompanyProfile} />
        <Route path="/" component={HomePageContainer} />
      </Switch>
    </>
  );
};

export default connect(mStP)(withStyles(styles)(NavBar));