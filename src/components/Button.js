import React from 'react';

import {
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
  Text,
  StyleSheet,
} from 'react-native';

import globalStyles, {colors} from '../styles';

const Button = ({disabled, children, onPress}) => {
  if (disabled) {
    return (
      <TouchableWithoutFeedback>
        <View style={[styles.button, styles.disabledButton]}>
          <Text style={[globalStyles.primaryText, styles.disabledButtonText]}>
            {children}
          </Text>
        </View>
      </TouchableWithoutFeedback>
    );
  } else {
    return (
      <TouchableOpacity
        style={[styles.button, styles.enabledButton]}
        onPress={onPress}>
        <Text style={globalStyles.primaryText}>{children}</Text>
      </TouchableOpacity>
    );
  }
};

const styles = StyleSheet.create({
  button: {
    paddingHorizontal: 40,
    paddingVertical: 10,
    borderWidth: 3,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.darkColor,
  },
  enabledButton: {
    borderColor: colors.highlightColor,
  },
  disabledButton: {
    borderColor: colors.darkColor,
  },
  disabledButtonText: {
    color: colors.primaryColor,
  },
});

export default Button;
