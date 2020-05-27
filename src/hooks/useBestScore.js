import {useState, useContext} from 'react';

import {FirebaseContext} from '../firebase';

const useBestScore = (authUser, topic, level) => {
  const firebase = useContext(FirebaseContext);
  const [bestScore, setBestScore] = useState(0);

  firebase
    .user(authUser.uid)
    .collection('results')
    .doc(`${topic}`)
    .get()
    .then((snapshot) => {
      const data = snapshot.data()[`level-${level}`];
      if (data) {
        setBestScore(data);
      } else if (level) {
        setBestScore(0);
        firebase
          .user(authUser.uid)
          .collection('results')
          .doc(`${topic}`)
          .update({
            [`level-${level}`]: 0,
          });
      } else {
        setBestScore(0);
      }
    })
    .catch((e) => {
      setBestScore(0);
      console.log(e);
    });

  return bestScore;
};

export default useBestScore;
