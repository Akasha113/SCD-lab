import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import {thunk, withExtraArgument}from 'redux-thunk';
 // Import `thunk` as a named export
import { carsReducer } from './reducers/carsReducer';

const composeEnhancers = composeWithDevTools({});

const rootReducer = combineReducers({
  carsReducer,
});

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk, withExtraArgument)) // Correct parentheses usage
);

export default store;
