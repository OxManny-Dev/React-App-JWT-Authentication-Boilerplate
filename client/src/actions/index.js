import { AUTH_USER } from './types';
import axios from 'axios';

export const signup = formprops => async dispatch => {
  // By default, actions can only return objects
  // redux thunk allows us to return whatever we want
  // We can dispatch as many actions as we want as we now have access to dispatch
  // We can also make async requests inside of our actions thanks to redux-thunk
  const res = await axios.post('http://localhost:3001/api/auth/signup', formprops);
  // dispatch({ type: })
};