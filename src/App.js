import React, { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from 'pages/home';
import Shop from 'pages/shop';
import SignInAndSignUp from 'pages/sign-in-and-sign-up';
import Header from 'components/header';
import { auth, createUserProfileDocument } from 'api/utils';

import './App.css';

const App = () => {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      if (user) {
        const userRef = await createUserProfileDocument(user);

        userRef.onSnapshot((snapShot) => {
          setCurrentUser({ id: snapShot.id, ...snapShot.data() });
        });

        // console.log('USER', currentUser);
      } else {
        setCurrentUser(user);
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <div>
      <Header currentUser={currentUser} />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/shop">
          <Shop />
        </Route>
        <Route path="/signin">
          <SignInAndSignUp />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
