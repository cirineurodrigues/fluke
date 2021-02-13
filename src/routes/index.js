import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import TabNavigator from '../components/TabNavigator';

import LoginScreen from '../pages/LoginScreen';
import HistoryScreen from '../pages/HistoryScreen';
import ProfileScreen from '../pages/ProfileScreen';

const Stack = createStackNavigator();

const Routes = () => {
  return (
    <NavigationContainer initialRouteName="Home" h>
      <Stack.Navigator headerMode="none">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Home" component={TabNavigator} />
        <Stack.Screen name="Historico" component={HistoryScreen} />
        <Stack.Screen name="Perfil" component={ProfileScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
