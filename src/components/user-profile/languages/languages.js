import React from 'react';
import { Grid, Button } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';

const Languages = (props) => {
  const {user} = props;

  const deleteItem = (id) => {
    const index = user.userLanguages.findIndex((el) => el.id === id);
    const newArray = [
      ...user.userLanguages.slice(0, index),
      ...user.userLanguages.slice(index + 1)
    ];
    props.setUserLanguages(newArray);
  };

  let language;

  if (user.userLanguages){
    language = user.userLanguages.map((item) => {
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
            {props.setUserLanguages && <Button variant="outlined" color='primary' onClick={() => deleteItem(item.id)}>
              <DeleteIcon color='error'/>
            </Button>}
          </Grid>
        </Grid>
      );
    });
  };

  return (
    <>
      {language}
    </>
  );
};

export default Languages;