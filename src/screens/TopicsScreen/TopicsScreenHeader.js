import React from 'react';
import {Text, StyleSheet} from 'react-native';

import Header from '../../navigation/Header';

import {colors, fonts} from '../../styles';

const TopicsScreenHeader = () => {
  return (
    <Header>
      <Text style={styles.headerTitle}>Sports Trivia</Text>
    </Header>
  );
};

const styles = StyleSheet.create({
  headerTitle: {
    fontFamily: fonts.primaryFont,
    textTransform: 'uppercase',
    fontSize: 22,
    fontWeight: 'bold',
    color: colors.lightColor,
    textAlign: 'center',
  },
});

export default TopicsScreenHeader;
