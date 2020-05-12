import React from 'react';
import {View, StyleSheet, SafeAreaView} from 'react-native';

import {colors} from '../styles';

const Header = ({children}) => {
  return (
    <SafeAreaView>
      <View style={styles.headerBlock}>{children}</View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  headerBlock: {
    backgroundColor: colors.darkColor,
    borderBottomWidth: 3,
    borderBottomColor: colors.highlightColor,
    height: 50,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Header;
