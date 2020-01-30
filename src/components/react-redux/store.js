import { createStore } from 'redux';

function counter(state = null, action) {
  switch (action.type) {
    case 'SIGN-IN':
      return action.payload;
<<<<<<< HEAD
    case 'SEARCH':
      return action.payload;
    case 'JOB-ID':
      return action.payload;
=======
>>>>>>> 72980d59e3418291a98a408d1b2a1aaf096f5742
    case 'SIGN-OUT':
      return null;
    default:
      return state;
  };
};

const store = createStore(counter);

export default store;