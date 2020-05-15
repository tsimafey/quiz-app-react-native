import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import LoginScreen from '../screens/LoginScreen';
import SignupScreen from '../screens/SignupScreen';

const AuthStack = createStackNavigator();

const AuthStackScreen = () => {
  return (
    <AuthStack.Navigator
      screenOptions={{
        header: () => null,
      }}>
      <AuthStack.Screen name="Login Screen" component={LoginScreen} />
      <AuthStack.Screen name="Signup Screen" component={SignupScreen} />
    </AuthStack.Navigator>
  );
};

export default AuthStackScreen;
