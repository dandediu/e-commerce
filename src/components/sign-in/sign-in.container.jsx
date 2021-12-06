import React from 'react';
import { useDispatch } from 'react-redux';
import { userActions } from 'store/user';
import SignIn from './sign-in.component';

const SignInContainer = () => {
  const dispatch = useDispatch();
  const handleSubmit = async ({ email, password }) => {
    dispatch(userActions.emailSignInStart({ email, password }));
  };
  const googleSignIn = () => dispatch(userActions.googleSignInStart());

  return <SignIn onSubmit={handleSubmit} onClickGoogleSignIn={googleSignIn} />;
};

export default SignInContainer;
