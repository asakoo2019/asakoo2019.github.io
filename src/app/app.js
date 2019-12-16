import React from 'react';
import { withStyles } from '@material-ui/core/styles';

import Jobs from '../components/jobs';
<<<<<<< HEAD
=======

>>>>>>> fc1045fd00ce56a6988939827c993bc7224d99a5

const styles = {
  
};

function App(props) {
  const { classes } = props;
  return (
    <div className={classes.main}>
      <Jobs />
    </div>
  );
};

export default withStyles(styles)(App);