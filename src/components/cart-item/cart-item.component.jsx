import React from 'react';
import { cartItemTypes } from 'utils/prop-types';

import './cart-item.styles.scss';

const CartItem = ({ item: { imageUrl, price, name, quantity } }) => (
  <div className="cart-item">
    <img src={imageUrl} alt={name} />
    <div className="item-details">
      <span className="name">{name}</span>
      <span className="price">{`${quantity} x $${price}`}</span>
    </div>
  </div>
);

CartItem.propTypes = {
  item: cartItemTypes,
};

export default CartItem;
