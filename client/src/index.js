import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';

import App from './components/App';
import Welcome from './components/Welcome';
import Signup from './components/auth/Signup';

import reducers from './reducers';

const store = createStore(reducers, {});

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App>
        <Route exact path='/' component={Welcome}/>
        <Route exact path='/signup' component={Signup}/>
      </App>
    </Router>
  </Provider>
  , document.querySelector('#root'));
