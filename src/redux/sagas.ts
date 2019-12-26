// IMPORTS
import { all, fork } from 'redux-saga/effects';

// SAGAS

// MAIN ROOT SAGA
/**
 *
 */
function* rootSaga() {
  yield all([].map(fork));
}

// EXPORTS
export default rootSaga;
