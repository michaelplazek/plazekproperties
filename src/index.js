import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import Home from './js/Home';
import App from './js/App'
import Contact from './js/Contact';
import About from './js/About';
import Properties from './js/Properties';
import Building from './js/Building';

import 'grommet/grommet-hpinc.min.css';
import './style.css';

let content = document.getElementById('content');
ReactDOM.render(
  <Router history={hashHistory}>
    <Route path='/' component={App}>
      <IndexRoute component={Home}/>
      <Route path='/contact' component={Contact}/>
      <Route path="/about" component={About} />
      <Route path="/properties" component={Properties} />
      <Route path="/building" component={Building} />
    </Route>
  </Router>
  , content);
