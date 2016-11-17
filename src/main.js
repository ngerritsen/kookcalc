import ReactDOM from 'react-dom'
import React from 'react'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import createLogger from 'redux-logger'

import reducer from './reducer'
import App from './components/app'

const env = process.env.NODE_ENV
let middlewares = []

if (env !== 'production') {
  middlewares = [createLogger()]
}

const store = createStore(reducer, applyMiddleware(...middlewares))

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root')
)
