import React, { useState } from 'react';

import FormInput from 'components/form-input';
import CustomButton from 'components/custom-button';
import { auth, signInWithGoogle } from 'api/utils';

import { SignInWrapper, ButtonsWrapper } from './sign-in.styles';

const SignIn = () => {
  const [formValue, setFormValue] = useState({
    email: '',
    password: '',
  });

  const { email, password } = formValue;

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await auth.signInWithEmailAndPassword(email, password);
      setFormValue({ email: '', password: '' });
    } catch (error) {
      console.error(error);
    }
  };

  const onHandleChange = (e) => {
    const { name, value } = e.target;

    setFormValue({ ...formValue, [name]: value });
  };

  return (
    <SignInWrapper>
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
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
          <CustomButton type="submit">Sign In</CustomButton>
          <CustomButton type="button" onClick={signInWithGoogle} isGoogleSignIn>
            With Google
          </CustomButton>
        </ButtonsWrapper>
      </form>
    </SignInWrapper>
  );
};

SignIn.propTypes = {};

export default SignIn;
