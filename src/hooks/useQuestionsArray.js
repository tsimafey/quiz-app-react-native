import {useState, useEffect, useContext} from 'react';
import _ from 'lodash';

import {FirebaseContext} from '../firebase';

const useQuestionsArray = (topic, level) => {
  const firebase = useContext(FirebaseContext);
  const [questionsArray, setQuestionsArray] = useState([]);

  useEffect(() => {
    const desc = Math.random() * 10 > 5;
    if (level) {
      firebase.db
        .collection('questions')
        .doc(`${topic}`)
        .collection(`level-${level}`)
        .orderBy('randomId', desc ? 'desc' : 'asc')
        .limit(10)
        .get()
        .then((snapshot) => {
          const newQuestionsArray = [];
          snapshot.forEach((doc) => {
            newQuestionsArray.push({id: doc.id, ...doc.data()});
          });
          return newQuestionsArray;
        })
        .then((newQuestionsArray) => {
          return newQuestionsArray.map((question) => {
            question.answers = _.shuffle(question.answers).map((answer) => ({
              ...answer,
              isDisabled: false,
            }));
            return question;
          });
        })
        .then((newQuestionsArrayShuffled) => {
          setQuestionsArray(newQuestionsArrayShuffled);
        });
    }
  }, [topic, firebase, level]);

  return [questionsArray, setQuestionsArray];
};

export default useQuestionsArray;
