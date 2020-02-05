import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import {Grid} from '@material-ui/core';

const styles = {
  aboutUsContainer: {
    padding: 15,
    backgroundColor: 'rgb(255, 255, 255)',
    transition: '.3s',
		"&:hover": {
			boxShadow: '0px 0px 10px 3px rgba(0,0,0,0.5)',
			transition: '.3s',
		}
  },
  text: {
    textAlign: 'justify',
  },
  aboutUsTitle: {
    color: '#FE654F',
  },
};

const AboutUs = (props) => {
  const {classes} = props;
  return (
    <Grid className="aboutAs"
      container
      justify='center'>
      <h2 className={classes.aboutUsTitle}>{'about us'.toUpperCase()}</h2>
      <Grid className={classes.aboutUsContainer}>
      <p className={classes.text}>
        We are a team of IT enthusiasts ready to put our efforts and skills into building viable and high quality software. We have graduated the “JavaScript” course at Armenian Code Academy (ACA). In the course of our studies, we have covered such topics as Variables, Operators, Loops, Functions, HTML/CSS, Front-end development base concepts, Arrays, Strings, ES 6.
      </p>
      <br/>
      <p className={classes.text}>
        As our graduation project, we have brought together our efforts to build a job portal called “TopTeam”. We chose this name for our recruitment tool to express the core value and the mission that we strive to achieve:
      </p>
      <br/>
      <h5 className={classes.text}>
        Our product is made to help companies build teams of top performers who are truly passionate about what they do.
      </h5>
      </Grid>
    </Grid>
  );
};

export default withStyles(styles)(AboutUs);