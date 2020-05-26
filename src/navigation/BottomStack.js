import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import MainStack from './MainStack';
import BottomTabBar from './BottomTabBar';
import ProfileScreen from '../screens/ProfileScreen';
import SettingsScreen from '../screens/SettingsScreen';

const Tab = createBottomTabNavigator();

const BottomStack = () => {
  return (
    <Tab.Navigator tabBar={(props) => <BottomTabBar {...props} />}>
      <Tab.Screen
        name="Main"
        component={MainStack}
        options={{icon: 'ios-home'}}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{icon: 'ios-person'}}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{icon: 'ios-settings'}}
      />
    </Tab.Navigator>
  );
};

export default BottomStack;
