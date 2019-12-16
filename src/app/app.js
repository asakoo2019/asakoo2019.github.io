import React from 'react';
import { withStyles } from '@material-ui/core/styles';

import Blog from '../components/blog';


const styles = {
  
};

function App(props) {
  const { classes } = props;
  return (
    <div className={classes.main}>
      <Blog />
    </div>
  );
};

export default withStyles(styles)(App);