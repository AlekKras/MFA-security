import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App/App';
import './app.css';

import 'bootstrap/dist/css/bootstrap.css'

import {createHashHistory} from 'history';
import makeRoutes from './routes';

const routes = makeRoutes()

ReactDOM.render(
  <App 
        routes={routes}/>,
  document.getElementById('root')
);
