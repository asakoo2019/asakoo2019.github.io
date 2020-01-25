import React, { useEffect, useState } from 'react';
import Header from '../components/header';
import NavBar from '../components/header/nav-bar'
import Footer from '../components/footer';
import { auth } from '../components/firebase/db';
import { connect } from 'react-redux';

const App = () => {
  const [id, setId] = useState(' ');
  
  useEffect(() => {
    auth.onAuthStateChanged((logedIn) => {
      if (logedIn) {
        setId(logedIn.uid);
      };
    });
  }, []);

  return (
    <>
      <Header />
      <NavBar id = {id} />
      <Footer />
    </>
  );
};

export default connect()(App);