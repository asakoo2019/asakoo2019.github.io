import React, { useState, useEffect } from 'react';
import { Grid, Button } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';

const Languages = (props) => {
  const {user} = props;
  const [element, setElement] = useState([]);

  useEffect(() => {
    if (user.userLanguages && user.userLanguages.length !== 0){
      const language = user.userLanguages.map((item, i) => {
        return (
          <Grid container
            key={i}>
            <Grid item xs={3}>
              <h6>{item.language}</h6>
            </Grid>
            <Grid item xs={8}>
              <p>{item.level}</p>
            </Grid>
            <Grid item xs={1}>
              {props.setUserLanguages && <Button variant="outlined" color='primary' onClick={(e)=>{console.log(e)}}>
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