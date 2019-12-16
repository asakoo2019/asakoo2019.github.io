import React from 'react';
import { withStyles } from '@material-ui/core/styles';

import Registration from '../components/registration';


const styles = {
  
};

function App(props) {
  const { classes } = props;
  return (
    <div className={classes.main}>
      <Registration />
    </div>
  );
};

export default withStyles(styles)(App);