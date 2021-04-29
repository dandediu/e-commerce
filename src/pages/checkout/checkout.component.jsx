import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CheckoutItem from 'components/checkout-item';
import { cartSelectors } from 'store/cart';
import { cartItemTypes } from 'utils/prop-types';

import './checkout.styles.scss';

const Checkout = ({ cartItems, total }) => (
  <div className="checkout-page">
    <div className="checkout-header">
      <div className="header-block">
        <span>Product</span>
      </div>
      <div className="header-block">
        <span>Description</span>
      </div>
      <div className="header-block">
        <span>Quantity</span>
      </div>
      <div className="header-block">
        <span>Price</span>
      </div>
      <div className="header-block">
        <span>Remove</span>
      </div>
    </div>
    {cartItems.map((item) => (
      <CheckoutItem key={item.id} cartItem={item} />
    ))}
    <div className="total">{`Total: $${total}`}</div>
  </div>
);

Checkout.propTypes = {
  cartItems: PropTypes.arrayOf(cartItemTypes),
  total: PropTypes.number,
};

const mapStateToProps = createStructuredSelector({
  cartItems: cartSelectors.selectCartItems,
  total: cartSelectors.selectCartTotal,
});

export default connect(mapStateToProps)(Checkout);
