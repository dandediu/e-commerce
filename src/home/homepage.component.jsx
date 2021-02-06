import React from 'react';
import PropTypes from 'prop-types';
import './homepage.styles.scss';

const HomePageComponent = () => (
  <div className="homepage">
    <div className="directory-menu">
      <div className="menu-item">
        <div className="content">
          <h1 className="title">Hats</h1>
          <span className="subtitle">Shop Now</span>
        </div>
      </div>
      <div className="menu-item">
        <div className="content">
          <h1 className="title">Jackets</h1>
          <span className="subtitle">Shop Now</span>
        </div>
      </div>
      <div className="menu-item">
        <div className="content">
          <h1 className="title">{`Women's`}</h1>
          <span className="subtitle">Shop Now</span>
        </div>
      </div>
      <div className="menu-item">
        <div className="content">
          <h1 className="title">{`Men's`}</h1>
          <span className="subtitle">Shop Now</span>
        </div>
      </div>
    </div>
  </div>
);

HomePageComponent.propTypes = {};

export default HomePageComponent;
