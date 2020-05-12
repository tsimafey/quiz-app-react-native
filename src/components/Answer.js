import React from 'react';

import {
  View,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Text,
  StyleSheet,
} from 'react-native';

import globalStyles, {colors} from '../styles';

const Answer = ({answer, handleAnswer}) => {
  if (answer.isDisabled === false) {
    return (
      <TouchableOpacity
        onPress={() => handleAnswer(answer)}
        style={styles.answerButton}>
        <Text style={globalStyles.primaryText}>{answer.text}</Text>
      </TouchableOpacity>
    );
  } else {
    return (
      <TouchableWithoutFeedback>
        <View
          style={
            answer.isTrue
              ? [styles.answerButton, styles.answerButtonRight]
              : [styles.answerButton, styles.answerButtonWrong]
          }>
          <Text style={globalStyles.primaryText}>{answer.text}</Text>
        </View>
      </TouchableWithoutFeedback>
    );
  }
};

const styles = StyleSheet.create({
  answerButton: {
    width: '100%',
    height: '20%',
    marginTop: 10,
    borderWidth: 3,
    borderRadius: 10,
    borderColor: colors.highlightColor,
    backgroundColor: colors.darkColor,
    alignItems: 'center',
    justifyContent: 'center',
  },
  answerButtonRight: {
    backgroundColor: colors.positiveColor,
  },
  answerButtonWrong: {
    backgroundColor: colors.negativeColor,
  },
});

export default Answer;
