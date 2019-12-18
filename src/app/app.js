import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { BrowserRouter as Router } from "react-router-dom";


import SignIn from '../components/sign-in';


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