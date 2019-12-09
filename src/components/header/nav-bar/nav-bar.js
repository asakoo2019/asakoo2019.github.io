import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import './nav-bar.css';

import SignIn from './sign-in';
import Registration from './registration';

const styles = {

};

class NavBar extends React.Component {
  constructor(props) {
    super(props);
  };

  render () {
    const { classes } = this.props;
    return (
      <nav>
        <div>
          <Button>
            Jobs
          </Button>
          <Button >
            Companies
          </Button>
          <Button >
            Blog
          </Button>
        </div>
        <div>
          <SignIn/>
          <Registration/>
        </div>          
      </nav>
    );
  };
};

export default withStyles(styles)(NavBar);