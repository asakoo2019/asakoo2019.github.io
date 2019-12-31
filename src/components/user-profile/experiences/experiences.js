import React, { useState, useEffect } from 'react';
import { Grid, Button } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';

const Experiences = (props) => {
  const {user} = props;
  const [element, setElement] = useState([]);

  useEffect(() => {
    if (user.userWorkExperiences){
      const experience = user.userWorkExperiences.map((item) => {
        return (
          <Grid container
            key={item.id}>
            <Grid item xs={3}>
              <h6>{item.companyName}</h6>
            </Grid>
            <Grid item xs={8}>
              <p>{item.jobTitle}</p>
            </Grid>
            <Grid item xs={1}>
              {props.setUserExperiences && <Button variant="outlined" color='primary' onClick={(e)=>{console.log(e)}}>
                <DeleteIcon color='error'/>
              </Button>}
            </Grid>
          </Grid>
        );
      });
      setElement(experience);
    };
  }, [user.userWorkExperiences]);

  return (
    <>
      {element}
    </>
  );
};

export default Experiences;