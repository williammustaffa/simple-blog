import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router';
import { ConnectedRouter } from 'connected-react-router';
import * as serviceWorker from './serviceWorker';

// Views
import Home from './views/Home';
import PostDetails from './views/PostDetails';

// Store
import configureStore, { history } from './store/history';

const store = configureStore({
  posts: [{ id: 1, title: "post example" }]
});

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/post" component={PostDetails} />
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