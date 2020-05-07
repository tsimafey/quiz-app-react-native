import React, {useState, useEffect} from 'react';

import {db} from '../firebase';

import {
  SafeAreaView,
  View,
  TouchableWithoutFeedback,
  Text,
  StyleSheet,
} from 'react-native';

import globalStyles, {colors} from '../styles';

const QuizScreen = () => {
  const [questionsArray, setQuestionsArray] = useState([]);

  useEffect(() => {
    db.collection('questions-nba')
      .orderBy('question')
      .limit(20)
      .get()
      .then((snapshot) => {
        const newArray = [];
        snapshot.forEach((doc) => {
          newArray.push(doc.data());
        });
        setQuestionsArray(newArray);
      });
  }, []);

  return (
    <SafeAreaView style={globalStyles.container}>
      {questionsArray[0] && (
        <>
          <View style={styles.questionBlock}>
            <Text style={styles.questionText}>
              {questionsArray[0].question}
            </Text>
          </View>
          <View style={styles.answersBlock}>
            <TouchableWithoutFeedback>
              <View style={styles.answerButton}>
                <Text style={styles.answerText}>1</Text>
              </View>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback>
              <View style={styles.answerButton}>
                <Text style={styles.answerText}>2</Text>
              </View>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback>
              <View style={styles.answerButton}>
                <Text style={styles.answerText}>3</Text>
              </View>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback>
              <View style={styles.answerButton}>
                <Text style={styles.answerText}>4</Text>
              </View>
            </TouchableWithoutFeedback>
          </View>
        </>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  questionBlock: {
    flex: 1,
    width: '95%',
    margin: 10,
    borderWidth: 3,
    borderRadius: 10,
    borderColor: colors.highlightColor,
    backgroundColor: colors.darkColor,
    alignItems: 'center',
    justifyContent: 'center',
  },
  questionText: {
    fontSize: 24,
    fontFamily: 'Manrope-Regular',
    color: colors.lightColor,
  },
  answersBlock: {
    flex: 1,
    width: '95%',
    display: 'flex',
  },
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
  answerText: {
    fontSize: 24,
    fontFamily: 'Manrope-Regular',
    color: colors.lightColor,
  },
});

export default QuizScreen;
