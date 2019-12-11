import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Header from '../components/header';
import Blog from '../components/blog';
import Conpanies from '../components/companies';
import Jobs from '../components/jobs';
import HomePageContainer from '../components/home-page-container';
import SignIn from '../components/sign-in';
import Registration from '../components/registration';
import Footer from '../components/footer';

const styles = {
  
};

function App(props) {
  const { classes } = props;
  return (
    <div className={classes.main}>
      <Header />
      <Router>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/jobs">Jobs</Link>
          <Link to="/companies">Conpanies</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/sign-in">Sign In</Link>
          <Link to="/registration">Registration</Link>
        </nav>
        <Switch>
            <Route exact path="/jobs">
              <Jobs />
            </Route>
            <Route exact path="/companies">
              <Conpanies />
            </Route>
            <Route exact path="/blog">
              <Blog />
            </Route>
            <Route exact path="/sign-in">
              <SignIn />
            </Route>
            <Route exact path="/registration">
              <Registration />
            </Route>
             <Route path="/">
              <HomePageContainer />
            </Route>
          </Switch>
      </Router>
      <Footer />
    </div>
  );
};

export default withStyles(styles)(App);