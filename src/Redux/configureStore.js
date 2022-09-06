import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import cryptoReducer from './cryptoData';

const MyMiddlewares = [thunk, logger];
const reducers = combineReducers({
  cryptoReducer,
});

const store = createStore(reducers, applyMiddleware(...MyMiddlewares));

export default store;
