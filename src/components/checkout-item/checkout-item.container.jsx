import React from 'react';
import { useDispatch } from 'react-redux';
import { cardItemTypes } from 'utils/prop-types';
import { cartActions } from 'store/cart';
import CheckoutItem from './checkout-item.component';

const CheckoutItemContainer = ({ cardItem }) => {
  const dispatch = useDispatch();
  const addItem = (item) => dispatch(cartActions.addItem(item));
  const removeItem = (item) => dispatch(cartActions.removeItem(item));
  const clearItem = (item) => dispatch(cartActions.clearItem(item));

  return (
    <CheckoutItem
      cardItem={cardItem}
      addItem={addItem}
      removeItem={removeItem}
      clearItem={clearItem}
    />
  );
};

CheckoutItemContainer.propTypes = {
  cardItem: cardItemTypes,
};

export default React.memo(CheckoutItemContainer);
