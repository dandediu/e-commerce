import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import publishableKey from './publishable-key';

import './stripe-button.styles.scss';

const StripeButton = ({ price }) => {
  const priceForStripe = price * 100;

  const onToken = (token) => {
    console.log(token);
    alert('Payment successful!');
  };

  return (
    <StripeCheckout
      label="Pay now"
      name="CRWN Clothing Ltd."
      billingAddress
      shippingAddress
      image="https://sendeyo.com/en/f3eb2117da"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeButton;
