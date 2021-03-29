import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { cartActions } from 'store/cart';
import { ReactComponent as ShoppingIcon } from 'assets/shopping-bag.svg';

import './cart-icon.styles.scss';

const CartIcon = ({ toggleCartHidden }) => (
  <div className="cart-icon" onClick={toggleCartHidden}>
    <ShoppingIcon className="shopping-icon" />
    <span className="item-count" />
  </div>
);

CartIcon.propTypes = {
  toggleCartHidden: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(cartActions.toggleCartHidden()),
});

export default connect(null, mapDispatchToProps)(CartIcon);
