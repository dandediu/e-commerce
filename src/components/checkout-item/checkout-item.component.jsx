import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { cartItemTypes } from 'utils/prop-types';
import { cartActions } from 'store/cart';

import './checkout-item.styles.scss';

const CheckoutItem = ({ cartItem, clearItem }) => {
  const { imageUrl, name, price, quantity } = cartItem;

  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="item" />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">{quantity}</span>
      <span className="price">{price}</span>
      <span className="remove-button" onClick={() => clearItem(cartItem)}>
        &#10005;
      </span>
    </div>
  );
};

CheckoutItem.propTypes = {
  cartItem: cartItemTypes,
  clearItem: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  clearItem: (item) => dispatch(cartActions.clearItem(item)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
