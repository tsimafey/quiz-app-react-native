import React, {useState, useEffect, useContext} from 'react';
import {NavigationContainer} from '@react-navigation/native';

import {FirebaseContext} from '../firebase';

import BottomStack from './BottomStack';
import AuthStack from './AuthStack';

const Navigation = () => {
  const [user, setUser] = useState(null);
  const firebase = useContext(FirebaseContext);

  console.log(user);
  console.log(firebase);

  useEffect(() => {
    firebase.onAuthUserListener(
      (authUser) => {
        setUser(authUser);
      },
      () => {
        setUser(null);
      },
    );
  }, [firebase]);

  return (
    <NavigationContainer>
      {user ? <BottomStack /> : <AuthStack />}
    </NavigationContainer>
  );
};

export default Navigation;
