import React from 'react';
import appLogo from './topteam.jpg';
import './logo.css';

const Logo = () => {
  return (
    <img className='app-logo' src={appLogo} alt='TopTeam'/>
  );
};

export default Logo;