import React, {useState, useEffect, useLayoutEffect, useContext} from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';

import {AuthContext} from '../firebase';

import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  Dimensions,
  Platform,
} from 'react-native';

import {useLevel, useTopicResults} from '../hooks';

import DefaultHeader from '../navigation/DefaultHeader';
import {TopicIconWithTitle} from '../components';

import globalStyles, {colors, fonts} from '../styles';
import icons from '../../assets/images/icons/topics';

const TopicResultsScreen = () => {
  const authUser = useContext(AuthContext);
  const mainStackNavigation = useNavigation();
  const route = useRoute();
  const {id, title} = route.params;
  const {level, points, ...results} = useTopicResults(authUser, id);

  useLayoutEffect(() => {
    mainStackNavigation.setOptions({
      header: () => <DefaultHeader />,
    });
  });

  return (
    <SafeAreaView style={globalStyles.container}>
      <View style={styles.topicResults}>
        <TopicIconWithTitle name={icons[id]} title={title} />
        <Text>Your level: {level}</Text>
        <Text>Your points: {results['level-1'] && points}</Text>
        <Text>Level 1: {results['level-1'] ? results['level-1'] : '0'}/60</Text>
        <Text>Level 2: {results['level-2'] ? results['level-2'] : '0'}/60</Text>
        <Text>Level 3: {results['level-3'] ? results['level-3'] : '0'}/60</Text>
        <Text>Level 4: {results['level-4'] ? results['level-4'] : '0'}/60</Text>
        <Text>Level 5: {results['level-5'] ? results['level-5'] : '0'}/60</Text>
        <Text>Level 6: {results['level-6'] ? results['level-6'] : '0'}/60</Text>
        <Text>Level 7: {results['level-7'] ? results['level-7'] : '0'}/60</Text>
        <Text>Level 8: {results['level-8'] ? results['level-8'] : '0'}/60</Text>
        <Text>Level 9: {results['level-9'] ? results['level-9'] : '0'}/60</Text>
        <Text>
          Level 10: {results['level-10'] ? results['level-10'] : '0'}/60
        </Text>
      </View>
    </SafeAreaView>
  );
};

const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  topicResults: {
    width: '100%',
    margin: Platform.OS === 'android' ? 0 : 20,
  },
  listItem: {
    width: windowWidth / 3,
    marginBottom: 20,
    display: 'flex',
    alignItems: 'center',
  },
  listItemImage: {
    width: 100,
    height: 100,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  listItemTitle: {
    marginTop: 5,
    textTransform: 'uppercase',
    fontSize: 25,
    color: colors.highlightColor,
    fontFamily: fonts.highlightFont,
  },
});

export default TopicResultsScreen;
