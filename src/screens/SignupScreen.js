import React, {useState, useContext} from 'react';
import {useNavigation} from '@react-navigation/native';

import {FirebaseContext} from '../firebase';

import {CredentialsForm} from '../components';

const SignupScreen = () => {
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

  const navigateToLogin = () => authStackNavigation.navigate('Login Screen');

  const signUp = () => {
    firebase.doCreateUserWithEmailAndPassword(email, password).catch((e) => {
      setPassword('');
      setError(e.message);
    });
  };

  return (
    <CredentialsForm
      valueEmail={email}
      onChangeTextEmail={onChangeTextEmail}
      valuePassword={password}
      onChangeTextPassword={onChangeTextPassword}
      mainButtonText="Sign Up"
      mainButtonOnPress={signUp}
      mainButtonDisabledCondition={!email || !password ? true : false}
      bottomText="Already have an account?"
      bottomButtonText="Log In"
      bottomButtonOnPress={navigateToLogin}
      bottomButtonDisabledCondition={!email || !password ? false : true}
      errorText={error}
    />
  );
};

export default SignupScreen;
