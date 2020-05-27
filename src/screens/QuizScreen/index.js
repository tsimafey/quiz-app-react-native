import React, {useState, useLayoutEffect, useEffect, useContext} from 'react';
import {useRoute, useNavigation} from '@react-navigation/native';
import {v4 as uuidv4} from 'uuid';

import {FirebaseContext, AuthContext} from '../../firebase';

import {SafeAreaView, View, Text, StyleSheet, Platform} from 'react-native';

import {useQuestionsArray, useLevel} from '../../hooks';

import {Answer} from '../../components';
import QuizScreenHeader from './QuizScreenHeader';
import FinalScoreModal from './FinalScoreModal';

import globalStyles, {colors} from '../../styles';

const QuizScreen = () => {
  const firebase = useContext(FirebaseContext);
  const authUser = useContext(AuthContext);
  const mainStackNavigation = useNavigation();
  const route = useRoute();
  const {topic, specifiedLevel} = route.params;
  const level = useLevel(authUser, specifiedLevel, topic);
  const questionsNumber = 10;
  const [questionsArray, setQuestionsArray] = useQuestionsArray(topic, level);
  const [thisQuestionNumber, setThisQuestionNumber] = useState(0);
  const [score, setScore] = useState(0);
  const [maxScoreForAnswer, setMaxScoreForAnswer] = useState(3);
  const [isFinalModalVisible, setIsFinalModalVisible] = useState(false);

  useLayoutEffect(() => {
    mainStackNavigation.setOptions({
      header: ({navigation}) => (
        <QuizScreenHeader score={score} navigation={navigation} />
      ),
    });
  });

  useEffect(() => {
    if (thisQuestionNumber > questionsNumber - 1) {
      setIsFinalModalVisible(true);
    }
  }, [thisQuestionNumber]);

  const assignNewId = (number) => {
    firebase.db
      .collection('questions')
      .doc(`${topic}`)
      .collection(`level-${level}`)
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
        setScore(score + maxScoreForAnswer);
        assignNewId(thisQuestionNumber);
        setThisQuestionNumber(thisQuestionNumber + 1);
        setMaxScoreForAnswer(3);
      };
      setTimeout(handleTrueAnswer, 50);
    } else {
      setMaxScoreForAnswer(maxScoreForAnswer - 1);
    }
  };

  const renderAnswers = questionsArray[
    thisQuestionNumber
  ]?.answers.map((answer) => (
    <Answer answer={answer} handleAnswer={handleAnswer} key={answer.text} />
  ));

  const closeModal = () => {
    setIsFinalModalVisible(false);
  };

  if (isFinalModalVisible) {
    return (
      <SafeAreaView style={globalStyles.container}>
        <FinalScoreModal
          isVisible={isFinalModalVisible}
          score={score}
          navigation={mainStackNavigation}
          route={route}
          closeModal={closeModal}
        />
      </SafeAreaView>
    );
  } else {
    return (
      <SafeAreaView style={globalStyles.container}>
        {questionsArray[thisQuestionNumber] && (
          <>
            <View style={styles.questionBlock}>
              <Text style={globalStyles.primaryText}>
                {questionsArray[thisQuestionNumber].question}
              </Text>
            </View>
            <View style={styles.answersBlock}>{renderAnswers}</View>
          </>
        )}
      </SafeAreaView>
    );
  }
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
