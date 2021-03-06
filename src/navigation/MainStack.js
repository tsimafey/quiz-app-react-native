import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import TopicsScreen from '../screens/TopicsScreen';
import QuizScreen from '../screens/QuizScreen';

import Header from '../navigation/Header';

const MainStack = createStackNavigator();

const MainStackScreen = () => {
  return (
    <MainStack.Navigator
      screenOptions={{
        header: () => <Header />,
      }}>
      <MainStack.Screen name="Topics Screen" component={TopicsScreen} />
      <MainStack.Screen name="Quiz" component={QuizScreen} />
    </MainStack.Navigator>
  );
};

export default MainStackScreen;
