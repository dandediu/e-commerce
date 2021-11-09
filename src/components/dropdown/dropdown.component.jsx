import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import CartItem from 'components/cart-item';
import { cartSelectors, cartActions } from 'store/cart';
import uid from 'utils/uid';

import {
  DropdownInner,
  CloseButton,
  List,
  Message,
  ListItem,
  DropdownButton,
} from './dropdown.styles';

const CartDropDown = () => {
  const history = useHistory();
  const cartItems = useSelector(cartSelectors.selectCartItems);
  const dispatch = useDispatch();

  const onCloseHandler = () => dispatch(cartActions.toggleCartHidden());
  const goCheckoutHandler = () => {
    history.push('/checkout');
    onCloseHandler();
  };

  return (
    <DropdownInner>
      <CloseButton onClick={onCloseHandler} type="button" isTransparent>
        &#10005;
      </CloseButton>
      <List>
        {cartItems.length > 0 ? (
          cartItems.map((item) => (
            <ListItem key={uid()}>
              <CartItem cartItem={item} />
            </ListItem>
          ))
        ) : (
          <Message>Your cart is empty</Message>
        )}
      </List>
      <DropdownButton onClick={goCheckoutHandler} type="button">
        CHECKOUT
      </DropdownButton>
    </DropdownInner>
  );
};

export default CartDropDown;
