import React from 'react';
import './header.css';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import Logo from './logo';
import Search from './search';
import NavBar from './nav-bar';

const styles = {

};

class Header extends React.Component {
  constructor(props) {
    super(props);
  };
  render () {
    const { classes } = this.props;
    return (
      <header>
        <Grid container
              alignItems="center">
          <Grid item xs={1}>
            <Logo />
          </Grid>
          <Grid item xs={4}>
            <Search />
          </Grid>
          <Grid item xs={7}>
            <NavBar />
          </Grid>
        </Grid>
      </header>
    );
  };
};

export default withStyles(styles)(Header);