import React from 'react';
import PropTypes from 'prop-types';
import SignIn from 'components/sign-in';

import './sign-in-and-sign-up.styles.scss';

const SignInAndSignUp = () => (
  <div className="sign-in-and-sign-up">
    <SignIn />
  </div>
);

SignInAndSignUp.propTypes = {};

export default SignInAndSignUp;
