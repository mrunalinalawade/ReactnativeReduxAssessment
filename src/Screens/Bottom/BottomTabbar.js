import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { View, Text } from 'react-native';

import Home from '../Home';
import Cart from '../Cart';

const Tab = createBottomTabNavigator();
const BottomTabbar = (props) => {
  return (
  
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === 'Home') {
              iconName = 'home-filled';
            } else if (route.name === 'Search') {
              iconName = 'search';
            } 
            return <Icon name={iconName} size={size} color={color} />;
          },
        tabBarActiveTintColor: '#905CFF',
        tabBarInactiveTintColor: '#000',
        tabBarActiveBackgroundColor:'#EEE6FF',
          tabBarStyle: {
            height: 60,
              paddingBottom: 10,
           
            
          },
          tabBarLabelStyle: {
            fontSize: 24,
            right:32
            
          },
          tabBarIconStyle: {
          
            alignItems: 'center',
            justifyContent: 'center',
            right:5
            
          },
          tabBarItemStyle: {
            marginTop: 4,
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 30,
            flexDirection:'row',
          },
          tabBarBadge: route.name === 'Home' ? null : undefined,
          }
        
          )}
      >
      <Tab.Screen name="Home" component={Home} options={{ tabBarBadge: null,headerShown:false }}  />
        <Tab.Screen name="Cart" component={Cart} />
    
      </Tab.Navigator>
    
  );
};

export default BottomTabbar;



