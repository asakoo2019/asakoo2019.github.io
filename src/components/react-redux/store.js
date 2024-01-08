export default function data(state = null, action) {
  switch (action.type) {
    case 'SIGN-IN':
      return action.payload;
    case 'SIGN-OUT':
      return null;
    default:
      return state;
  };
};