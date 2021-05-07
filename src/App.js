import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import Home from 'pages/home';
import Shop from 'pages/shop';
import Checkout from 'pages/checkout';
import SignInAndSignUp from 'pages/sign-in-and-sign-up';

import Header from 'components/header';
import { auth, createUserProfileDocument } from 'api/utils';
import { setCurrentUser, userSelectors } from 'store/user';

import './App.css';

const App = ({ setUser, currentUser }) => {
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      if (user) {
        const userRef = await createUserProfileDocument(user);

        userRef.onSnapshot((snapShot) => {
          setUser({ id: snapShot.id, ...snapShot.data() });
        });
      } else {
        setUser(user);
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const renderAuthOrRedirect = () => (currentUser ? <Redirect to="/" /> : <SignInAndSignUp />);

  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/shop" component={(props) => <Shop {...props} />} />
        <Route path="/checkout">
          <Checkout />
        </Route>
        <Route exact path="/signin" render={renderAuthOrRedirect} />
      </Switch>
    </div>
  );
};

App.propTypes = {
  setUser: PropTypes.func.isRequired,
  currentUser: PropTypes.shape({}),
};

const mapStateToProps = createStructuredSelector({
  currentUser: userSelectors.selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => ({
  setUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
