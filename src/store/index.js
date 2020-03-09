import { applyMiddleware, compose, createStore } from 'redux';
import { routerMiddleware } from 'connected-react-router';
import createRootReducer from './reducers';
import history from './history';
import createSagaMiddleware from 'redux-saga'
import logger from 'redux-logger';

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

  return store;
}

sagaMiddleware.run();

export {
  generateStore,
  history,
};