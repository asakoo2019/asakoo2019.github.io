import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { BrowserRouter as Router } from "react-router-dom";

import Header from '../components/header';
import NavBar from '../components/header/nav-bar'
import Footer from '../components/footer';


const styles = {
  
};

function App(props) {
  // const { classes } = props;
  return (
    <Router>
      <Header />
      <NavBar />
      <Footer />
    </Router>
  );
};

export default withStyles(styles)(App);