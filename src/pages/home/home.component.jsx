import React from 'react';
import PropTypes from 'prop-types';
import Directory from 'components/directory';

// import './home.styles.scss';

import { HomeContainer } from './home.styles';

const Home = () => (
  <HomeContainer>
    <Directory />
  </HomeContainer>
);

Home.propTypes = {};

export default Home;
