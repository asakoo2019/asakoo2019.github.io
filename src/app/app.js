import React from 'react';
import { withStyles } from '@material-ui/core/styles';

import Companies from '../components/companies';


const styles = {
  
};

function App(props) {
  const { classes } = props;
  return (
    <div className={classes.main}>
      <Companies />
    </div>
  );
};

export default withStyles(styles)(App);