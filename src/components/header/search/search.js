import React from 'react';
import './search.css';

import { withStyles } from '@material-ui/core/styles';
import { TextField, Checkbox, Grid } from '@material-ui/core';
import { FormControlLabel, FormControl } from '@material-ui/core';

import SearchIcon from '@material-ui/icons/Search';

const styles = {
  
};



class Search extends React.Component {

  constructor (props) {
    super(props);
    this.state = {
      term: ''
    };
  };

  render () {
    const {classes} = this.props;

    function CheckboxesGroup() {
      const [state, setState] = React.useState({
        jobsChecked: false,
        companiesChecked: false
      });

      const handleChange = name => event => {
        setState({ ...state, [name]: event.target.checked });
      };

      const { jobsChecked, companiesChecked } = state;

      return (
        <FormControl component="fieldset">
          <Grid container>
              <FormControlLabel
                control={<Checkbox checked={jobsChecked} onChange={handleChange('jobsChecked')} value="jobsChecked" />}
                label="Jobs"
              />
              <FormControlLabel
                control={<Checkbox checked={companiesChecked} onChange={handleChange('companiesChecked')} value="companiesChecked" />}
                label="Companies"
              />
          </Grid>
        </FormControl>
      );
    };

    return (
      <Grid container>
        <Grid container spacing={1} alignItems="flex-end">
          <Grid item>
            <TextField className={classes.appSearch} id="input-with-icon-grid" label="Search" />
          </Grid>
          <Grid item>
            <SearchIcon />
          </Grid>
        </Grid>
        <CheckboxesGroup />
      </Grid>
  )};
};

export default withStyles(styles)(Search);