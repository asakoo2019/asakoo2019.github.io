import React from 'react';
import { withStyles } from '@material-ui/core/styles';

import Header from '../components/header';
import HomePageContainer from '../components/home-page-container';
import Footer from '../components/footer';

const styles = {
  
};

class App extends React.Component {
  constructor(props) {
    super(props);
  };

  render () {
    const { classes } = this.props;
    return (
      <div className={classes.main}>
        <Header />
        <HomePageContainer />
        <Footer />
      </div>
    );
  };
};

export default withStyles(styles)(App);