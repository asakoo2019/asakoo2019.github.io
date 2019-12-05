import React from 'react';
import './header.css';

import Logo from './logo/logo';
import Search from './search/search';
import NavBar from './nav-bar/nav-bar';

export default class Header extends React.Component {
  render () {
    return (
      <header>
        <Logo />
        <Search />
        <NavBar />
      </header>
    );
  };
};