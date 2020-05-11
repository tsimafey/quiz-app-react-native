import React from 'react';
import {Text, StyleSheet} from 'react-native';

import Header from '../../navigation/Header';

import globalStyles, {colors, fonts} from '../../styles';

const TopicsScreenHeader = () => {
  return (
    <Header>
      <Text style={[globalStyles.headerText, styles.headerTitleText]}>
        Sports Trivia
      </Text>
    </Header>
  );
};

const styles = StyleSheet.create({
  headerTitleText: {
    textAlign: 'center',
  },
});

export default TopicsScreenHeader;
