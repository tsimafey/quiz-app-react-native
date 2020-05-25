import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

import {
  API_KEY,
  AUTH_DOMAIN,
  DATABASE_URL,
  PROJECT_ID,
  STORAGE_BUCKET,
  MESSAGING_SENDER_ID,
  APP_ID,
} from 'react-native-dotenv';

const config = {
  apiKey: API_KEY,
  authDomain: AUTH_DOMAIN,
  databaseURL: DATABASE_URL,
  projectId: PROJECT_ID,
  storageBucket: STORAGE_BUCKET,
  messagingSenderId: MESSAGING_SENDER_ID,
  appId: APP_ID,
};

class Firebase {
  constructor() {
    if (!firebase.apps.length) {
      firebase.initializeApp(config);
    }
    firebase.firestore().settings({experimentalForceLongPolling: true});
    this.auth = firebase.auth();
    this.db = firebase.firestore();
  }

  doCreateUserWithEmailAndPassword = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password);

  doSignInWithEmailAndPassword = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);

  doLogOut = () => this.auth.signOut();

  onAuthUserListener = (next, fallback) => {
    this.auth.onAuthStateChanged((user) => {
      if (user) {
        next(user);
      } else {
        fallback();
      }
    });
  };
}

export default Firebase;
