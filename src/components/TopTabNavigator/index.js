import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import DataScreen from '../../pages/DataScreen';
import MinutesScreen from '../../pages/MinutesScreen';

const Tab = createMaterialTopTabNavigator();

const TopTabNavigator = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        indicatorStyle: {
          height: 4,
          backgroundColor: '#6be965',
        },
        inactiveTintColor: '#000',
      }}>
      <Tab.Screen
        name="Dados"
        component={DataScreen}
        options={{
          tabBarLabel: 'Dados',
        }}
      />
      <Tab.Screen
        name="Minutos"
        component={MinutesScreen}
        options={{
          tabBarLabel: 'Minutos',
        }}
      />
    </Tab.Navigator>
  );
};

export default TopTabNavigator;
