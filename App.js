import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import BottomTab from './src/navigation/BottomTab';
import AuthStack from './src/navigation/AuthStack';

const App = () => {
  return (
    // <NavigationContainer>
    //   <BottomTab />
    // </NavigationContainer>
    <NavigationContainer>
      <AuthStack />
    </NavigationContainer>
  );
};

export default App;
