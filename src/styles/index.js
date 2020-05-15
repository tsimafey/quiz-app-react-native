import {StyleSheet, Platform} from 'react-native';

export const colors = {
  primaryColor: 'hsl(222, 15%, 26%)',
  darkColor: 'hsl(228, 8%, 12%)',
  lightColor: 'hsl(240, 10%, 85%)',
  highlightColor: 'hsl(45, 99%, 71%)',
  positiveColor: 'hsl(90, 80%, 30%)',
  negativeColor: 'hsl(0, 75%, 40%)',
};

export const fonts = {
  primaryFont: 'Manrope-Regular',
};

const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? 25 : 0,
    paddingBottom: Platform.OS === 'android' ? 25 : 0,
    backgroundColor: colors.primaryColor,
    alignItems: 'center',
  },
  headerText: {
    fontFamily: fonts.primaryFont,
    textTransform: 'uppercase',
    fontSize: 22,
    fontWeight: 'bold',
    color: colors.lightColor,
  },
  primaryText: {
    fontSize: 22,
    fontFamily: fonts.primaryFont,
    color: colors.lightColor,
    textAlign: 'center',
  },
  basicText: {
    fontSize: 14,
    fontFamily: fonts.primaryFont,
    color: colors.lightColor,
  },
});

export default globalStyles;
