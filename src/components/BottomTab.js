import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

import {TouchableOpacity, View, Text, StyleSheet} from 'react-native';

const BottomTab = ({
  accessibilityLabel,
  isFocused,
  onPress,
  onLongPress,
  text,
  icon,
}) => {
  return (
    <TouchableOpacity
      accessibilityRole="button"
      accessibilityStates={isFocused ? ['selected'] : []}
      accessibilityLabel={accessibilityLabel}
      onPress={onPress}
      onLongPress={onLongPress}
      style={styles.bottomTab}>
      <View style={styles.bottomTabIcon}>
        <Icon name={icon} size={40} />
      </View>
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
  bottomTabIcon: {
    width: 50,
    height: 50,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottomTabTextFocused: {
    color: '#673ab7',
  },
  bottomTabText: {
    color: '#222',
  },
});

export default BottomTab;
