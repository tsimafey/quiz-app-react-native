import React from 'react';

import {KeyboardAvoidingView, View, StyleSheet, Text} from 'react-native';

import {Input, Button} from './';

import globalStyles from '../styles';

const CredentialsForm = ({
  valueEmail,
  onChangeTextEmail,
  textContentTypeEmail,
  valuePassword,
  onChangeTextPassword,
  textContentTypePassword,
  mainButtonText,
  mainButtonOnPress,
  mainButtonDisabledCondition,
  bottomText,
  bottomButtonText,
  bottomButtonOnPress,
  bottomButtonDisabledCondition,
}) => {
  return (
    <KeyboardAvoidingView style={globalStyles.container} behavior="padding">
      <View style={styles.logoBlock} />
      <View style={styles.formBlock}>
        <View style={styles.inputsBlock}>
          <Input
            placeholder="Email"
            value={valueEmail}
            onChangeText={onChangeTextEmail}
            textContentType={textContentTypeEmail}
          />
          <Input
            placeholder="Password"
            value={valuePassword}
            onChangeText={onChangeTextPassword}
            textContentType={textContentTypePassword}
          />
          <Button
            disabled={mainButtonDisabledCondition}
            onPress={mainButtonOnPress}>
            {mainButtonText}
          </Button>
        </View>
        <View style={styles.bottomButtonBlock}>
          <Text style={[globalStyles.basicText, styles.bottomText]}>
            {bottomText}
          </Text>
          <Button
            disabled={bottomButtonDisabledCondition}
            onPress={bottomButtonOnPress}>
            {bottomButtonText}
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
  bottomButtonBlock: {
    paddingVertical: 20,
    paddingHorizontal: '10%',
    display: 'flex',
    flexDirection: 'row',
  },
  bottomText: {
    flex: 1,
    flexWrap: 'wrap',
    textAlign: 'right',
    textAlignVertical: 'center',
    paddingRight: 10,
  },
});

export default CredentialsForm;
