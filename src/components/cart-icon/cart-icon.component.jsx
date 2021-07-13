import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { cartActions, cartSelectors } from 'store/cart';
import { Cart, ItemCount, ShoppingIcon } from './cart-icon.styles';

const CartIcon = ({ toggleCartHidden, itemCount }) => (
  <Cart onClick={toggleCartHidden}>
    <ItemCount>{itemCount}</ItemCount>
    <ShoppingIcon />
  </Cart>
);

CartIcon.propTypes = {
  toggleCartHidden: PropTypes.func.isRequired,
  itemCount: PropTypes.number,
};

const mapStateToProps = createStructuredSelector({
  itemCount: cartSelectors.selectCartItemsCount,
});

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(cartActions.toggleCartHidden()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
