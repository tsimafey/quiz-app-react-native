import React from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  Dimensions,
} from 'react-native';

import Header from '../../navigation/Header';

import globalStyles, {colors, fonts} from '../../styles';

const QuizScreenHeader = ({topic, score, level, bestScore, navigation}) => {
  return (
    <Header>
      <View style={styles.quizScreenHeaderBlock}>
        <Text style={globalStyles.headerText}>Score: {score}</Text>
        <View>
          <Text style={styles.headerSmallText}>
            {topic} Level {level}
          </Text>
          <Text style={styles.headerSmallText}>Best score: {bestScore}</Text>
        </View>
        <TouchableOpacity style={styles.crossBlock} onPress={navigation.goBack}>
          <Text style={styles.crossText}>&#xd7;</Text>
        </TouchableOpacity>
      </View>
    </Header>
  );
};

const styles = StyleSheet.create({
  quizScreenHeaderBlock: {
    width: Dimensions.get('window').width,
    height: 50,
    paddingLeft: 10,
    paddingRight: 10,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerSmallText: {
    fontFamily: fonts.primaryFont,
    textTransform: 'uppercase',
    fontSize: 14,
    color: colors.highlightColor,
  },
  crossBlock: {
    top: -8,
  },
  crossText: {
    color: colors.lightColor,
    fontSize: 50,
  },
});

export default QuizScreenHeader;
