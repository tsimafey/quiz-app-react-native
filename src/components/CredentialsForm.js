import React from 'react';

import {KeyboardAvoidingView, View, StyleSheet, Text} from 'react-native';

import {Input, Button} from './';

import globalStyles, {colors} from '../styles';

const CredentialsForm = ({
  valueEmail,
  onChangeTextEmail,
  valuePassword,
  onChangeTextPassword,
  mainButtonText,
  mainButtonOnPress,
  mainButtonDisabledCondition,
  bottomText,
  bottomButtonText,
  bottomButtonOnPress,
  bottomButtonDisabledCondition,
  errorText,
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
          />
          <Input
            placeholder="Password"
            value={valuePassword}
            onChangeText={onChangeTextPassword}
            secureTextEntry={true}
          />
          <Button
            disabled={mainButtonDisabledCondition}
            onPress={mainButtonOnPress}
            style={styles.mainButton}>
            {mainButtonText}
          </Button>
          {errorText && (
            <Text style={[globalStyles.basicText, styles.errorText]}>
              {errorText}
            </Text>
          )}
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
  mainButton: {
    marginBottom: 10,
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
  errorText: {
    color: colors.negativeColorBright,
  },
});

export default CredentialsForm;
