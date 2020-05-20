import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';

import {CredentialsForm} from '../components';

const LoginScreen = () => {
  const authStackNavigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigateToSignup = () => authStackNavigation.navigate('Signup Screen');

  return (
    <CredentialsForm
      valueEmail={email}
      onChangeTextEmail={(text) => setEmail(text)}
      valuePassword={password}
      onChangeTextPassword={(text) => setPassword(text)}
      mainButtonText="Log In"
      mainButtonOnPress={() => {}}
      mainButtonDisabledCondition={!email || !password ? true : false}
      bottomText="Don't have an account yet?"
      bottomButtonText="Sign Up"
      bottomButtonOnPress={navigateToSignup}
      bottomButtonDisabledCondition={!email || !password ? false : true}
    />
  );
};

export default LoginScreen;
