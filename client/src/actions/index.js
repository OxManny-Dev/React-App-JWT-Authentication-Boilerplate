import { AUTH_USER, AUTH_ERROR, INCREMENT_COUNTER, DECREMENT_COUNTER } from './types';
import axios from 'axios';


export const increment = () => {
  return { type: INCREMENT_COUNTER };
};

export const decrement = () => {
  return { type: DECREMENT_COUNTER };
};

export const addTodo = todo => async dispatch => {
  const res = await axios.get('/api/todo/', {
    headers: {
      'authorization': localStorage.getItem('token')
    }
  });
  console.log(res.data);
};


// We take the form props, and a callback function to call
// once we are successful
// The callback redirects us to /feature
export const signup = (formprops, callback) => async dispatch => {
  // By default, actions can only return objects
  // redux thunk allows us to return whatever we want
  // We can dispatch as many actions as we want as we now have access to dispatch
  // We can also make async requests inside of our actions thanks to redux-thunk
  try {
    const res = await axios.post('/api/auth/signup', formprops);
    // We are getting our token back from res.data.token
    // We want to send this token to our reducer
    dispatch({ type: AUTH_USER, payload: res.data.token });
    localStorage.setItem('token', res.data.token);
    callback();
  } catch(e) {
    // in case a user has signed up already,
    // we want to catch and throw them an error.
    // we want to show this error on the page
    dispatch({ type: AUTH_ERROR, payload: 'Email in use' });
  }

};


export const signin = (formprops, callback) => async dispatch => {
  // By default, actions can only return objects
  // redux thunk allows us to return whatever we want
  // We can dispatch as many actions as we want as we now have access to dispatch
  // We can also make async requests inside of our actions thanks to redux-thunk
  try {
    const res = await axios.post('/api/auth/signin', formprops);
    // We are getting our token back from res.data.token
    // We want to send this token to our reducer
    dispatch({ type: AUTH_USER, payload: res.data.token });
    localStorage.setItem('token', res.data.token);
    callback();
  } catch(e) {
    dispatch({ type: AUTH_ERROR, payload: 'Invalid login credentials' });
  }

};


export const signout = () => {
  localStorage.removeItem('token');
  return {
    type: AUTH_USER,
    payload: ''
  };
};


