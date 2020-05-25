import React, {useState, useContext} from 'react';
import {useNavigation} from '@react-navigation/native';

import {FirebaseContext} from '../firebase';

import {CredentialsForm} from '../components';

const LoginScreen = () => {
  const firebase = useContext(FirebaseContext);
  const authStackNavigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigateToSignup = () => authStackNavigation.navigate('Signup Screen');

  const logIn = () => {
    firebase.doSignInWithEmailAndPassword(email, password);
  };

  return (
    <CredentialsForm
      valueEmail={email}
      onChangeTextEmail={(text) => setEmail(text)}
      valuePassword={password}
      onChangeTextPassword={(text) => setPassword(text)}
      mainButtonText="Log In"
      mainButtonOnPress={logIn}
      mainButtonDisabledCondition={!email || !password ? true : false}
      bottomText="Don't have an account yet?"
      bottomButtonText="Sign Up"
      bottomButtonOnPress={navigateToSignup}
      bottomButtonDisabledCondition={!email || !password ? false : true}
    />
  );
};

export default LoginScreen;
