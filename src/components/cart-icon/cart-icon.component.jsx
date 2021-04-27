import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { cartActions, cartSelectors } from 'store/cart';
import { ReactComponent as ShoppingIcon } from 'assets/shopping-bag.svg';

import './cart-icon.styles.scss';

const CartIcon = ({ toggleCartHidden, itemCount }) => (
  <div className="cart-icon" onClick={toggleCartHidden}>
    <ShoppingIcon className="shopping-icon" />
    <span className="item-count">{itemCount}</span>
  </div>
);

CartIcon.propTypes = {
  toggleCartHidden: PropTypes.func.isRequired,
  itemCount: PropTypes.number,
};

const mapStateToProps = (state) => ({
  itemCount: cartSelectors.selectCartItemsCount(state),
});

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(cartActions.toggleCartHidden()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
