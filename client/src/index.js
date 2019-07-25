import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {Provider} from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import reduxThunk from 'redux-thunk';



import App from './components/App';
import Welcome from './components/Welcome';
import Signup from './containers/auth/Signup';
import Signin from './containers/auth/Signin';
import Signout from './containers/auth/Signout';
import Counter from './containers/Counter';
import Todo from './containers/todo/Todo';

import reducers from './reducers';
// configure redux dev tools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducers,
  {
    auth: { authenticated: localStorage.getItem('token')}
  },
  composeEnhancers(applyMiddleware(reduxThunk)));

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App>
        <Route exact path='/' component={Welcome}/>
        <Route exact path='/signup' component={Signup}/>
        <Route exact path='/signin' component={Signin}/>
        <Route exact path='/signout' component={Signout}/>
        <Route exact path='/todo' component={Todo}/>
        <Route exact path='/feature' component={Counter}/>
      </App>
    </Router>
  </Provider>
  , document.querySelector('#root'));
