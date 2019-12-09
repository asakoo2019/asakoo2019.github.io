import React from 'react';
import './nav-bar.css';

import { withStyles } from '@material-ui/core/styles';
import {Button, Grid} from '@material-ui/core';

const styles = {
  navBtn: {
    backgroundColor: '#FE654F'
  }
};

class NavBar extends React.Component {
  constructor(props) {
    super(props);
  };

  render () {
    const { classes } = this.props;
    return (
      <nav>
        <Grid container
              justify="space-between">
          <Button variant='contained'
                  className={classes.navBtn}>
            Jobs
          </Button>
          <Button variant='contained'
                  className={classes.navBtn}>
            Companies
          </Button>
          <Button variant='contained'
                  className={classes.navBtn}>
            Blog
          </Button>
          <Button variant='contained'
                  className={classes.navBtn}>
            Sign In
          </Button>
          <Button variant='contained'
                  className={classes.navBtn}>
            Registration
          </Button>
        </Grid>
      </nav>
    );
  };
};

export default withStyles(styles)(NavBar);