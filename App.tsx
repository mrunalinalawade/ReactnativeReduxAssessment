import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import RouteNavigation from './src/Navigations/RouteNavigation';
import { persistor, store } from './src/Redux/Store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';


const App = () => {
  return (
    <>
      <NavigationContainer>
      <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <RouteNavigation />
        </PersistGate>
        </Provider>
      </NavigationContainer>
    </>
  );
};

export default App;
