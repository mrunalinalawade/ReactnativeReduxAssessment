import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import RouteNavigation from './src/Navigations/RouteNavigation';
import { persistor, store } from './src/Redux/Store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import FlashMessage from 'react-native-flash-message';


const App = () => {
  return (
    <>
      <NavigationContainer>
      <Provider store={store}>
       <PersistGate loading={null} persistor={persistor}>
        <RouteNavigation />
        </PersistGate>
        </Provider>
        <FlashMessage position="top" />
      </NavigationContainer>
    </>
  );
};

export default App;
