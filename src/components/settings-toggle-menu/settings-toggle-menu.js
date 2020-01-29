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
  data: state,
});

function SettingsToggleMenu(props) {
  let { data } = props;
  data = data ? data : {};
  let {registrationType, id} = data;
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
  };

  function deleteAccount() {
    props.setShowItems(false);
    history.replace('/home');
    dispatch({type: 'SIGN-OUT'});
    const data = auth.currentUser;
    const collectionName = props.data.registrationType === 'Employee' ? 'users' : 'companies';
    const dataId = props.data.id;
    data.delete().then(function() {
    }).catch(function(error) {
     console.log(error);
    });
    firestore.collection(collectionName).doc(dataId).delete().then(function() {
      console.log("Document successfully deleted!");
    }).catch(function(error) {
      console.error("Error removing document: ", error);
    });
  };

  function signOut() {
    auth.signOut().then(function() {
      props.setShowItems(false);
      history.replace('/home');
      dispatch({type: 'SIGN-OUT'});
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
