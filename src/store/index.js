/* eslint-disable prettier/prettier */
import AsyncStorage from '@react-native-async-storage/async-storage';
import { applyMiddleware, createStore } from 'redux';
import { persistCombineReducers, persistStore } from 'redux-persist';
import rpm from 'redux-promise-middleware';
import Thunk from 'redux-thunk';

import reducers from './reducers';

const config = {
  key: 'primary',
  storage: AsyncStorage,
};

const persistedReducer = persistCombineReducers(config, reducers);
const enhancers = applyMiddleware(rpm, Thunk);

export default () => {
  let store = createStore(persistedReducer, enhancers);
  let persistor = persistStore(store);
  return {
    store,
    persistor,
  };
};
