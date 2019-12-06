import React from 'react';
import './nav-bar.css';

import SignIn from './sign-in';
import Registration from './registration';

export default class NavBar extends React.Component {
  render () {
    return (
      <nav>
        <a href='#s'>Աշխատանք</a>
        <a href='#s'>Ընկերություններ</a>
        <a href='#s'>Բլոգ</a>
        <SignIn/>
        <Registration/>
      </nav>
    );
  };
};