import React from 'react';
import { useDispatch } from 'react-redux';

import { cartItemTypes } from 'utils/prop-types';
import { cartActions } from 'store/cart';
import {
  CheckoutItemWrapper,
  ImageContainer,
  Image,
  CheckoutItemSection,
  RemoveButton,
  Arrow,
  Value,
  Label,
} from './checkout-item.styles';

const CheckoutItem = ({ cartItem }) => {
  const dispatch = useDispatch();
  const { imageUrl, name, price, quantity } = cartItem;
  const addItem = (item) => dispatch(cartActions.addItem(item));
  const removeItem = (item) => dispatch(cartActions.removeItem(item));
  const clearItem = (item) => dispatch(cartActions.clearItem(item));

  return (
    <CheckoutItemWrapper>
      <ImageContainer>
        <Image src={imageUrl} alt="item" />
      </ImageContainer>
      <CheckoutItemSection>
        <Label>{name}</Label>
        <Label>
          <Arrow onClick={() => removeItem(cartItem)}>&#10094;</Arrow>
          <Value>{quantity}</Value>
          <Arrow onClick={() => addItem(cartItem)}>&#10095;</Arrow>
        </Label>
        <Label>{price}</Label>
        <RemoveButton onClick={() => clearItem(cartItem)}>&#10005;</RemoveButton>
      </CheckoutItemSection>
    </CheckoutItemWrapper>
  );
};

CheckoutItem.propTypes = {
  cartItem: cartItemTypes,
};

export default React.memo(CheckoutItem);
