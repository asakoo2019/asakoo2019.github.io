import React from 'react';
import './search.css';

import { withStyles } from '@material-ui/core/styles';
import { TextField } from '@material-ui/core';

const styles = {
  appSearch: {
    margin: 10
  }
};

class Search extends React.Component {

  constructor (props) {
    super(props);
    this.state = {
      term: ''
    };
  };

  onSearchChange = (e) => {
    const term = e.target.value;
    this.setState({term});
  };

  render () {
    const {classes} = this.props;
    return <TextField
          className={classes.appSearch}
          label='Search'
          variant="outlined"
          size='small'
          value={this.state.term}
          onChange={this.onSearchChange} />;
  };
};

export default withStyles(styles)(Search);