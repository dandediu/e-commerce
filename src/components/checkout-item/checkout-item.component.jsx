import React from 'react';
import { cartItemTypes } from 'utils/prop-types';

import './checkout-item.styles.scss';

const CheckoutItem = ({ cartItem: { imageUrl, name, price, quantity } }) => (
  <div className="checkout-item">
    <div className="image-container">
      <img src={imageUrl} alt="item" />
    </div>
    <span className="name">{name}</span>
    <span className="quantity">{quantity}</span>
    <span className="price">{price}</span>
    <span className="remove-button">&#10005;</span>
  </div>
);

CheckoutItem.propTypes = {
  cartItem: cartItemTypes,
};

export default CheckoutItem;
