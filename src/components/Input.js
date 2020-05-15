import React, {useState} from 'react';

import {TextInput, StyleSheet} from 'react-native';

import {colors} from '../styles';

const Input = ({placeholder, value, onChangeText}) => {
  const [statePlaceholder, setStatePlaceholder] = useState(placeholder);

  const clearPlaceholder = () => {
    setStatePlaceholder('');
  };

  const restorePlaceholder = () => {
    setStatePlaceholder(placeholder);
  };

  return (
    <TextInput
      style={styles.input}
      placeholder={statePlaceholder}
      placeholderTextColor={colors.primaryColor}
      onFocus={clearPlaceholder}
      onBlur={restorePlaceholder}
      value={value}
      onChangeText={onChangeText}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    marginBottom: 20,
    borderWidth: 3,
    borderRadius: 10,
    borderColor: colors.highlightColor,
    backgroundColor: colors.darkColor,
    width: '80%',
    height: 50,
    paddingHorizontal: 10,
    fontSize: 22,
    color: colors.lightColor,
  },
});

export default Input;
