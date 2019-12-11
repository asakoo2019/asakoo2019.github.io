import React from 'react';
import './home-page-container.css';
import image from './2.png';

import { withStyles } from '@material-ui/core/styles';
import {Grid, Button, Container} from '@material-ui/core';

const styles = {
  aboutCompany: {
    borderRadius: 10,
    marginTop: 6,
    padding: 8,
    background: 'linear-gradient(to right, rgba(244, 67, 54, 0.2), rgba(76, 175, 80, .2))',
    cursor: 'pointer'
  },
  companyLoadMoreBtn: {
    margin: 20,
    backgroundColor: '#FE654F'
  },
  companyLogo: {
    borderRadius: 10,
    width: '90%'
  },
  aboutCompanyText: {
    textAlign: 'center'
  }
};

const HomePageContainer = (props) => {
  const {classes} = props;
  return (
    <Container>
      <Grid className={classes.companies}
            container
            justify='center'>
        <Grid container
              className={classes.aboutCompany}
              alignItems="center">
          <Grid item xs={2}
                alignItems="center"
                container>
            <img className={classes.companyLogo}
                src={image}
                alt='comp'/>
          </Grid>
          <Grid item xs={10}>
            <h3 className={classes.aboutCompanyText}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, quaerat deleniti!
            Reiciendis dignissimos eligendi numquam sequi exercitationem sunt magni odit quis nostrum ab.</h3>
          </Grid>
        </Grid>
        <Grid container
              className={classes.aboutCompany}
              alignItems="center">
          <Grid item xs={2}
                alignItems="center"
                container>
            <img className={classes.companyLogo}
                src={image}
                alt='comp'/>
          </Grid>
          <Grid item xs={10}>
            <h3 className={classes.aboutCompanyText}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, quaerat deleniti!
            Reiciendis dignissimos eligendi numquam sequi exercitationem sunt magni odit quis nostrum ab.</h3>
          </Grid>
        </Grid>
        <Grid container
              className={classes.aboutCompany}
              alignItems="center">
          <Grid item xs={2}
                alignItems="center"
                container>
            <img className={classes.companyLogo}
                src={image}
                alt='comp'/>
          </Grid>
          <Grid item xs={10}>
            <h3 className={classes.aboutCompanyText}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, quaerat deleniti!
            Reiciendis dignissimos eligendi numquam sequi exercitationem sunt magni odit quis nostrum ab.</h3>
          </Grid>
        </Grid>
        <Button className={classes.companyLoadMoreBtn}
                variant='contained'>
          Load more
        </Button>
      </Grid>
    </Container>
  );
};

export default withStyles(styles)(HomePageContainer);