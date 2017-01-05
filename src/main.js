import Inferno from 'inferno';
import { Provider } from 'inferno-redux';
import { createStore, applyMiddleware } from 'redux';
import createLogger from 'redux-logger';

import reducer from './reducer';
import App from './components/app';

const env = process.env.NODE_ENV;
let middlewares = [];

if (env !== 'production') {
  middlewares = [createLogger()];
}

const store = createStore(reducer, applyMiddleware(...middlewares));

Inferno.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root')
);
