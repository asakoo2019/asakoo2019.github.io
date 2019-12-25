import React from 'react';
import './header.css';
import { Grid } from '@material-ui/core';

import Logo from './logo';
import Search from './search';

class Header extends React.Component {

  render () {
    return (
      <header>
        <Grid container
          alignItems="center">
          <Grid container item xs={1}
            justify='center'>
            <Logo />
          </Grid>
          <Grid item xs={1}>
          </Grid>
          <Grid item xs={10}>
            <Search />
          </Grid>
        </Grid>
      </header>
    );
  };
};

export default Header;