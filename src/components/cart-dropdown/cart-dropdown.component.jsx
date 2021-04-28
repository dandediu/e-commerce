import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CustomButton from 'components/custom-button';
import CartItem from 'components/cart-item';
import { cartItemTypes } from 'utils/prop-types';
import { cartSelectors } from 'store/cart';

import './cart-dropdown.styles.scss';

const CartDropDown = ({ cartItems }) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {cartItems.map((item) => (
        <CartItem key={item.id} item={item} />
      ))}
    </div>
    <CustomButton type="button">GO TO CHECKOUT</CustomButton>
  </div>
);

CartDropDown.propTypes = {
  cartItems: PropTypes.arrayOf(cartItemTypes),
};

const mapStateToProps = createStructuredSelector({
  cartItems: cartSelectors.selectCartItems,
});

export default connect(mapStateToProps)(CartDropDown);
