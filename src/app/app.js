import React from 'react';
import { withStyles } from '@material-ui/core/styles';

import Jobs from '../components/jobs';

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