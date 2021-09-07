import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import Home from 'pages/home';
import Shop from 'pages/shop';
import Checkout from 'pages/checkout';
import SignInAndSignUp from 'pages/auth';

import Header from 'components/header';
import Footer from 'components/footer';
import { userSelectors } from 'store/user';
import APP_ROUTES from 'utils/const/app-routes';

import './App.css';

const App = ({ currentUser }) => {
  // useEffect(() => {
  //   const unsubscribe = auth.onAuthStateChanged(async (user) => {
  //     if (user) {
  //       const userRef = await createUserProfileDocument(user);

  //       userRef.onSnapshot((snapShot) => {
  //         setUser({ id: snapShot.id, ...snapShot.data() });
  //       });
  //     } else {
  //       setUser(user);
  //     }
  //   });

  //   return () => {
  //     unsubscribe();
  //   };
  // }, []);

  const renderAuthOrRedirect = () => (currentUser ? <Redirect to="/" /> : <SignInAndSignUp />);

  return (
    <div className="app">
      <div className="container">
        <Header className="container" />
      </div>
      <main className="container">
        <Switch>
          <Route exact path={APP_ROUTES.home}>
            <Home />
          </Route>
          <Route path={APP_ROUTES.shop} component={(props) => <Shop {...props} />} />
          <Route path={APP_ROUTES.checkout}>
            <Checkout />
          </Route>
          <Route exact path={APP_ROUTES.signIn} render={renderAuthOrRedirect} />
        </Switch>
      </main>
      <Footer />
    </div>
  );
};

App.propTypes = {
  currentUser: PropTypes.shape({}),
};

const mapStateToProps = createStructuredSelector({
  currentUser: userSelectors.selectCurrentUser,
});

export default connect(mapStateToProps, null)(App);
