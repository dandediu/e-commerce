import React from 'react';
import PropTypes from 'prop-types';
import Directory from 'components/directory';

import './home.styles.scss';

const Home = () => (
  <div className="homepage">
    <Directory />
  </div>
);

Home.propTypes = {};

export default Home;
