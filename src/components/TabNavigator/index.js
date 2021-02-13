import React from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import HomeScreen from '../../pages/HomeScreen';
import HistoryScreen from '../../pages/HistoryScreen';
import ProfileScreen from '../../pages/ProfileScreen';

const Tab = createMaterialBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="#6BE965"
      barStyle={{backgroundColor: '#fff'}}>
      <Tab.Screen
        name="Historico"
        component={HistoryScreen}
        options={{
          tabBarLabel: 'Historico',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="history" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons
              name="home-outline"
              color={color}
              size={26}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Perfil"
        component={ProfileScreen}
        options={{
          tabBarLabel: 'Perfil',
          tabBarIcon: ({color}) => (
            <MaterialIcons name="person-outline" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
