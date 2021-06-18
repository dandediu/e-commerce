import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { auth } from 'api/utils';
import CartIcon from 'components/cart-icon';
import CartDropDown from 'components/cart-dropdown';
import { ReactComponent as Logo } from 'assets/crown.svg';
import { cartSelectors } from 'store/cart';
import { userSelectors } from 'store/user';

import {
  HeaderContainer,
  LogoContainer,
  OptionsContainer,
  OptionLink,
  OptionDiv,
} from './header.styles';

const Header = ({ currentUser, hidden }) => (
  <HeaderContainer>
    <LogoContainer to="/">
      <Logo className="logo" />
    </LogoContainer>
    <OptionsContainer>
      <OptionLink>Shop</OptionLink>
      <OptionLink to="/shop" className="link">
        Contact
      </OptionLink>
      {currentUser ? (
        <OptionDiv onClick={() => auth.signOut()}>Sign out</OptionDiv>
      ) : (
        <OptionLink to="/signin">Sign In</OptionLink>
      )}
      <CartIcon />
    </OptionsContainer>
    {hidden && <CartDropDown />}
  </HeaderContainer>
);

Header.propTypes = {
  currentUser: PropTypes.shape({}),
  hidden: PropTypes.bool,
};

const mapStateToProps = createStructuredSelector({
  currentUser: userSelectors.selectCurrentUser,
  hidden: cartSelectors.selectCartHidden,
});

export default connect(mapStateToProps)(Header);
