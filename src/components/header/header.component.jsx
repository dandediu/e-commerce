import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from 'assets/crown.svg';
import { auth } from 'api/utils';

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

export default Header;
