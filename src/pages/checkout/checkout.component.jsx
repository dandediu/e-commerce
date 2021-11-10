import React from 'react';
import { useSelector } from 'react-redux';

import CheckoutItem from 'components/checkout-item';
import { cartSelectors } from 'store/cart';
import StripeButton from 'components/stripe-button';

import {
  CheckoutPageWrapper,
  CheckoutHeader,
  CheckoutTotal,
  CheckoutFooter,
  WarningMessage,
} from './checkout.styles';

const Checkout = () => {
  const cartItems = useSelector(cartSelectors.selectCartItems);
  const total = useSelector(cartSelectors.selectCartTotal);

  return (
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
};

export default Checkout;
