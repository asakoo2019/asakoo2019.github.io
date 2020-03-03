import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app';
import { BrowserRouter as Router } from "react-router-dom";
import reduser from './components/react-redux/combine-reducers';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

const store = createStore(reduser);

ReactDOM.render(
  <Provider store = {store}>
      <Router>
        <App/>
    </Router>
  </Provider>,
  document.getElementById('root')
);
