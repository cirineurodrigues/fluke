import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import TabNavigator from '../components/TabNavigator';

import LoginScreen from '../pages/LoginScreen';
import HistoryScreen from '../pages/HistoryScreen';
import FaqScreen from '../pages/FaqScreen';

const Stack = createStackNavigator();

const Routes = () => {
  return (
    <NavigationContainer initialRouteName="Login">
      <Stack.Navigator headerMode="none">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Home" component={TabNavigator} />
        <Stack.Screen name="Historico" component={HistoryScreen} />
        <Stack.Screen name="Faq" component={FaqScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
