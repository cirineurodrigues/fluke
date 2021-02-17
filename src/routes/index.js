import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import BottomTabNavigator from '../components/BottomTabNavigator';

import LoginScreen from '../pages/LoginScreen';
import BuyScreen from '../pages/BuyScreen';
import HomeScreen from '../pages/HomeScreen';

const Stack = createStackNavigator();

const Routes = () => {
  return (
    <NavigationContainer initialRouteName="Login">
      <Stack.Navigator headerMode="none">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Main" component={BottomTabNavigator} />
        <Stack.Screen name="Buy" component={BuyScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
