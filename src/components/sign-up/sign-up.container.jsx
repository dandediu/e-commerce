import React from 'react';
import { useDispatch } from 'react-redux';
import { userActions } from 'store/user';
import SignUp from './sign-up.component';

const SignUpContainer = () => {
  const dispatch = useDispatch();

  const handleSubmit = ({ displayName, email, password }) => {
    dispatch(userActions.signUpStart({ displayName, email, password }));
  };

  return <SignUp onSubmit={handleSubmit} />;
};

export default SignUpContainer;
