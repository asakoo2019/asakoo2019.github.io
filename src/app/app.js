import React, { useEffect, useState } from 'react';
import Header from '../components/header';
import NavBar from '../components/header/nav-bar'
import Footer from '../components/footer';
import { auth, firestore } from '../components/firebase/db';
import { connect } from 'react-redux';
import { useHistory } from "react-router-dom";

const App = (props) => {
  const history = useHistory();
  const [id, setId] = useState(' ');
  const {dispatch} = props;
  const [showItems, setShowItems] = useState(false);

  useEffect(() => {
    auth.onAuthStateChanged((logedIn) => {
      if (logedIn) {
        setId(logedIn.uid);
        setShowItems(true);
      } else {
        const pathName = history.location.pathname;
        const LastSleshIndex = pathName.lastIndexOf('/');
        const searchId = pathName.slice(LastSleshIndex + 1);
        setId(searchId);
      };
    });
  }, [history.location.pathname]);

  useEffect(() => {
    const docRefUser = firestore.collection("users").doc(id);
    const docRefCompany = firestore.collection("companies").doc(id);
    docRefUser.get().then(function(doc) {
      if (doc.exists) {
        dispatch({type: "SIGN-IN", payload: doc.data()});
      }})
    .catch(function(error) {
      console.log("Error getting document:", error);
    });

    docRefCompany.get().then(function(doc) {
      if (doc.exists) {
        dispatch({type: "SIGN-IN", payload: doc.data()});
      }})
    .catch(function(error) {
      console.log("Error getting document:", error);
    });
  }, [id, dispatch]);

  return (
    <>
      <Header />
      <NavBar id = {id} showItems = {showItems} setShowItems = {setShowItems}/>
      <Footer />
    </>
  );
};

export default connect()(App);