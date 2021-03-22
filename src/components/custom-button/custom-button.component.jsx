import React from 'react';
import PropTypes from 'prop-types';

import './custom-button.styles.scss';

const CustomButton = ({ children, isGoogleSignIn, type, ...otherProps }) => (
  <button
    className={`${isGoogleSignIn && 'google-sign-in'} custom-button`}
    type={type === 'button' ? 'button' : 'submit'}
    {...otherProps}
  >
    {children}
  </button>
);

CustomButton.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
  otherProps: PropTypes.oneOfType([PropTypes.object]),
  isGoogleSignIn: PropTypes.bool,
  type: PropTypes.oneOf(['button', 'submit']),
};

export default CustomButton;
