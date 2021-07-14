import React from 'react';
import PropTypes from 'prop-types';
import CustomButtonContainer from './custom-button.styles';

const CustomButton = ({ children, ...props }) => (
  <CustomButtonContainer {...props}>{children}</CustomButtonContainer>
);

CustomButton.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
  isGoogleSignIn: PropTypes.bool,
  isInverted: PropTypes.bool,
  type: PropTypes.oneOf(['button', 'submit']).isRequired,
};

export default CustomButton;
