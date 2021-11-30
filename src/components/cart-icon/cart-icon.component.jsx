import React from 'react';
import PropTypes from 'prop-types';

import { Cart, ItemCount, ShoppingIcon } from './cart-icon.styles';

const CartIcon = ({ onToggle, itemCount }) => (
  <Cart onClick={onToggle}>
    <ItemCount>{itemCount}</ItemCount>
    <ShoppingIcon />
  </Cart>
);

CartIcon.propTypes = {
  onToggle: PropTypes.func,
  itemCount: PropTypes.number,
};

export default CartIcon;
