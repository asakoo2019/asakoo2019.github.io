import React, {useState}from 'react';
import { Switch, Route, Redirect, NavLink } from "react-router-dom";
import { makeStyles, withWidth, Grid, Hidden, IconButton, Menu, MenuItem } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu'
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
    [theme.breakpoints.up('sm')]:{
      padding: 15,
      borderRight: '1px solid rgb(190, 190, 190)',
    }
  },
  navRightItem: {
    [theme.breakpoints.up('sm')]:{
      padding: 15,
      borderLeft: '1px solid rgb(190, 190, 190)',
    }
  },
  menuButton: {
    marginLeft: theme.spacing(2)
  },
}));

const mStP = (state) => ({
  user: state,
});

const NavBar = ({ id, showItems, dispatch, setShowItems, width }) => {
  const classes = useStyles();
  const regAndLogArray = [
    <NavLink key={1} to="/sign-in" activeClassName='active' className={classes.navRightItem}>Sign In</NavLink>, 
    <NavLink key={2} to="/registration" activeClassName='active' className={classes.navRightItem}>Registration</NavLink>
  ];
    function handleChange() {
    dispatch({ type: 'SEARCH-OFF' });
  };


  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const leftPart = (<Grid container >
    <NavLink to="/home" activeClassName='active' className={classes.navItem}>Home</NavLink>
    <NavLink to="/jobs" activeClassName='active' className={classes.navItem} onClick={handleChange}>Jobs</NavLink>
    <NavLink to="/companies" activeClassName='active' className={classes.navItem} onClick={handleChange}>Companies</NavLink>
  </Grid>
  );
  const rightPart = (<Grid container justify='flex-end'>
      {showItems ? <SettingsToggleMenu setShowItems={setShowItems} /> : regAndLogArray}
    </Grid>
  );
  return (
    <>
      <nav>
        <Hidden xsDown>
          <Grid container
            alignItems='center'
          >
            <Grid item xs={7} sm={7} md={7} lg={7} xl={7}>
              {leftPart}
            </Grid>
            <Grid item xs={5} sm={5} md={5} lg={5} xl={5}>
              {rightPart}
            </Grid>
          </Grid>
        </Hidden>
        <Hidden smUp>
          <Grid container>
            <IconButton 
              aria-controls="topteam-menu" 
              aria-haspopup="true" 
              onClick = {handleClick}
            >
              <MenuIcon/>          
            </IconButton>
            <Menu
              id="topteam-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose}> <NavLink to="/home" activeClassName='active' className={classes.navItem}>Home</NavLink></MenuItem>
              <MenuItem onClick={handleClose}><NavLink to="/jobs" activeClassName='active' className={classes.navItem} onClick={handleChange}>Jobs</NavLink></MenuItem>
              <MenuItem onClick={handleClose}><NavLink to="/companies" activeClassName='active' className={classes.navItem} onClick={handleChange}>Companies</NavLink></MenuItem>
              {showItems ?  <MenuItem><SettingsToggleMenu setShowItems={setShowItems} /></MenuItem>: null}
              {!showItems ?  <MenuItem onClick={handleClose}>{regAndLogArray[0]}</MenuItem>: null}
              {!showItems ?  <MenuItem onClick={handleClose}>{regAndLogArray[1]}</MenuItem>: null}             
            </Menu>
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