import React from 'react';

import {KeyboardAvoidingView, Text} from 'react-native';

import globalStyles from '../styles';

const SignupScreen = () => {
  return (
    <KeyboardAvoidingView style={globalStyles.container} behavior="padding">
      <Text>Signup Screen</Text>
    </KeyboardAvoidingView>
  );
};

export default SignupScreen;
