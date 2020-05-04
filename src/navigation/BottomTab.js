import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import TopicsScreen from '../screens/TopicsScreen';
import SettingsScreen from '../screens/SettingsScreen';

const Tab = createBottomTabNavigator();

const BottomTab = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={TopicsScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
};

export default BottomTab;
