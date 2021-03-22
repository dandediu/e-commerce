import React, { useState } from 'react';
import PropTypes from 'prop-types';
import FormInput from 'components/form-input';
import CustomButton from 'components/custom-button';
import { auth, signInWithGoogle } from 'api/utils';

import './sign-in.styles.scss';

const SignIn = (props) => {
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
    <div className="sign-in">
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
        <div className="buttons-wrapper">
          <CustomButton type="submit">SignIn</CustomButton>
          <CustomButton type="button" onClick={signInWithGoogle} isGoogleSignIn>
            Sign In with Google
          </CustomButton>
        </div>
      </form>
    </div>
  );
};

SignIn.propTypes = {};

export default SignIn;
