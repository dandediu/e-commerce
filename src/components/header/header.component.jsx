import React from 'react';
import PropTypes from 'prop-types';
import APP_ROUTES from 'utils/const/app-routes';
import CartIcon from 'components/cart-icon';
import DropDown from 'components/dropdown';
import { ReactComponent as Logo } from 'assets/crown.svg';

import {
  HeaderContainer,
  DropDownWrapper,
  LogoContainer,
  NavList,
  NavItem,
  OptionLink,
  OptionDiv,
} from './header.styles';

const Header = ({ currentUser, hidden, onSingOut }) => (
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
          <OptionDiv onClick={onSingOut}>Sign out</OptionDiv>
        ) : (
          <OptionLink to={APP_ROUTES.signIn}>Sign In</OptionLink>
        )}
      </NavItem>
      <NavItem>
        <DropDownWrapper>
          <CartIcon />
          {hidden && <DropDown />}
        </DropDownWrapper>
      </NavItem>
    </NavList>
  </HeaderContainer>
);

Header.propTypes = {
  currentUser: PropTypes.shape({}),
  hidden: PropTypes.bool,
  onSingOut: PropTypes.func,
};

export default Header;
