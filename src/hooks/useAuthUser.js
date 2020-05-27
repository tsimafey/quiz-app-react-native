import {useState, useEffect} from 'react';

const useAuthUser = (firebase) => {
  const [user, setUser] = useState(null);

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

  return user;
};

export default useAuthUser;
