import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import CustomButton from 'components/custom-button';
import publishableKey from './publishable-key';

const StripeButton = ({ price }) => {
  const priceForStripe = price * 100;

  const onToken = (token) => {
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
      ComponentClass="div"
    >
      <CustomButton isStripe type="button">
        Pay Now
      </CustomButton>
    </StripeCheckout>
  );
};

export default StripeButton;
