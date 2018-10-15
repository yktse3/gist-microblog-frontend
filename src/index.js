import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import './index.css';
import createHistory from 'history/createBrowserHistory';
import { Route, Switch } from 'react-router-dom';
import Home from 'containers/Home';
import Login from 'containers/Login';
import configureStore from 'store/configureStore';
import * as serviceWorker from './serviceWorker';

const history = createHistory();
const store = configureStore(history);

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Switch>
        <Route path="/Login" component={Login} />
        <Route path="/" component={Home} />
      </Switch>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
