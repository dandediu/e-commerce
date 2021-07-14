import React from 'react';
import { cartItemTypes } from 'utils/prop-types';

import { CartItemWrapper, Image, Label, CartItemDetails } from './cart-item.styles';

const CartItem = ({ cartItem: { imageUrl, price, name, quantity } }) => (
  <CartItemWrapper>
    <Image src={imageUrl} alt={name} />
    <CartItemDetails>
      <Label>{name}</Label>
      <Label>{`${quantity} x $${price}`}</Label>
    </CartItemDetails>
  </CartItemWrapper>
);

CartItem.propTypes = {
  cartItem: cartItemTypes,
};

export default CartItem;
