import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { ConnectedRouter } from "connected-react-router";
import * as serviceWorker from "./serviceWorker";
import { generateStore, history } from "./store";
import App from "./App";
import Post from "./store/models/Post";
import Profile from "./store/models/Profile";

const store = generateStore({
  posts: { isFetching: false, items: [], errorMessage: "" },
  post: { isFetching: false, item: new Post(), errorMessage: "" },
  categories: { isFetching: false, items: [], errorMessage: "" },
  user: { isFetching: false, isLoggedIn: !!localStorage.getItem("authToken"), profile: new Profile(), errorMessage: "" },
});

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>,
  document.getElementById("app-root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();