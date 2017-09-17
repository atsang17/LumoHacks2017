import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';

import Index from './components/index/IndexRoute';

export default (
  <Route onUpdate={() => window.scrollTo(0, 0)} path='/' component={App}>
    <IndexRoute component={Index} test='pending' />
  </Route>
);
