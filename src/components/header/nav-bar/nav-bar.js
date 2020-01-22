import React from 'react';
import './nav-bar.css';
import { Switch, Route, Redirect, NavLink } from "react-router-dom";
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
import CompaniesSinglePage from '../../companies/single-page/company-single-page';

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
  const regAndLogArray = [<NavLink key={1} to="/sign-in" activeClassName='active' className={classes.navItem}>Sign In</NavLink>,
                          <NavLink key={2} to="/registration" activeClassName='active' className={classes.navItem}>Registration</NavLink>];
  return (
    <>
      <nav>
        <Grid container
          alignItems='center'>
          <Grid item xs={8}
            container
            justify='flex-start'>
            <NavLink to="/home" activeClassName='active' className={classes.navItem}>Home</NavLink>
            <NavLink to="/jobs" activeClassName='active' className={classes.navItem}>Jobs</NavLink>
            <NavLink to="/companies" activeClassName='active' className={classes.navItem}>Companies</NavLink>
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
        <Route exact path="/companies/:id" component={CompaniesSinglePage} />
        <Route exact path="/sign-in" component={SignIn} />
        <Route exact path="/registration" component={Registration} />
        <Route exact path="/employee/:id" component={UserProfile} />
        <Route exact path="/employer/:id" component={CompanyProfile} />
        <Route path="/home" component={HomePageContainer} />
        <Redirect to="/home" />
      </Switch>
    </>
  );
};

export default connect(mStP)(withStyles(styles)(NavBar));