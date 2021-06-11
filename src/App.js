import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Router from './router';
const { Provider } = require('react-redux');
import { PersistGate } from 'redux-persist/integration/react';
import configStore from './store/index';
const { persistor, store } = configStore();

const App = () => {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Router />
        </PersistGate>
      </Provider>
    </NavigationContainer>
  );
};

export default App;
