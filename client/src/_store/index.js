import thunkMiddleware from 'redux-thunk';
import * as reducers from '../_reducers';
import { initialState } from '../_store/initialState';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

const rootReducer = combineReducers({
  ...reducers
});

const STORE = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(
    applyMiddleware(thunkMiddleware)
  )
);

export default STORE;
