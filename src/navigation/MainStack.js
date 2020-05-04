import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import TopicsScreen from '../screens/TopicsScreen';
import QuizScreen from '../screens/QuizScreen';

const MainStack = createStackNavigator();

const MainStackScreen = () => {
  return (
    <MainStack.Navigator>
      <MainStack.Screen
        name="Topics Screen"
        component={TopicsScreen}
        options={{title: 'SPORTS TRIVIA'}}
      />
      <MainStack.Screen name="Quiz" component={QuizScreen} />
    </MainStack.Navigator>
  );
};

export default MainStackScreen;
