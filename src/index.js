import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import App from './App';

ReactDOM.hydrate(
  <App />,
  document.getElementById('mountNode'),
);