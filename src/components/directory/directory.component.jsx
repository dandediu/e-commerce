import React, { useState } from 'react';
import PropTypes from 'prop-types';
import MenuItem from 'components/menu-item';
import SECTIONS from 'utils/const/sections';

import './directory.styles.scss';

const Directory = ({ sections = SECTIONS }) => (
  <div className="directory-menu">
    {sections.map(({ title, imageUrl, id, size }) => (
      <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} />
    ))}
  </div>
);

Directory.propTypes = {};

export default Directory;
