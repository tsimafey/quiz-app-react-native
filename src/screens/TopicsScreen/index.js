import React, {useState, useEffect, useLayoutEffect, useContext} from 'react';
import {useNavigation} from '@react-navigation/native';

import {FirebaseContext} from '../../firebase';

import {
  SafeAreaView,
  View,
  TouchableOpacity,
  FlatList,
  Text,
  StyleSheet,
  Dimensions,
  Platform,
} from 'react-native';

import {TopicIcon} from '../../components';
import TopicsScreenHeader from './TopicsScreenHeader';

import globalStyles, {colors, fonts} from '../../styles';
import icons from '../../../assets/images/icons/topics';

const TopicsScreen = () => {
  const firebase = useContext(FirebaseContext);
  const mainStackNavigation = useNavigation();
  const [topics, setTopics] = useState([]);

  useLayoutEffect(() => {
    mainStackNavigation.setOptions({
      header: () => <TopicsScreenHeader />,
    });
  });

  useEffect(() => {
    const unsub = firebase.db.collection('topics').onSnapshot((snapshot) => {
      const topicsArray = snapshot.docs.map((doc) => ({
        ...doc.data(),
      }));
      setTopics(topicsArray);
    });
    return () => unsub();
  }, [firebase]);

  const navigateToQuiz = (id) =>
    mainStackNavigation.navigate('Quiz', {
      topic: id,
    });

  const renderItem = ({item}) => {
    return (
      <TouchableOpacity
        onPress={() => navigateToQuiz(item.id)}
        style={styles.listItem}>
        <View style={styles.listItemImage}>
          <TopicIcon name={icons[item.id]} />
        </View>
        <Text style={styles.listItemTitle}>{item.title}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={globalStyles.container}>
      <FlatList
        data={topics}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={3}
        style={styles.list}
        contentContainerStyle={styles.listContainer}
      />
    </SafeAreaView>
  );
};

const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  list: {
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

export default TopicsScreen;
