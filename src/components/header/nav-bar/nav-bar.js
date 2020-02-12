import React from 'react';
import { Switch, Route, Redirect, NavLink } from "react-router-dom";
import {makeStyles, withWidth, Grid, Hidden, Button } from '@material-ui/core';
import PropTypes from 'prop-types';
import Companies from '../../companies';
import Jobs from '../../jobs';
import HomePageContainer from '../../home-page-container';
import SignIn from '../../sign-in';
import Registration from '../../registration';
import UserProfile from '../../user-profile';
import CompanyProfile from '../../company-profile';
import SettingsToggleMenu from '../../settings-toggle-menu';
import { connect } from 'react-redux';
import JobSingle from '../../jobs/job-single';
import CompaniesSinglePage from '../../company-single-page';

const useStyles = makeStyles(theme => ({
  navItem: {
    padding: 15,
    borderRight: '1px solid rgb(190, 190, 190)',
  },
  navRightItem: {
    padding: 15,
    borderLeft: '1px solid rgb(190, 190, 190)',
  },
}));

const mStP = (state) => ({
  user: state,
});

const NavBar = ({id, showItems, dispatch, setShowItems}) => {
  const classes = useStyles();
  const regAndLogArray = [<NavLink key={1} to="/sign-in" activeClassName='active' className={classes.navRightItem}>Sign In</NavLink>, <NavLink key={2} to="/registration" activeClassName='active' className={classes.navRightItem}>Registration</NavLink>];

  function handleChange() {
    dispatch({ type: 'SEARCH-OFF' });
  };

  return (
    <>
      <nav>
        <Hidden xsDown>
          <Grid container
            alignItems='center'
          >
            <Grid item xs={7} sm={7} md = {7} lg = {7} xl = {7}>
              <Grid container >
                <NavLink to="/home" activeClassName='active' className={classes.navItem}>Home</NavLink>
                <NavLink to="/jobs" activeClassName='active' className={classes.navItem} onClick={handleChange}>Jobs</NavLink>
                <NavLink to="/companies" activeClassName='active' className={classes.navItem} onClick={handleChange}>Companies</NavLink>
              </Grid>

            </Grid>
            <Grid item xs={5} sm={5} md = {5} lg = {5} xl = {5}>
              <Grid container justify='flex-end'>
                {showItems ? <SettingsToggleMenu setShowItems={setShowItems} /> : regAndLogArray}
              </Grid>

            </Grid>
          </Grid>
        </Hidden>
        <Hidden smUp>
          <Grid container>
          <Button
          
          >
            menu
          </Button>
          </Grid>
        </Hidden>
      </nav>
      <Switch>
        <Route exact path="/jobs" component={Jobs} />
        <Route exact path="/jobs/:id" zz component={JobSingle} />
        <Route exact path="/companies" component={Companies} />
        <Route exact path="/companies/:id" component={CompaniesSinglePage} />
        <Route exact path="/sign-in" component={SignIn} />
        <Route exact path="/registration" component={Registration} />
        <Route exact path="/employee/:id">
          <UserProfile id={id} showItems={showItems} />
        </Route>
        <Route exact path="/employer/:id">
          <CompanyProfile id={id} showItems={showItems} />
        </Route>
        <Route path="/home" component={HomePageContainer} />
        <Redirect to="/home" />
      </Switch>
    </>
  );
};

NavBar.propTypes = {
  width: PropTypes.oneOf(['lg', 'md', 'sm', 'xl', 'xs']).isRequired,
};

export default connect(mStP)(withWidth()(NavBar));