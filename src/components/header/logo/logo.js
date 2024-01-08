import React from 'react';
import appLogo from './topteam.png';
import { useHistory } from "react-router-dom";

const Logo = () => {
  let history = useHistory();

  const handleClick = () => {
    history.push("/home");
  };
  
  return (
    <img className='app-logo' src={appLogo} alt='TopTeam' onClick={handleClick}/>
  );
};

export default Logo;