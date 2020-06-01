import {useState, useContext, useEffect} from 'react';

import {FirebaseContext} from '../firebase';

const useTopicResults = (authUser, topic) => {
  const firebase = useContext(FirebaseContext);
  const [results, setResults] = useState({});

  useEffect(() => {
    firebase
      .user(authUser.uid)
      .collection('results')
      .doc(`${topic}`)
      .get()
      .then((snapshot) => {
        const data = snapshot.data();
        console.log(data);
        setResults(data);
      })
      .catch(() => {
        setResults({
          level: 1,
          'level-1': 0,
        });
        firebase.user(authUser.uid).collection('results').doc(`${topic}`).set({
          level: 1,
          'level-1': 0,
        });
      });
  }, []);

  return results;
};

export default useTopicResults;
