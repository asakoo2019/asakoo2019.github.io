import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import {Grid} from '@material-ui/core';


const styles = {
  aboutUsContainer: {
    textAlign: 'justify',
    background: 'linear-gradient(to right, rgba(244, 67, 54, 0.2), rgba(76, 175, 80, .2))',
    borderRadius: 10,
    padding: 20
  }
};

const AboutUs = (props) => {
  const {classes} = props;
  return (
    <Grid className="aboutAs"
          container
          justify='center'>
      <h2 className={classes.aboutUsTitle}>About Us</h2>
      <h5 className={classes.aboutUsContainer}>Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Excepturi earum dicta sequi odio sit consectetur expedita, cum, pariatur, in enim porro voluptas!
          Mollitia omnis aspernatur quia ullam incidunt odio animi.
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Excepturi earum dicta sequi odio sit consectetur expedita, cum, pariatur, in enim porro voluptas!
          Mollitia omnis aspernatur quia ullam incidunt odio animi.
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Excepturi earum dicta sequi odio sit consectetur expedita, cum, pariatur, in enim porro voluptas!
          Mollitia omnis aspernatur quia ullam incidunt odio animi.
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Excepturi earum dicta sequi odio sit consectetur expedita, cum, pariatur, in enim porro voluptas!
          Mollitia omnis aspernatur quia ullam incidunt odio animi.
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Excepturi earum dicta sequi odio sit consectetur expedita, cum, pariatur, in enim porro voluptas!
          Mollitia omnis aspernatur quia ullam incidunt odio animi.
      </h5>
    </Grid>
  );
};

export default withStyles(styles)(AboutUs);