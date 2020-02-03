import React from 'react';
import { Grid, Button } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import { withStyles } from "@material-ui/core/styles";
import { firestore } from '../../firebase/db';
import { connect } from 'react-redux';
import UserLanguageCangeModal from '../modals/user-language-cange-modal';

const style = {
  languageBtn: {
    padding: '5px !important',
    minWidth: 0,
  },
};

const Languages = (props) => {
  const { user, classes, showItems, dispatch } = props;

  const deleteItem = (id) => {
    const index = user.userLanguages.findIndex((el) => el.id === id);
    const newArray = [
      ...user.userLanguages.slice(0, index),
      ...user.userLanguages.slice(index + 1)
    ];
    firestore.collection("users").doc(props.id)
    .update({
      userLanguages: newArray
    }).catch(function(error) {
      console.error("Error updating document: ", error);
    });
    dispatch({type: "SIGN-IN", payload: {...user, userLanguages: newArray}});
  };

  let language;

  if (user.userLanguages){
    language = user.userLanguages.map((item) => {
      return (
        <Grid container
          key={item.id}
          alignItems='center'>
          <Grid item xs={12} sm={4}>
            <h6>{item.language}</h6>
          </Grid>
          <Grid item xs={12} sm={7}>
            <p>{item.level}</p>
          </Grid>
          <Grid container item xs={12} sm={1} justify="center">
            <Grid item>
              {showItems && <UserLanguageCangeModal user={user} id={item.id} level={item.level} language={item.language} showItems={showItems}/>}
            </Grid>
            <Grid item>
              {showItems && <Button className={classes.languageBtn} color='primary' onClick={() => deleteItem(item.id)}>
                <DeleteIcon color='error'/>
              </Button>}
            </Grid>
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

export default connect()(withStyles(style)(Languages));