import React from 'react';
import { Router, Route } from 'react-router';

import Home from './Home';

const Main = () => (
    <Router>
      <Route exact path='/' component={Home}/>
    </Router>
);

export default Main;
