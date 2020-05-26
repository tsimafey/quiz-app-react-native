import React, {useState, useContext} from 'react';
import {useNavigation} from '@react-navigation/native';

import {FirebaseContext} from '../firebase';

import {CredentialsForm} from '../components';

const LoginScreen = () => {
  const firebase = useContext(FirebaseContext);
  const authStackNavigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const onChangeTextEmail = (text) => {
    setError(null);
    setEmail(text);
  };

  const onChangeTextPassword = (text) => {
    setError(null);
    setPassword(text);
  };

  const navigateToSignup = () => authStackNavigation.navigate('Signup Screen');

  const logIn = () => {
    firebase.doSignInWithEmailAndPassword(email, password).catch((e) => {
      setError(e.message);
    });
  };

  return (
    <CredentialsForm
      valueEmail={email}
      onChangeTextEmail={onChangeTextEmail}
      valuePassword={password}
      onChangeTextPassword={onChangeTextPassword}
      mainButtonText="Log In"
      mainButtonOnPress={logIn}
      mainButtonDisabledCondition={!email || !password ? true : false}
      bottomText="Don't have an account yet?"
      bottomButtonText="Sign Up"
      bottomButtonOnPress={navigateToSignup}
      bottomButtonDisabledCondition={!email || !password ? false : true}
      errorText={error}
    />
  );
};

export default LoginScreen;
