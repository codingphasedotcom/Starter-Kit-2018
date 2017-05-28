import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
// import { Router, browserHistory } from 'react-router';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import $ from 'jquery';

import routes from './routes';

import reducers from './reducers';

let store = createStore(reducers, {}, compose(
  applyMiddleware(),
  window.devToolsExtension ? window.devToolsExtension() : f => f
));

// const createStoreWithMiddleware = applyMiddleware()(createStore);



ReactDOM.render(
  <Provider store={store}>
  <Router>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/topics">Topics</Link></li>
      </ul>

      <hr/>

      <Route exact path="/" component={Home}/>
      <Route path="/about" component={About}/>
      <Route path="/topics" component={Topics}/>
</Router>
  </Provider>
  , document.getElementById('app'));
