import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';

import nameReducer from './name';

export default combineReducers({
  nameState: nameReducer,
  router: routerReducer,
});
