import {StyleSheet, Platform} from 'react-native';

export const colors = {
  primaryColor: 'hsl(222, 15%, 26%)',
  darkColor: 'hsl(228, 8%, 12%)',
  lightColor: 'hsl(240, 10%, 85%)',
  highlightColor: 'hsl(45, 99%, 71%)',
  positiveColor: 'hsl(90, 80%, 30%)',
  negativeColor: 'hsl(0, 75%, 40%)',
};

const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? 25 : 0,
    backgroundColor: colors.primaryColor,
    alignItems: 'center',
  },
});

export default globalStyles;
