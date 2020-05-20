import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import Firebase, {FirebaseContext} from './src/firebase';

import BottomTab from './src/navigation/BottomTab';
import AuthStack from './src/navigation/AuthStack';

const App = () => {
  return (
    <FirebaseContext.Provider value={new Firebase()}>
      {/* <NavigationContainer>
        <BottomTab />
      </NavigationContainer> */}
      <NavigationContainer>
        <AuthStack />
      </NavigationContainer>
    </FirebaseContext.Provider>
  );
};

export default App;
