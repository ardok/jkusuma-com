import {combineReducers} from 'redux';

import nameReducer from './name';

export default combineReducers({
  nameState: nameReducer,
});
