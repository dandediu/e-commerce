import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';

import CustomButton from 'components/custom-button';
import CartItem from 'components/cart-item';
import { cartItemTypes } from 'utils/prop-types';
import { cartSelectors, cartActions } from 'store/cart';

import './cart-dropdown.styles.scss';

const CartDropDown = ({ cartItems, history, dispatch }) => {
  const goCheckoutHandler = () => {
    history.push('/checkout');
    dispatch(cartActions.toggleCartHidden());
  };

  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.length > 0 ? (
          cartItems.map((item) => <CartItem key={item.id} cartItem={item} />)
        ) : (
          <span className="empty-message">Your cart is empty</span>
        )}
      </div>
      <CustomButton onClick={goCheckoutHandler} type="button">
        GO TO CHECKOUT
      </CustomButton>
    </div>
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
