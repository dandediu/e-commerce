import React, { useState } from 'react';
import PropTypes from 'prop-types';
import FormInput from 'components/form-input';
import CustomButton from 'components/custom-button';

import './sign-in.styles.scss';

const SignIn = (props) => {
  const [formValue, setFormValue] = useState({
    email: '',
    password: '',
  });

  const { email, password } = formValue;

  const handleSubmit = (e) => {
    e.preventDefault();

    setFormValue({ email: '', password: '' });
  };

  const onHandleChange = (e) => {
    const { value, name } = e.target.value;

    setFormValue({ [name]: value });
  };

  return (
    <div className="sign-in">
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          id="Email"
          name="email"
          type="email"
          value={email}
          label="Email"
          handleChange={onHandleChange}
          required
        />
        <FormInput
          id="password"
          name="password"
          type="password"
          value={password}
          label="Password"
          handleChange={onHandleChange}
          required
        />

        <CustomButton type="submit">Sign SignIn</CustomButton>
      </form>
    </div>
  );
};

SignIn.propTypes = {};

export default SignIn;
