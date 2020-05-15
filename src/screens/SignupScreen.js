import React, {useState, useContext} from 'react';
import {useNavigation} from '@react-navigation/native';

import {KeyboardAvoidingView, View, StyleSheet, Text} from 'react-native';

import {FirebaseContext} from '../firebase';

import {Input, Button} from '../components';

import globalStyles from '../styles';

const SignupScreen = () => {
  const firebase = useContext(FirebaseContext);
  const authStackNavigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigateToSignup = () => authStackNavigation.navigate('Login Screen');

  console.log(firebase);

  const signUp = () => {
    firebase.doCreateUserWithEmailAndPassword(email, password);
  };

  return (
    <KeyboardAvoidingView style={globalStyles.container} behavior="padding">
      <View style={styles.logoBlock} />
      <View style={styles.formBlock}>
        <View style={styles.inputsBlock}>
          <Input
            placeholder="Email"
            value={email}
            onChangeText={(text) => setEmail(text)}
          />
          <Input
            placeholder="Password"
            value={password}
            onChangeText={(text) => setPassword(text)}
          />
          <Button
            disabled={!email || !password ? true : false}
            onPress={signUp}>
            Sign Up
          </Button>
        </View>
        <View style={styles.signupButtonBlock}>
          <Text style={[globalStyles.basicText, styles.signupText]}>
            Already have an account?
          </Text>
          <Button
            disabled={!email || !password ? false : true}
            onPress={navigateToSignup}>
            Log In
          </Button>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  logoBlock: {
    flex: 1,
  },
  formBlock: {
    flex: 2,
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
  },
  inputsBlock: {
    display: 'flex',
    alignItems: 'center',
  },
  signupButtonBlock: {
    paddingVertical: 20,
    paddingHorizontal: '10%',
    display: 'flex',
    flexDirection: 'row',
  },
  signupText: {
    flex: 1,
    flexWrap: 'wrap',
    textAlign: 'right',
    textAlignVertical: 'center',
    paddingRight: 10,
  },
});

export default SignupScreen;
