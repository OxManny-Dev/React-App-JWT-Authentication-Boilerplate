import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {Provider} from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';

import App from './components/App';
import Welcome from './components/Welcome';
import Signup from './containers/auth/Signup';
import Signout from './containers/auth/Signout';
import Counter from './containers/Counter';

import reducers from './reducers';

const store = createStore(
  reducers,
  {
    auth: { authenticated: localStorage.getItem('token')}
  },
  applyMiddleware(reduxThunk));

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App>
        <Route exact path='/' component={Welcome}/>
        <Route exact path='/signup' component={Signup}/>
        <Route exact path='/signout' component={Signout}/>
        <Route exact path='/feature' component={Counter}/>
      </App>
    </Router>
  </Provider>
  , document.querySelector('#root'));
