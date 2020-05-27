import {useState, useContext} from 'react';

import {FirebaseContext} from '../firebase';

const useLevel = (authUser, specifiedLevel, topic) => {
  const firebase = useContext(FirebaseContext);
  const [level, setLevel] = useState(null);

  if (specifiedLevel) {
    setLevel(specifiedLevel);
  } else {
    firebase
      .user(authUser.uid)
      .collection('results')
      .doc(`${topic}`)
      .get()
      .then((snapshot) => {
        const data = snapshot.data();
        setLevel(data.level);
      })
      .catch(() => {
        setLevel(1);
        firebase.user(authUser.uid).collection('results').doc(`${topic}`).set({
          level: 1,
          'level-1': 0,
        });
      });
  }

  return level;
};

export default useLevel;
