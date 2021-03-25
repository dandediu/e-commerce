import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from 'assets/crown.svg';
import { auth } from 'api/utils';
import { connect } from 'react-redux';

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
    </ul>
    {currentUser ? (
      <div className="option" onClick={() => auth.signOut()}>
        Sign out
      </div>
    ) : (
      <Link className="option" to="/signin">
        Sign In
      </Link>
    )}
  </div>
);

PropTypes.propTypes = {
  currentUser: PropTypes.shape({}),
};

const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser,
});

export default connect(mapStateToProps)(Header);
