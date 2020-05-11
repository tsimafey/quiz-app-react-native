import React, {useState, useEffect, useLayoutEffect} from 'react';

import {db} from '../../firebase';

import {
  SafeAreaView,
  View,
  TouchableOpacity,
  FlatList,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  Platform,
} from 'react-native';

import TopicsScreenHeader from './TopicsScreenHeader';

import globalStyles, {colors, fonts} from '../../styles';
import icons from '../../../assets/images/icons/topics';

const TopicsScreen = ({navigation}) => {
  const [topics, setTopics] = useState([]);

  useLayoutEffect(() => {
    navigation.setOptions({
      header: () => <TopicsScreenHeader />,
    });
  });

  useEffect(() => {
    const unsub = db.collection('topics').onSnapshot((snapshot) => {
      const topicsArray = snapshot.docs.map((doc) => ({
        ...doc.data(),
      }));
      setTopics(topicsArray);
    });
    return () => unsub();
  }, []);

  const navigateToQuiz = (id) =>
    navigation.navigate('Quiz', {
      topic: id,
    });

  const renderItem = ({item}) => {
    return (
      <TouchableOpacity
        onPress={() => navigateToQuiz(item.id)}
        style={styles.listItem}>
        <View style={styles.listItemImage}>
          <Image style={styles.listItemIcon} source={icons[item.id]} />
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
    width: 90,
    height: 90,
    borderWidth: 3,
    borderColor: colors.highlightColor,
    borderRadius: 50,
    overflow: 'hidden',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  listItemIcon: {
    resizeMode: 'contain',
    height: 45,
  },
  listItemTitle: {
    marginTop: 5,
    textTransform: 'uppercase',
    fontSize: 20,
    color: colors.lightColor,
    fontFamily: fonts.primaryFont,
  },
});

export default TopicsScreen;
