import {combineReducers} from 'redux';
import {connectRouter} from 'connected-react-router';

import nameReducer from './name';

export default function getAppReducer(history) {
  return combineReducers({
    nameState: nameReducer,
    router: connectRouter(history),
  });
}
