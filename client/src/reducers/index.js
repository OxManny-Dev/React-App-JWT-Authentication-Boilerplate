import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import auth from './auth';
import counter from './counter';

export default combineReducers({
  auth,
  counter,
  form: formReducer
});