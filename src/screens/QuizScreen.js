import React, {useState, useEffect} from 'react';
import {v4 as uuidv4} from 'uuid';

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
  const [thisQuestionNumber, setThisQuestionNumber] = useState(0);

  useEffect(() => {
    db.collection('questions-nba')
      .orderBy('randomId')
      .limit(10)
      .get()
      .then((snapshot) => {
        const newArray = [];
        snapshot.forEach((doc) => {
          newArray.push({id: doc.id, ...doc.data()});
        });
        setQuestionsArray(newArray);
      });
  }, []);

  const assignNewId = (number) => {
    db.collection('questions-nba').doc(`${questionsArray[number].id}`).update({
      randomId: uuidv4(),
    });
  };

  const handleAnswer = (answer) => {
    if (answer.isTrue) {
      assignNewId(thisQuestionNumber);
      setThisQuestionNumber(thisQuestionNumber + 1);
    }
  };

  const renderAnswers = questionsArray[thisQuestionNumber]?.answers.map(
    (answer) => (
      <TouchableWithoutFeedback onPress={() => handleAnswer(answer)}>
        <View style={styles.answerButton}>
          <Text style={styles.answerText}>{answer.text}</Text>
        </View>
      </TouchableWithoutFeedback>
    ),
  );

  return (
    <SafeAreaView style={globalStyles.container}>
      {questionsArray[thisQuestionNumber] && (
        <>
          <View style={styles.questionBlock}>
            <Text style={styles.questionText}>
              {questionsArray[thisQuestionNumber].question}
            </Text>
          </View>
          <View style={styles.answersBlock}>{renderAnswers}</View>
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
