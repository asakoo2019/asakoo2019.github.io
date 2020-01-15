import { createStore } from 'redux';

function counter(state = null, action) {
  switch (action.type) {
    case 'SIGN-IN':
      return action.payload;
    case 'SIGN-OUT':
      return null;
    default:
      return state;
  };
};

let store = createStore(counter);

export default store;