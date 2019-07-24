import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import App from './components/App';
import Welcome from './components/Welcome';

ReactDOM.render(
  <Router>
    <App>
      <Route exact path='/' component={Welcome}/>
    </App>

  </Router>
  , document.querySelector('#root'));
