import React from 'react';

import {TouchableOpacity, Text, StyleSheet} from 'react-native';

const BottomTab = ({
  accessibilityLabel,
  isFocused,
  onPress,
  onLongPress,
  text,
}) => {
  return (
    <TouchableOpacity
      accessibilityRole="button"
      accessibilityStates={isFocused ? ['selected'] : []}
      accessibilityLabel={accessibilityLabel}
      onPress={onPress}
      onLongPress={onLongPress}
      style={styles.bottomTab}>
      <Text
        style={isFocused ? styles.bottomTabTextFocused : styles.bottomTabText}>
        {text}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  bottomTab: {
    flex: 1,
    alignItems: 'center',
  },
  bottomTabTextFocused: {
    color: '#673ab7',
  },
  bottomTabText: {
    color: '#222',
  },
});

export default BottomTab;
