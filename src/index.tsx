// IMPORTS
import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

// REDUX
import { Provider } from 'react-intl-redux';
import { ConnectedRouter } from 'connected-react-router';
import configureStore, { history } from './redux/store';
import English from './locales/en.json';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';

// ROUTES
import Routes from './routes';

// STYLES
import GlobalStyles from './styles/GlobalStyles';

// CONFIG
const initialState = {
  intl: {
    defaultLocale: 'en',
    locale: 'en',
    messages: English
  }
};
const store = configureStore(initialState);

// TYPES
declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: any;
  }
}

// RENDER
ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistStore(store)}>
      <ConnectedRouter history={history}>
        <GlobalStyles />
        <Routes />
      </ConnectedRouter>
    </PersistGate>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
