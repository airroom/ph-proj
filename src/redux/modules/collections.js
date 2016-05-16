const COLLECTIONS = 'COLLECTIONS';
const COLLECTIONS_SUCCESS = 'COLLECTIONS_SUCCESS';
const COLLECTIONS_FAIL = 'COLLECTIONS_FAIL';

const DEFAULT_STATE = {
  isLoading: false,
};

export default function collections(state = DEFAULT_STATE, action = {}) {
  switch (action.type) {
    case COLLECTIONS:
      return {
        ...state,
        isLoading: true
      };
    case COLLECTIONS_SUCCESS:
      return {
        ...state,
        items: action.result
      };
    default:
      return state;
  }
}

export function load() {
  return {
    types: [COLLECTIONS, COLLECTIONS_SUCCESS, COLLECTIONS_FAIL],
    promise: (client) => {
      return client.get('/collections?search[featured]=true&search[category]=tech&order=desc');
    }
  };
}
