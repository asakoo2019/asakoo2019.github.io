import React, { useEffect } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { BrowserRouter as Router } from "react-router-dom";
import store from '../components/react-redux/store';
import {Provider} from 'react-redux';
import Header from '../components/header';
import NavBar from '../components/header/nav-bar'
import Footer from '../components/footer';
import { auth } from '../components/firebase/db';

const styles = {
  
};

function App(props) {
const {dispatch} = props;
  useEffect(() => {
    let unmounted = false;
    // const pathName = history.location.pathname;
    // const LastSleshIndex = pathName.lastIndexOf('/');
    // const searchId = pathName.slice(LastSleshIndex + 1);
    auth.onAuthStateChanged((logedInCompany) => {
      debugger;
      // if (logedInCompany) {
      //   dispatch({type: "SIGN-IN", payload: company});
      //   // if (!searchId) {
      //   //   setId(logedInCompany.uid);
      //   //   // dispatch({type: "SIGN-OUT", payload: company});
      //   // } else {
      //   //   setId(searchId);
      //   // }
      // } else {
      //   if(!unmounted){
      //     setId(searchId);
      //   };
      // };
    });
    return () => {
      unmounted = true;
    };
  }, []);

  // const { classes } = props;
  return (
    <Provider store = {store}>
      <Router>
       <Header />
       <NavBar />
       <Footer />
     </Router>
    </Provider>
  );
};

export default withStyles(styles)(App);