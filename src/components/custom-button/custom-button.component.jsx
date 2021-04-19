import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './custom-button.styles.scss';

const CustomButton = ({ children, isInverted, isGoogleSignIn, type, ...otherProps }) => {
  const btnClassNames = classNames('custom-button', {
    'google-sign-in': isGoogleSignIn,
    'inverted-btn': isInverted,
  });

  return (
    <button
      className={btnClassNames}
      type={type === 'button' ? 'button' : 'submit'}
      {...otherProps}
    >
      {children}
    </button>
  );
};

CustomButton.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
  otherProps: PropTypes.oneOfType([PropTypes.object]),
  isGoogleSignIn: PropTypes.bool,
  isInverted: PropTypes.bool,
  type: PropTypes.oneOf(['button', 'submit']).isRequired,
};

export default CustomButton;
