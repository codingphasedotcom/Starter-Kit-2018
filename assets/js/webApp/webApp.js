import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
// import { Router, browserHistory } from 'react-router'
import TestApp from './components/TestApp'
import reducers from './reducers'

let store = createStore(reducers, {}, compose(
  applyMiddleware(),
  window.devToolsExtension ? window.devToolsExtension() : f => f
))

// const createStoreWithMiddleware = applyMiddleware()(createStore)
ReactDOM.render(
  <Provider store={store}>
    <TestApp />
  </Provider>
  , document.getElementById('webAppRoot'))
