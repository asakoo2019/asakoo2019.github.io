import React, { useState, useEffect } from 'react';
import { Grid, Button } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';

const Languages = (props) => {
  const {user} = props;
  const [element, setElement] = useState([]);

  useEffect(() => {
    if (user.userLanguages){
      const language = user.userLanguages.map((item) => {
        return (
          <Grid container
            key={item.id}>
            <Grid item xs={3}>
              <h6>{item.language}</h6>
            </Grid>
            <Grid item xs={8}>
              <p>{item.level}</p>
            </Grid>
            <Grid item xs={1}>
              {props.setUserLanguages && <Button variant="outlined" color='primary' onClick={()=>{console.log(item.id)}}>
                <DeleteIcon color='error'/>
              </Button>}
            </Grid>
          </Grid>
        );
      });
      setElement(language);
    };
  }, [user.userLanguages]);

  return (
    <>
      {element}
    </>
  );
};

export default Languages;