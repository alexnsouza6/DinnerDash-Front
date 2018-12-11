import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import { Router, Switch } from 'react-router-dom';
import reduxPromise from 'redux-promise';
import thunk from 'redux-thunk';

import createHistory from 'history/createBrowserHistory';
import reducers from './reducers/index';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import './common/stylesheets/index.css';
import 'react-redux-toastr/lib/css/react-redux-toastr.min.css';

export const history = createHistory();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, {}, composeEnhancers(applyMiddleware(reduxPromise, thunk)));

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Switch>
        <App />
      </Switch>
    </Router>
  </Provider>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
