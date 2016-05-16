import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as reduxAsyncConnect } from 'redux-async-connect';

import collections from './collections.js';

export default combineReducers({
  routing: routerReducer,
  reduxAsyncConnect,
  collections
});
