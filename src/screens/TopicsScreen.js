import React, {useState, useEffect, useLayoutEffect, useContext} from 'react';
import {useNavigation} from '@react-navigation/native';

import {FirebaseContext} from '../firebase';

import {
  SafeAreaView,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  Dimensions,
  Platform,
} from 'react-native';

import DefaultHeader from '../navigation/DefaultHeader';
import TopicIconWithTitle from '../components/TopicIconWithTitle';

import globalStyles from '../styles';
import icons from '../../assets/images/icons/topics';

const TopicsScreen = () => {
  const firebase = useContext(FirebaseContext);
  const mainStackNavigation = useNavigation();
  const [topics, setTopics] = useState([]);

  useLayoutEffect(() => {
    mainStackNavigation.setOptions({
      header: () => <DefaultHeader />,
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

  const navigateToTopicResults = (id, title) =>
    mainStackNavigation.navigate('Topic Results', {
      id,
      title,
    });

  const renderItem = ({item}) => {
    return (
      <TouchableOpacity
        onPress={() => navigateToQuiz(item.id)}
        onLongPress={() => navigateToTopicResults(item.id, item.title)}
        style={styles.listItem}>
        <TopicIconWithTitle name={icons[item.id]} title={item.title} />
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
  },
});

export default TopicsScreen;
