import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router-dom';
import Home from 'pages/home';
import Shop from 'pages/shop';
import SignInAndSignUp from 'pages/sign-in-and-sign-up';
import Header from 'components/header';
import { auth, createUserProfileDocument } from 'api/utils';
import { connect } from 'react-redux';
import { setCurrentUser } from 'store/user';

import './App.css';

const App = ({ setUser }) => {
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      if (user) {
        const userRef = await createUserProfileDocument(user);

        userRef.onSnapshot((snapShot) => {
          setUser({ id: snapShot.id, ...snapShot.data() });
        });

        // console.log('USER', currentUser);
      } else {
        setUser(user);
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <div>
      <Header />
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

App.propTypes = {
  setUser: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  setUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(null, mapDispatchToProps)(App);
