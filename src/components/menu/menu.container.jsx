import React from 'react';
import { useSelector } from 'react-redux';

import { directorySelectors } from 'store/directory';
import Menu from './menu.component';

const MenuContainer = () => {
  const sections = useSelector(directorySelectors.selectDirectorySections);

  return <Menu sections={sections} />;
};

export default MenuContainer;
