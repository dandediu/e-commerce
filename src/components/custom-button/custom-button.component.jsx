import React from 'react';
import PropTypes from 'prop-types';

import './custom-button.styles.scss';

const CustomButton = ({ children, type, ...otherProps }) => (
  <button className="custom-button" type={type === 'button' ? 'button' : 'submit'} {...otherProps}>
    {children}
  </button>
);

CustomButton.propTypes = {
  children: PropTypes.oneOfType([PropTypes.object]),
  otherProps: PropTypes.oneOfType([PropTypes.object]),
  type: PropTypes.oneOf(['button', 'submit']),
};

export default CustomButton;
