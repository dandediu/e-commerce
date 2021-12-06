import React from 'react';
import PropTypes from 'prop-types';
import { cardItemTypes } from 'utils/prop-types';
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

const CheckoutItem = ({ cardItem, addItem, removeItem, clearItem }) => {
  const { imageUrl, name, price, quantity } = cardItem;

  return (
    <CheckoutItemWrapper>
      <ImageContainer>
        <Image src={imageUrl} alt="item" />
      </ImageContainer>
      <CheckoutItemSection>
        <Label>{name}</Label>
        <Label>
          <Arrow onClick={() => removeItem(cardItem)}>&#10094;</Arrow>
          <Value>{quantity}</Value>
          <Arrow onClick={() => addItem(cardItem)}>&#10095;</Arrow>
        </Label>
        <Label>{price}</Label>
        <RemoveButton onClick={() => clearItem(cardItem)}>&#10005;</RemoveButton>
      </CheckoutItemSection>
    </CheckoutItemWrapper>
  );
};

CheckoutItem.propTypes = {
  cardItem: cardItemTypes,
  addItem: PropTypes.func.isRequired,
  removeItem: PropTypes.func.isRequired,
  clearItem: PropTypes.func.isRequired,
};

export default CheckoutItem;
