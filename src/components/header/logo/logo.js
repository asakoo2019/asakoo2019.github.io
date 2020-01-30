import React from 'react';
import appLogo from './topteam.jpg';
import './logo.css';
import { useHistory } from "react-router-dom";

const Logo = () => {
  function GoHome() {
    let history = useHistory();
    function handleClick() {
      history.push("/");
    };
    return (
      <img className='app-logo' src={appLogo} alt='TopTeam' onClick={handleClick}/>
    );
  };
  return (
    <GoHome/>
  );
};

export default Logo;