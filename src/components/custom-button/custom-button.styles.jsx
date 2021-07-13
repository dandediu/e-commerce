import styled, { css } from 'styled-components';
import spacing from 'utils/styles/spacing';

const buttonStyles = css`
  background-color: black;
  color: white;

  &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
  }
`;

const isTransparent = css`
  background-color: transparent;
  color: black;
  border: 1px solid transparent;

  &:hover {
    background-color: #eeeeee;
    color: black;
    border: 1px solid #eeeeee;
  }
`;

const invertedButtonStyles = css`
  background-color: white;
  color: black;
  border: 1px solid black;

  &:hover {
    background-color: black;
    color: white;
  }
`;

const googleSignInButtonStyles = css`
  background-color: #4285f4;
  color: white;

  &:hover {
    background-color: #357ae8;
  }
`;

const stripeButtonStyles = css`
  background-color: #3ea8e5;
  color: white;

  &:hover {
    color: #3ea8e5;
    background-color: white;
  }
`;

const getButtonStyles = (props) => {
  if (props.isGoogleSignIn) {
    return googleSignInButtonStyles;
  }
  if (props.isInverted) {
    return invertedButtonStyles;
  }
  if (props.isStripe) {
    return stripeButtonStyles;
  }

  return props.isTransparent ? isTransparent : buttonStyles;
};

const CustomButtonContainer = styled.button`
  border: 1px solid;
  letter-spacing: 0.6px;
  padding: ${spacing.smSpace} ${spacing.lgSpace};
  vertical-align: middle;
  font-size: 16px;
  text-transform: uppercase;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;

  ${getButtonStyles}
`;

export default CustomButtonContainer;
