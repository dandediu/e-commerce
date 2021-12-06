import React, { useState } from 'react';
import FormInput from 'components/form-input';
import CustomButton from 'components/custom-button';
import PropTypes from 'prop-types';

import { SignInWrapper, ButtonsWrapper } from './sign-in.styles';

const SignIn = ({ onClickGoogleSignIn, onSubmit }) => {
  const [formValue, setFormValue] = useState({
    email: '',
    password: '',
  });
  const { email, password } = formValue;

  const handleSubmit = async (e) => {
    e.preventDefault();

    onSubmit(email, password);
  };

  const onHandleChange = (e) => {
    const { name, value } = e.target;

    setFormValue({ ...formValue, [name]: value });
  };

  return (
    <SignInWrapper>
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>
      <form id="signInForm" onSubmit={handleSubmit}>
        <FormInput
          id="Email"
          label="Email"
          name="email"
          type="email"
          value={email}
          handleChange={onHandleChange}
          required
        />
        <FormInput
          id="Password"
          label="Password"
          name="password"
          type="password"
          value={password}
          handleChange={onHandleChange}
          required
        />
        <ButtonsWrapper>
          <CustomButton id="signInEmail" type="submit">
            Sign In
          </CustomButton>
          <CustomButton
            id="signInGoogle"
            type="button"
            onClick={onClickGoogleSignIn}
            isGoogleSignIn
          >
            With Google
          </CustomButton>
        </ButtonsWrapper>
      </form>
    </SignInWrapper>
  );
};

SignIn.propTypes = {
  onClickGoogleSignIn: PropTypes.func,
  onSubmit: PropTypes.func,
};

export default SignIn;
