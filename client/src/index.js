import React from 'react';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

import routes from './routes';

const history = browserHistory;

render((
  <Router history={history} routes={routes} />

), document.getElementById('root'));
registerServiceWorker();
