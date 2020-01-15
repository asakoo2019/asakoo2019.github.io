import React, { useState, useRef, useEffect } from 'react';
import { Button, Paper, Popper, MenuItem, MenuList } from '@material-ui/core';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import { makeStyles } from '@material-ui/core/styles';
import { auth } from '../firebase/db'
import DeleteAccountDialog from './delete-account-dialog';
import ChangePasswordDialog from './change-password-dialog';
import { useHistory } from "react-router-dom";
import { connect } from 'react-redux';

const useStyles = makeStyles({
  toggleBtn: {
    marginRight: 40,
  },
});

function SettingsToggleMenu(props) {
  const {dispatch} = props;
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
      <Button className={classes.toggleBtn}
        ref={anchorRef}
        aria-controls={open ? 'menu-list-grow' : undefined}
        aria-haspopup="true"
        onClick={handleToggle}>
        <ArrowDropDownIcon/>
      </Button>
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

export default connect()(SettingsToggleMenu);
