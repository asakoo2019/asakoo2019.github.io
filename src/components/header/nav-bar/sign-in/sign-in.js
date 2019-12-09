import React from 'react';
import './sign-in.css';

import { withStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';

const styles = {

};

const SignIn = (props) => {
  const {classes} = props;
  return (
    <Button>
      Sign In
    </Button>
  );
};

export default withStyles(styles)(SignIn);