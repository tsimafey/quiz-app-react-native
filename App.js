import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import BottomTab from './src/navigation/BottomTab';
import LoginScreen from './src/screens/LoginScreen';

const App = () => {
  return (
    // <NavigationContainer>
    //   <BottomTab />
    // </NavigationContainer>
    <LoginScreen />
  );
};

export default App;
