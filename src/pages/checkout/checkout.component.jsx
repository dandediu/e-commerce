import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CheckoutItem from 'components/checkout-item';
import { cartSelectors } from 'store/cart';
import { cartItemTypes } from 'utils/prop-types';
import StripeButton from 'components/stripe-button';

import {
  CheckoutPageWrapper,
  CheckoutHeader,
  CheckoutTotal,
  CheckoutFooter,
  WarningMessage,
} from './checkout.styles';

const Checkout = ({ cartItems, total }) => (
  <CheckoutPageWrapper>
    <CheckoutHeader>Checkout</CheckoutHeader>
    {cartItems.map((item) => (
      <CheckoutItem key={item.id} cartItem={item} />
    ))}
    <CheckoutFooter>
      <CheckoutTotal>{`Total: $${total}`}</CheckoutTotal>
      <StripeButton price={total} />
    </CheckoutFooter>
    <WarningMessage>
      *Please use following test credit card for payments.
      <br />
      4242 4242 4242 4242 = Exp: 01/24 - CVV: 123
    </WarningMessage>
  </CheckoutPageWrapper>
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
