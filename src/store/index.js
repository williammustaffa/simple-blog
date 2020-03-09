import { applyMiddleware, compose, createStore } from "redux";
import { routerMiddleware } from "connected-react-router";
import createRootReducer from "./reducers";
import sagas from "./sagas";
import history from "./history";
import createSagaMiddleware from "redux-saga"
import logger from "redux-logger";

/**
 * Generates a redux store properly
 * applying reducers, states and middlewares
 *
 * @param {*} preloadedState 
 */
const generateStore = preloadedState => {
  const sagaMiddleware = createSagaMiddleware();

  const store = createStore(
    createRootReducer(history),
    preloadedState,
    compose(
      applyMiddleware(
        routerMiddleware(history),
        sagaMiddleware,
        logger,
      ),
    ),
  );

  // Run redux saga
  sagaMiddleware.run(sagas);

  return store;
}

export {
  generateStore,
  history,
};