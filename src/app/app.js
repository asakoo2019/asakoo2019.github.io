import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import store from '../components/react-redux/store';
import { Provider } from 'react-redux';
import Header from '../components/header';
import NavBar from '../components/header/nav-bar'
import Footer from '../components/footer';

function App() {
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

export default App;