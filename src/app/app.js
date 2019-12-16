import React from 'react';
import { withStyles } from '@material-ui/core/styles';

import Header from '../components/header';
import NavBar from '../components/header/nav-bar'
import Footer from '../components/footer';


const styles = {
  
};

function App(props) {
  const { classes } = props;
  return (
    <div className={classes.main}>
      <Header />
      <NavBar />
      <Footer />
    </div>
  );
};

export default withStyles(styles)(App);