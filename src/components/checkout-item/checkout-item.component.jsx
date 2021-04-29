import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { cartItemTypes } from 'utils/prop-types';
import { cartActions } from 'store/cart';

import './checkout-item.styles.scss';

const CheckoutItem = ({ cartItem, addItem, removeItem, clearItem }) => {
  const { imageUrl, name, price, quantity } = cartItem;

  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="item" />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={() => removeItem(cartItem)}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={() => addItem(cartItem)}>
          &#10095;
        </div>
      </span>
      <span className="price">{price}</span>
      <span className="remove-button" onClick={() => clearItem(cartItem)}>
        &#10005;
      </span>
    </div>
  );
};

CheckoutItem.propTypes = {
  cartItem: cartItemTypes,
  addItem: PropTypes.func.isRequired,
  removeItem: PropTypes.func.isRequired,
  clearItem: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(cartActions.addItem(item)),
  removeItem: (item) => dispatch(cartActions.removeItem(item)),
  clearItem: (item) => dispatch(cartActions.clearItem(item)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
