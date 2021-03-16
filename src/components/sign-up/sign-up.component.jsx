import React from 'react';
import PropTypes from 'prop-types';
import CustomButton from 'components/custom-button';
import FormInput from 'components/form-input';

import { auth, createUserProfileDocument } from 'app-firebase';

import './sign-up.styles.scss';

const SignUp = (props) => {
  const initialState = { displayName: '', password: '', confirmPassword: '', email: '' };
  const [formState, setFormState] = useState(initialState);
  const { displayName, password, confirmPassword, email } = formState;

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert(`Passwords don't match.`);
      return null;
    }

    try {
        const {user} = await auth.createUserWithEmailAndPassword(email, password);

       await createUserProfileDocument(user, {displayName});

        setFormState(initialState);
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange =(e) => {
    const {name, value} = e.target;

    setFormState({...formState, [name]: value});
  }

  return (
    <div className="sign-up">
      <h2 className="title">I do not have an account</h2>
      <span>Sign up with your email and password</span>
      <form className="sign-up-form" onSubmit={handleSubmit}>
        <FormInput
          type="text"
          name="displayName"
          value={displayName}
          onChange={handleOnChange}
          label="Display Name"
          required
        />
        <FormInput
          type="email"
          name="email"
          value={email}
          onChange={handleOnChange}
          label="Email"
          required
        />
        <FormInput
          type="password"
          name="password"
          value={password}
          onChange={handleOnChange}
          label="Password"
          required
        />
        <FormInput
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          onChange={handleOnChange}
          label="Confirm Password"
          required
        />

        <CustomButton type="submit">SING UP</CustomButton>
      </form>
    </div>
  );
};

SignUp.propTypes = {};

export default SignUp;
