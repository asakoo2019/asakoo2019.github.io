import React from 'react';
import './nav-bar.css';

import SignIn from './sign-in/sign-in';
import SignUp from './sign-up/sign-up';

export default class NavBar extends React.Component {
  render () {
    return (
      <nav>
        <a href='#s'>Աշխատանք</a>
        <a href='#s'>Ընկերություններ</a>
        <a href='#s'>Բլոգ</a>
        <SignIn/>
        <SignUp/>
      </nav>
    );
  };
};