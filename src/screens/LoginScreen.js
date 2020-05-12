import React from 'react';

import {SafeAreaView, View, StyleSheet} from 'react-native';

import Input from '../components/Input';

import globalStyles from '../styles';

const LoginScreen = () => {
  return (
    <SafeAreaView style={globalStyles.container}>
      <View style={styles.logoBlock} />
      <View style={styles.inputsBlock}>
        <Input placeholder="Email" />
        <Input placeholder="Password" />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  logoBlock: {
    flex: 1,
  },
  inputsBlock: {
    flex: 2,
    width: '100%',
    display: 'flex',
    alignItems: 'center',
  },
});

export default LoginScreen;
