import React from 'react';
import { Grid } from '@material-ui/core';
import Logo from './logo';
import Search from './search';

const Header = () => {
  return (
    <header>
      <Grid container
        alignItems="center">
        <Grid container item xs={12} sm={2}
          justify='flex-start'>
          <Logo />
        </Grid>
        <Grid container item xs={12} sm={10}
          justify='center'>
          <Search />
        </Grid>
      </Grid>
    </header>
  );
};

export default Header;