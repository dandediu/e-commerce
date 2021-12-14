import React from 'react';
import SignIn from 'components/sign-in';
import SignUp from 'components/sign-up';

import { AuthWrapper } from './auth.styles';

const AuthPage = () => (
  <AuthWrapper>
    <SignIn />
    <SignUp />
  </AuthWrapper>
);

export default AuthPage;
