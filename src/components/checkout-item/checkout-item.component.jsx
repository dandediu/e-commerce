import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

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

const CheckoutItem = ({ cartItem, addItem, removeItem, clearItem }) => {
  const { imageUrl, name, price, quantity } = cartItem;

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
