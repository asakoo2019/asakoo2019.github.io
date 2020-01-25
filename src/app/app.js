import React, { useEffect, useState } from 'react';
import Header from '../components/header';
import NavBar from '../components/header/nav-bar'
import Footer from '../components/footer';
import { auth } from '../components/firebase/db';

const App = () => {
  const [id, setId] = useState('');
  console.log(id);
  useEffect(() => {
    auth.onAuthStateChanged((logedIn) => {
      console.log(logedIn.uid);
      setId(logedIn.uid);
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

export default App;