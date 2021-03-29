import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { auth } from 'api/utils';
import { connect } from 'react-redux';
import CartIcon from 'components/cart-icon';
import CartDropDown from 'components/cart-dropdown';
import { ReactComponent as Logo } from 'assets/crown.svg';

import './header.styles.scss';

const Header = ({ currentUser }) => (
  <div className="header">
    <Link to="/">
      <Logo className="logo" />
    </Link>
    <ul className="options">
      <li className="option">
        <Link to="/shop" className="link">
          Shop
        </Link>
      </li>
      <li className="option">
        <Link to="/shop" className="link">
          Contact
        </Link>
      </li>
      <li>
        {currentUser ? (
          <div className="option" onClick={() => auth.signOut()}>
            Sign out
          </div>
        ) : (
          <Link className="option" to="/signin">
            Sign In
          </Link>
        )}
      </li>
      <li>
        <CartIcon />
      </li>
    </ul>
    <CartDropDown />
  </div>
);

PropTypes.propTypes = {
  currentUser: PropTypes.shape({}),
};

const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser,
});

export default connect(mapStateToProps)(Header);
