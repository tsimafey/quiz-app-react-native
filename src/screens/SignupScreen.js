import React, {useState, useContext} from 'react';
import {useNavigation} from '@react-navigation/native';

import {FirebaseContext} from '../firebase';

import {CredentialsForm} from '../components';

const SignupScreen = () => {
  const firebase = useContext(FirebaseContext);
  const authStackNavigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigateToLogin = () => authStackNavigation.navigate('Login Screen');

  console.log(firebase);

  const signUp = () => {
    firebase.doCreateUserWithEmailAndPassword(email, password);
  };

  return (
    <CredentialsForm
      valueEmail={email}
      onChangeTextEmail={(text) => setEmail(text)}
      textContentTypeEmail="emailAddress"
      valuePassword={password}
      onChangeTextPassword={(text) => setPassword(text)}
      textContentTypePassword="password"
      mainButtonText="Sign Up"
      mainButtonOnPress={signUp}
      mainButtonDisabledCondition={!email || !password ? true : false}
      bottomText="Already have an account?"
      bottomButtonText="Log In"
      bottomButtonOnPress={navigateToLogin}
      bottomButtonDisabledCondition={!email || !password ? false : true}
    />
  );
};

export default SignupScreen;
