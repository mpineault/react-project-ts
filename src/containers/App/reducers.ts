// TYPES
import { APP_CHANGE_LANG } from './types';

// Initial State
const initialState = {};

// MAIN REDUCER
/**
 * Reducer Reducer
 * @param {Object} state current state of redux
 * @param {Object} action action state object
 * @returns {state} Redux State
 */
const AppReducer = (state = initialState, action: any) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default AppReducer;
