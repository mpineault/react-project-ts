// IMPORTS
import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { intlReducer } from 'react-intl-redux';

// REDUCERS

// MAIN ROOT REDUCER
/**
 *
 * @param history
 */
const rootReducer = (history: any) =>
  combineReducers({
    intl: intlReducer,
    router: connectRouter(history)
  });

// EXPORTS
export default rootReducer;
