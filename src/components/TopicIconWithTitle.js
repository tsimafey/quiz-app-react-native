import React from 'react';

import {View, Text, StyleSheet} from 'react-native';

import {TopicIcon} from './';

import {colors, fonts} from '../styles';

const TopicIconWithTitle = ({name, title}) => {
  return (
    <View style={styles.iconBlock}>
      <View style={styles.iconImage}>
        <TopicIcon name={name} />
      </View>
      <Text style={styles.iconTitle}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  iconBlock: {
    display: 'flex',
    alignItems: 'center',
  },
  iconImage: {
    width: 100,
    height: 100,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconTitle: {
    marginTop: 5,
    textTransform: 'uppercase',
    fontSize: 25,
    color: colors.highlightColor,
    fontFamily: fonts.highlightFont,
  },
});

export default TopicIconWithTitle;
