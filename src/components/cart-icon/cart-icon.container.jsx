import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { cartActions, cartSelectors } from 'store/cart';
import CartIcon from './cart-icon.component';

const CartIconContainer = () => {
  const dispatch = useDispatch();
  const itemCount = useSelector(cartSelectors.selectCartItemsCount);
  const toggleHidden = () => dispatch(cartActions.toggleCartHidden());

  return <CartIcon itemCount={itemCount} onToggle={toggleHidden} />;
};

export default CartIconContainer;
