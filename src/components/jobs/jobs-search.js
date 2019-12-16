import React, {Component} from 'react';
import Grid from '@material-ui/core/Grid';
import LeftSideJob from './left-side-job';

class JobsSearch extends Component {

  render() {
    return (
      <Grid item xs={3}  className='jobs-search'>
              <div className='clear-filter'>
                <h4>Clear filters</h4>
              </div>
              <div>
                <h3>Filter by job category</h3>
              </div>
              <div className='jobs-category'>

                <LeftSideJob />
  
              </div>
            </Grid>
  )
  }
   
}

export default JobsSearch;