import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router';
import { ConnectedRouter } from 'connected-react-router';
import * as serviceWorker from './serviceWorker';

// Views
import Home from './views/Home';
import Post from './views/Post';

// Store
import configureStore, { history } from './store/history';

const store = configureStore(/* provide initial state if any */)

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
    <div>
      <Switch>
      <Route exact path="/" render={Home} />
      <Route exact path="/post" render={Post} />
      <Route render={() => (<div>Miss</div>)} />
      </Switch>
    </div>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();