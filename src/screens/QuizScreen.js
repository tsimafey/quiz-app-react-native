import React, {useState} from 'react';
import {useRoute} from '@react-navigation/native';
import {v4 as uuidv4} from 'uuid';

import {db} from '../firebase';

import {SafeAreaView, View, Text, StyleSheet, Platform} from 'react-native';

import useQuestionsArray from '../hooks/useQuestionsArray';

import Answer from '../components/Answer';

import globalStyles, {colors} from '../styles';

const QuizScreen = () => {
  const route = useRoute();
  const {topic} = route.params;
  const [questionsArray, setQuestionsArray] = useQuestionsArray(topic);
  const [thisQuestionNumber, setThisQuestionNumber] = useState(0);

  const assignNewId = (number) => {
    db.collection(`questions-${topic}`)
      .doc(`${questionsArray[number].id}`)
      .update({
        randomId: uuidv4(),
      });
  };

  const disableAnswer = (answer) => {
    const newAnswers = questionsArray[thisQuestionNumber].answers.map((a) => {
      if (a.text === answer.text) {
        a.isDisabled = true;
      }
      return a;
    });
    setQuestionsArray([
      ...questionsArray.slice(0, thisQuestionNumber),
      {...questionsArray[thisQuestionNumber], answers: newAnswers},
      ...questionsArray.slice(thisQuestionNumber + 1),
    ]);
  };

  const handleAnswer = (answer) => {
    disableAnswer(answer);
    if (answer.isTrue) {
      const handleTrueAnswer = () => {
        assignNewId(thisQuestionNumber);
        setThisQuestionNumber(thisQuestionNumber + 1);
      };
      setTimeout(handleTrueAnswer, 100);
    }
  };

  const renderAnswers = questionsArray[
    thisQuestionNumber
  ]?.answers.map((answer) => (
    <Answer answer={answer} handleAnswer={handleAnswer} key={answer.text} />
  ));

  return (
    <SafeAreaView style={globalStyles.container}>
      {questionsArray[thisQuestionNumber] && (
        <>
          <View style={styles.questionBlock}>
            <Text style={globalStyles.questionsText}>
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
    marginTop: Platform.OS === 'android' ? 0 : 10,
    margin: 10,
    borderWidth: 3,
    borderRadius: 10,
    borderColor: colors.highlightColor,
    backgroundColor: colors.darkColor,
    justifyContent: 'center',
  },
  answersBlock: {
    flex: 1,
    width: '95%',
    display: 'flex',
  },
});

export default QuizScreen;
