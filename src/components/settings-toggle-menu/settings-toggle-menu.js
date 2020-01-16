import React, { useState, useRef, useEffect } from 'react';
import { Button, Paper, Popper, MenuItem, MenuList, Grid } from '@material-ui/core';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import { makeStyles } from '@material-ui/core/styles';
import { auth, firestore } from '../firebase/db'
import DeleteAccountDialog from './delete-account-dialog';
import ChangePasswordDialog from './change-password-dialog';
import { useHistory } from "react-router-dom";
import { connect } from 'react-redux';
import { Switch, Route, Link, Redirect } from "react-router-dom";
// import { Grid } from '@material-ui/core';


// import AccountCircleIcon from '@material-ui/icons/AccountCircle';

const useStyles = makeStyles({
  toggleBtn: {
    marginRight: 40,
  },
  myProfile: {
    marginRight: 10,
  }
});

const mStP = (state) => ({
  user: state,
});

function SettingsToggleMenu(props) {
  let {registrationType, id, dispatch} = props.user;
  registrationType = !!registrationType ?  registrationType.toLowerCase() : '';
  const link = `/${registrationType}/${id}`;
  const [open, setOpen] = useState(false);
  const anchorRef = useRef(null);
  const history = useHistory();
  const classes = useStyles();

  const handleToggle = () => {
    setOpen(prevOpen => !prevOpen);
  };
  function handleListKeyDown(event) {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpen(false);
    };
  };

  function deleteAccount() {
    const user = auth.currentUser;
    user.delete().then(function() {
      const collectionName = props.user.registerType === 'Employee' ? 'companies' : 'users';
      const userId = props.user.id;
    //   let removedArray = [];
    //   firestore.collection(collectionName).get().then(function(querySnapshot) {
    //     querySnapshot.forEach(doc => {
    //         if (doc.id !== userId) {
    //           removedArray.push(doc);
    //         }
    //     })
    // }).catch(function(error) {
    //     console.error("Error removing document: ", error);
    // });

    firestore.collection(collectionName).doc(userId).delete().then(function() {
      console.log("Document successfully deleted!");
    }).catch(function(error) {
      console.error("Error removing document: ", error);
    });
      dispatch({type: 'SIGN-OUT'});
      history.replace('/');
    }).catch(function(error) {
     console.log(error);
    });
  };

  function signOut() {
    auth.signOut().then(function() {
      dispatch({type: 'SIGN-OUT'});
      history.replace('/');
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

  const prevOpen = useRef(open);

  useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    };
    prevOpen.current = open;
  }, [open]);

  return (
    <>
      <Grid alignItems="center">
      <Link to= {link}>My Profile</Link>
    
      <Button className={classes.toggleBtn}
        ref={anchorRef}
        aria-controls={open ? 'menu-list-grow' : undefined}
        aria-haspopup="true"
        onClick={handleToggle}>
        <ArrowDropDownIcon/>
      </Button>
      </Grid>
      <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
        <Paper>
          <MenuList autoFocusItem={open} id="menu-list-grow" onKeyDown={handleListKeyDown}>
            <ChangePasswordDialog changePassword = {changePassword}/>
            <DeleteAccountDialog deleteAccount = {deleteAccount}/>
            <MenuItem onClick={signOut}>Sign out</MenuItem>
          </MenuList>
        </Paper>
      </Popper>
    </>
  );
};

export default connect(mStP)(SettingsToggleMenu);
