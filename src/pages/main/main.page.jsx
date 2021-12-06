import React, { lazy, Suspense } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

import Header from 'components/header';
import Footer from 'components/footer';
import Spinner from 'components/spinner';
import APP_ROUTES from 'utils/const/app-routes';
import ErrorBoundary from 'components/error-boundary';

import { MainContainer, HeaderContainer, PagesContainer } from './main.styles';

const HomePage = lazy(() => import('pages/home'));
const ShopPage = lazy(() => import('pages/shop'));
const CheckoutPage = lazy(() => import('pages/checkout'));
const AuthPage = lazy(() => import('pages/auth'));
const ContactPage = lazy(() => import('pages/contact'));

const MainPage = ({ currentUser }) => (
  <MainContainer>
    <HeaderContainer>
      <Header />
    </HeaderContainer>
    <PagesContainer>
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
    </PagesContainer>
    <Footer />
  </MainContainer>
);

MainPage.propTypes = { currentUser: PropTypes.shape({}) };

export default MainPage;
