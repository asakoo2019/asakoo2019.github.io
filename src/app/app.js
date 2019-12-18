import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { BrowserRouter as Router } from "react-router-dom";


import SignIn from '../components/sign-in';


const styles = {
  
};

function App(props) {
  // const { classes } = props;
  return (
<<<<<<< HEAD
    <Router>
      <Header />
      <NavBar />
      <Footer />
    </Router>
=======
    <div className={classes.main}>
      <SignIn />
    </div>
>>>>>>> c2d9706d663f506b62a90d0167e2b5a5afedb4ee
  );
};

export default withStyles(styles)(App);