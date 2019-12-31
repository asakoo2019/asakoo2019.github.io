import React, { useState, useEffect } from 'react';
import { Grid, Button } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import CreateIcon from '@material-ui/icons/Create';

const Experiences = (props) => {
  const {user} = props;
  const [element, setElement] = useState([]);

  useEffect(() => {
    if (user.userWorkExperience){
      const experience = user.userWorkExperience.map((item) => {
        return (
          <Grid container
            key={item.id}>
            <Grid item xs={4}>
              <h6>{item.companyName}</h6>
            </Grid>
            <Grid item xs={3}>
              <p>{item.jobTitle}</p>
            </Grid>
            <Grid item xs={3}>
              <p>{`${item.from} - ${item.to}`}</p>
            </Grid>
            <Grid item xs={1}>
              {props.setUserWorkExperience && <Button variant="outlined" color='primary' onClick={()=>{console.log(item.id)}}>
                <DeleteIcon color='error'/>
              </Button>}
            </Grid>
            <Grid item xs={1}>
              {props.setUserWorkExperience && <Button variant="outlined" color='primary' onClick={()=>{console.log(item.id)}}>
                <CreateIcon color='error'/>
              </Button>}
            </Grid>
            <Grid item xs={12}>
              <p>{item.jobDetails}</p>
            </Grid>
          </Grid>
        );
      });
      setElement(experience);
    };
  }, [user.userWorkExperience]);

  return (
    <>
      {element}
    </>
  );
};

export default Experiences;