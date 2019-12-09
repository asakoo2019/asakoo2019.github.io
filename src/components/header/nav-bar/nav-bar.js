import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import {Button, Grid} from '@material-ui/core';
import './nav-bar.css';

const styles = {

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
          <Button>
            Jobs
          </Button>
          <Button >
            Companies
          </Button>
          <Button >
            Blog
          </Button>
          <Button>
            Sign In
          </Button>
          <Button>
            Registration
          </Button>
        </Grid>
      </nav>
    );
  };
};

export default withStyles(styles)(NavBar);