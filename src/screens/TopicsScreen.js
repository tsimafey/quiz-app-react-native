import React, {useState} from 'react';

import {
  SafeAreaView,
  View,
  TouchableOpacity,
  FlatList,
  Text,
  Image,
  StyleSheet,
  Dimensions,
} from 'react-native';

import globalStyles, {colors} from '../styles';
import icons from '../../assets/images/icons/topics';

const topicsData = [
  {id: 'nba', title: 'NBA'},
  {id: 'atp', title: 'ATP Tour'},
  {id: 'soccer', title: 'Soccer'},
  {id: 'mlb', title: 'MLB'},
];

const TopicsScreen = ({navigation}) => {
  const [topics] = useState(topicsData);

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
    margin: 20,
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
    fontFamily: 'Manrope-Regular',
  },
});

export default TopicsScreen;
