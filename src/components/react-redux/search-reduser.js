export default function search(state = [], action) {
  switch (action.type) {
    case 'SEARCH':
      return action.payload;
    case 'SEARCH-OFF':
      return [];
    case 'EMPTY-SEARCH':
      return 'No results found, perhaps you’ve gone too far away. Try less keywords or filters.';
    default:
      return state;
  };
};