import React from 'react';
import { withStyles } from '@material-ui/core/styles';

import SignIn from '../components/sign-in';


const styles = {
  
};

function App(props) {
  const { classes } = props;
  return (
    <div className={classes.main}>
      <SignIn />
    </div>
  );
};

export default withStyles(styles)(App);