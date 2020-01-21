import React, { useState } from 'react';
import { Button, MenuItem, Grid, Menu } from '@material-ui/core';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import { makeStyles } from '@material-ui/core/styles';
import { auth } from '../firebase/db'
import DeleteAccountDialog from './delete-account-dialog';
import ChangePasswordDialog from './change-password-dialog';
import { useHistory } from "react-router-dom";
import { connect } from 'react-redux';
import { NavLink } from "react-router-dom";
import { firestore } from '../firebase/db'

const useStyles = makeStyles({
  toggleBtn: {
    marginRight: 40,
  },
  myProfileBtn: {
    marginRight: 10,
    padding: 15,
  },
});

const mStP = (state) => ({
  user: state,
});

function SettingsToggleMenu(props) {
  let {registrationType, id} = props.user;
  const {dispatch} = props;
  registrationType = !!registrationType ?  registrationType.toLowerCase() : '';
  const link = `/${registrationType}/${id}`;
  const history = useHistory();
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  }

  function deleteAccount() {
    const user = auth.currentUser;
    const collectionName = props.user.registerType === 'Employee' ? 'companies' : 'users';
    const userId = props.user.id;

    user.delete().then(function() {
    }).catch(function(error) {
     console.log(error);
    });

    firestore.collection(collectionName).doc(userId).delete().then(function() {
      console.log("Document successfully deleted!");
    }).catch(function(error) {
      console.error("Error removing document: ", error);
    });
      dispatch({type: 'SIGN-OUT'});
      history.replace('/home');
  };

  function signOut() {
    auth.signOut().then(function() {
      dispatch({type: 'SIGN-OUT'});
      history.replace('/home');
    }).catch(function(error) {
      // An error happened.
    });
  };

  function changePassword(newPassword) {
    auth.currentUser.updatePassword(newPassword).then(function() {
      alert('Your password changed')
    }).catch(function(error) {
      alert(error);
    });
  };

  return (
    <>
      <Grid container
        alignItems="center"
        justify='flex-end'>
        <NavLink to={link} activeClassName="active" className={classes.myProfileBtn}>My Profile</NavLink>
        <Button aria-controls="simple-menu" className={classes.toggleBtn} aria-haspopup="true" onClick={handleClick} >
          <ArrowDropDownIcon/>
        </Button>
      </Grid>
          <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
          >
            <div><ChangePasswordDialog changePassword = {changePassword}/></div>
            <div><DeleteAccountDialog deleteAccount = {deleteAccount}/></div>
            <MenuItem onClick={signOut}>Sign out</MenuItem>
        </Menu>
    </>
  );
};

export default connect(mStP)(SettingsToggleMenu);
