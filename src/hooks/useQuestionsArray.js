import {useState, useEffect} from 'react';
import _ from 'lodash';

import {db} from '../firebase';

const useQuestionsArray = (topic) => {
  const [questionsArray, setQuestionsArray] = useState([]);

  useEffect(() => {
    const desc = Math.random() * 10 > 5;

    db.collection(`questions-${topic}`)
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
  }, [topic]);

  return [questionsArray, setQuestionsArray];
};

export default useQuestionsArray;
