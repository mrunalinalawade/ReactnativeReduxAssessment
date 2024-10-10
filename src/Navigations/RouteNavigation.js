import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../Screens/Login';
import Home from '../Screens/Home';
import Cart from '../Screens/Cart';
import BottomTabbar from '../Screens/Bottom/BottomTabbar';


const Stack = createNativeStackNavigator();
const RouteNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="Login">
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="BottomTabbar" component={BottomTabbar} />
      <Stack.Screen name="Cart" component={Cart} />
      
    </Stack.Navigator>
  );
};

export default RouteNavigation;
