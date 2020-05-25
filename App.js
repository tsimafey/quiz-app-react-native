import React from 'react';

import Firebase, {FirebaseContext} from './src/firebase';

import Navigation from './src/navigation';

const App = () => {
  return (
    <FirebaseContext.Provider value={new Firebase()}>
      <Navigation />
    </FirebaseContext.Provider>
  );
};

export default App;
