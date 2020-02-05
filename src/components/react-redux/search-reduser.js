export default function search(state = [], action) {
  switch (action.type) {
    case 'SEARCH':
      return action.payload;
    case 'SEARCH-OFF':
      return [];
    default:
      return state;
  };
};