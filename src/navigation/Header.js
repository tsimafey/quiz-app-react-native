import React from 'react';
import {View, StyleSheet} from 'react-native';

import {colors} from '../styles';

const Header = ({children}) => {
  return <View style={styles.headerBlock}>{children}</View>;
};

const styles = StyleSheet.create({
  headerBlock: {
    backgroundColor: colors.darkColor,
    borderBottomWidth: 3,
    borderBottomColor: colors.highlightColor,
    height: 50,
    display: 'flex',
    justifyContent: 'center',
  },
});

export default Header;
