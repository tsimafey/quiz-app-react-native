import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import MainStack from './MainStack';
import BottomTabBar from './BottomTabBar';
import SettingsScreen from '../screens/SettingsScreen';

const Tab = createBottomTabNavigator();

const BottomStack = () => {
  return (
    <Tab.Navigator tabBar={(props) => <BottomTabBar {...props} />}>
      <Tab.Screen name="Main" component={MainStack} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
};

export default BottomStack;
