import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';

import CartItem from 'components/cart-item';
import { cartItemTypes } from 'utils/prop-types';
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

const CartDropDown = ({ cartItems, history, dispatch }) => {
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

CartDropDown.propTypes = {
  cartItems: PropTypes.arrayOf(cartItemTypes),
  history: PropTypes.shape({}),
  dispatch: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  cartItems: cartSelectors.selectCartItems,
});

export default withRouter(connect(mapStateToProps)(CartDropDown));
