import React from 'react';
import PropTypes from 'prop-types';
import { cardItemTypes } from 'utils/prop-types';
import DropdownList from 'components/dropdown-list';
import { DropdownInner, CloseButton, Message, DropdownButton } from './dropdown.styles';

const DropDown = ({ cartItems, onClose, onClickCheckout }) => (
  <DropdownInner>
    <CloseButton onClick={() => onClose()} type="button" isTransparent>
      &#10005;
    </CloseButton>
    {cartItems.length > 0 ? (
      <DropdownList cartItems={cartItems} />
    ) : (
      <Message>Your cart is empty</Message>
    )}
    <DropdownButton onClick={() => onClickCheckout()} type="button">
      CHECKOUT
    </DropdownButton>
  </DropdownInner>
);

DropDown.propTypes = {
  cartItems: PropTypes.arrayOf(cardItemTypes),
  onClose: PropTypes.func,
  onClickCheckout: PropTypes.func,
};

export default DropDown;
