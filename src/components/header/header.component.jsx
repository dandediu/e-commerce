import React from 'react';
import PropTypes from 'prop-types';
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
  OptionsList,
  Option,
  OptionLink,
  OptionDiv,
} from './header.styles';

const Header = ({ currentUser, hidden }) => (
  <HeaderContainer>
    <LogoContainer to="/">
      <Logo />
    </LogoContainer>
    <OptionsList>
      <Option>
        <OptionLink>Shop</OptionLink>
      </Option>
      <Option>
        <OptionLink to="/shop" className="link">
          Contact
        </OptionLink>
      </Option>
      <Option>
        {currentUser ? (
          <OptionDiv onClick={() => auth.signOut()}>Sign out</OptionDiv>
        ) : (
          <OptionLink to="/signin">Sign In</OptionLink>
        )}
      </Option>
      <Option>
        <CartIcon />
      </Option>
    </OptionsList>
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
