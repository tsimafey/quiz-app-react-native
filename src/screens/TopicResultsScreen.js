import React, {useState, useEffect, useLayoutEffect, useContext} from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';

import {AuthContext} from '../firebase';

import {
  SafeAreaView,
  TouchableOpacity,
  View,
  Text,
  FlatList,
  StyleSheet,
  Dimensions,
  Platform,
} from 'react-native';

import {useTopicResults, useTopicResultsList} from '../hooks';

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
  const resultsList = useTopicResultsList(results);

  useLayoutEffect(() => {
    mainStackNavigation.setOptions({
      header: () => <DefaultHeader />,
    });
  });

  const navigateToQuiz = (topic, specifiedLevel) =>
    mainStackNavigation.navigate('Quiz', {
      topic,
      specifiedLevel,
    });

  const renderItem = ({item}) => {
    return (
      <TouchableOpacity
        style={styles.listItem}
        onPress={() => navigateToQuiz(id, item.id)}>
        <Text style={globalStyles.primaryText}>Level {item.id}</Text>
        <Text style={globalStyles.primaryText}>
          {results[`level-${item.id}`] ? results[`level-${item.id}`] : '0'}/60
        </Text>
      </TouchableOpacity>
    );
  };

  const Separator = () => {
    return <View style={styles.listSeparator} />;
  };

  return (
    <SafeAreaView style={globalStyles.container}>
      <View style={styles.topicResults}>
        <View style={styles.topicResultsTop}>
          <View style={styles.topicResultsIcon}>
            <TopicIconWithTitle name={icons[id]} title={title} />
          </View>
          <View style={styles.topicResultsTopRight}>
            <Text style={globalStyles.primaryText}>Your level: {level}</Text>
            <Text style={globalStyles.primaryText}>
              Your points: {results['level-1'] && points}
            </Text>
          </View>
        </View>
        <FlatList
          data={resultsList}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          ItemSeparatorComponent={Separator}
          style={styles.listBlock}
        />
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
  topicResultsTop: {
    display: 'flex',
    flexDirection: 'row',
    marginBottom: 20,
  },
  topicResultsIcon: {
    width: windowWidth / 3,
  },
  topicResultsTopRight: {
    marginLeft: 40,
    display: 'flex',
    justifyContent: 'space-evenly',
  },
  listBlock: {
    borderColor: colors.highlightColor,
    borderTopWidth: 2,
    borderBottomWidth: 2,
  },
  listItem: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  listSeparator: {
    height: 2,
    backgroundColor: colors.highlightColor,
  },
});

export default TopicResultsScreen;
