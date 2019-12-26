// IMPORTS
import { createBrowserHistory } from 'history';
import { applyMiddleware, compose, createStore } from 'redux';
import { routerMiddleware } from 'connected-react-router';
import createSagaMiddleware from 'redux-saga';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import rootReducer from './reducers';
import rootSaga from './sagas';

// CONFIG
const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['intl']
};

// HISTORY
export const history = createBrowserHistory();

// ENHANCERS
/**
 *
 */
const composeEnhancers = (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({ trace: true })) || compose;

// ROOT STORE
/**
 *
 * @param preloadedState
 */
const configureStore = (preloadedState: any = {}) => {
  const sagaMiddleware = createSagaMiddleware();

  const store = createStore(
    persistReducer(persistConfig, rootReducer(history)),
    preloadedState,
    composeEnhancers(
      applyMiddleware(
        routerMiddleware(history),
        sagaMiddleware
        // ... other middlewares ...
      )
    )
  );

  sagaMiddleware.run(rootSaga);

  return store;
};

// EXPORTS
export default configureStore;
