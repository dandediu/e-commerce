import React, { useEffect, lazy, Suspense } from 'react';
import PropTypes from 'prop-types';
import { Route, Switch, Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Header from 'components/header';
import Footer from 'components/footer';
import Spinner from 'components/spinner';
import { userSelectors, userActions } from 'store/user';
import APP_ROUTES from 'utils/const/app-routes';
import ErrorBoundary from 'components/error-boundary';

import './App.css';

const HomePage = lazy(() => import('pages/home'));
const ShopPage = lazy(() => import('pages/shop'));
const CheckoutPage = lazy(() => import('pages/checkout'));
const AuthPage = lazy(() => import('pages/auth'));
const ContactPage = lazy(() => import('pages/contact'));

const App = () => {
  const currentUser = useSelector(userSelectors.selectCurrentUser);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(userActions.checkUserSession());
  }, [dispatch]);

  return (
    <div className="app">
      <div className="container">
        <Header className="container" />
      </div>
      <main className="container">
        <Switch>
          <ErrorBoundary>
            <Suspense fallback={<Spinner />}>
              <Route exact path={APP_ROUTES.home}>
                <HomePage />
              </Route>
              <Route path={APP_ROUTES.shop} component={(props) => <ShopPage {...props} />} />
              <Route path={APP_ROUTES.checkout}>
                <CheckoutPage />
              </Route>
              <Route
                exact
                path={APP_ROUTES.signIn}
                render={() => (currentUser ? <Redirect to={APP_ROUTES.home} /> : <AuthPage />)}
              />
              <Route path={APP_ROUTES.contact}>
                <ContactPage />
              </Route>
            </Suspense>
          </ErrorBoundary>
        </Switch>
      </main>
      <Footer />
    </div>
  );
};

App.propTypes = {
  currentUser: PropTypes.shape({}),
  checkUserSession: PropTypes.func,
};

export default App;
