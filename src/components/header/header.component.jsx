import React from 'react';
import { Link } from 'react-router-dom';

import { ReactComponent as Logo } from 'assets/crown.svg';

import './header.styles.scss';

const Header = () => (
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
  </div>
);

export default Header;
