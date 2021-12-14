import React from 'react';
import { useSelector } from 'react-redux';

import CheckoutItem from 'components/checkout-item';
import { cartSelectors } from 'store/cart';
import StripeButton from 'components/stripe-button';
import uid from 'utils/uid';
import {
  CheckoutPageWrapper,
  CheckoutHeader,
  CheckoutTotal,
  CheckoutFooter,
  WarningMessage,
} from './checkout.styles';

const CheckoutPage = () => {
  const cartItems = useSelector(cartSelectors.selectCartItems);
  const total = useSelector(cartSelectors.selectCartTotal);

  return (
    <CheckoutPageWrapper>
      <CheckoutHeader>Checkout</CheckoutHeader>
      {cartItems.map((item) => (
        <CheckoutItem key={uid()} cardItem={item} />
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

export default CheckoutPage;
