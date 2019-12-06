import React from 'react';
import './header.css';

import Logo from './logo';
import Search from './search';
import NavBar from './nav-bar';

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