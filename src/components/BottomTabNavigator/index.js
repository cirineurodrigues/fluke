import React from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import HomeScreen from '../../pages/HomeScreen';
import TopTabNavigator from '../TopTabNavigator';
import FaqScreen from '../../pages/FaqScreen';

const Tab = createMaterialBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="#6BE965"
      barStyle={{backgroundColor: '#fff'}}>
      <Tab.Screen
        name="Historico"
        component={TopTabNavigator}
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
        name="Faq"
        component={FaqScreen}
        options={{
          tabBarLabel: 'FAQ',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons
              name="comment-question-outline"
              color={color}
              size={26}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
