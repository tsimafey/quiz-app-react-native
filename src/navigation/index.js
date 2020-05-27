import React, {useContext} from 'react';
import {NavigationContainer} from '@react-navigation/native';

import {FirebaseContext, AuthContext} from '../firebase';

import useAuthUser from '../hooks/useAuthUser';

import BottomStack from './BottomStack';
import AuthStack from './AuthStack';

const Navigation = () => {
  const firebase = useContext(FirebaseContext);
  const authUser = useAuthUser(firebase);

  return (
    <AuthContext.Provider value={authUser}>
      <NavigationContainer>
        {authUser ? <BottomStack /> : <AuthStack />}
      </NavigationContainer>
    </AuthContext.Provider>
  );
};

export default Navigation;
