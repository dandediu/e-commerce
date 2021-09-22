import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import APP_ROUTES from 'utils/const/app-routes';
import CartIcon from 'components/cart-icon';
import CartDropDown from 'components/dropdown';
import { ReactComponent as Logo } from 'assets/crown.svg';
import { cartSelectors } from 'store/cart';
import { userSelectors, userActions } from 'store/user';

import {
  HeaderContainer,
  DropDownWrapper,
  LogoContainer,
  NavList,
  NavItem,
  OptionLink,
  OptionDiv,
} from './header.styles';

const Header = ({ currentUser, hidden, signOut }) => (
  <HeaderContainer>
    <LogoContainer to={APP_ROUTES.home}>
      <Logo />
    </LogoContainer>
    <NavList>
      <NavItem>
        <OptionLink to={APP_ROUTES.shop}>Shop</OptionLink>
      </NavItem>
      <NavItem>
        <OptionLink to={APP_ROUTES.contact}>Contact</OptionLink>
      </NavItem>
      <NavItem>
        {currentUser ? (
          <OptionDiv onClick={signOut}>Sign out</OptionDiv>
        ) : (
          <OptionLink to={APP_ROUTES.signIn}>Sign In</OptionLink>
        )}
      </NavItem>
      <NavItem>
        <DropDownWrapper>
          <CartIcon />
          {hidden && <CartDropDown />}
        </DropDownWrapper>
      </NavItem>
    </NavList>
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

const mapDispatchToProps = (dispatch) => ({
  signOut: () => dispatch(userActions.signOutStart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
