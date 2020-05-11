import React from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  Dimensions,
} from 'react-native';

import Header from '../../navigation/Header';

import globalStyles, {colors} from '../../styles';

const QuizScreenHeader = ({score, navigation}) => {
  return (
    <Header>
      <View style={styles.quizScreenHeaderBlock}>
        <Text style={globalStyles.headerText}>Score: {score}</Text>
        <TouchableOpacity onPress={navigation.goBack}>
          <Text style={styles.cross}>&#xd7;</Text>
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
  cross: {
    paddingBottom: 5,
    color: colors.lightColor,
    fontSize: 50,
  },
});

export default QuizScreenHeader;
