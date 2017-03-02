import 'babel-polyfill';

import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, browserHistory} from 'react-router';

import {Main} from './divination/main';

// import {Main} from './app/main';

import './index.scss';

// ReactDOM.render(
//   <Main/>,
//   document.getElementById('root')
// );

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/Divination" component={Main}/>
  </Router>,
  document.getElementById('root')
);
