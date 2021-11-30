import React from 'react';
import PropTypes from 'prop-types';
import MenuItem from 'components/menu-item';
import { MenuList } from './menu.styles';

const Menu = ({ sections }) => (
  <MenuList>
    {sections.map(({ id, ...otherSectionProps }, idx) => (
      <MenuItem isLarge={idx >= 3} key={id} {...otherSectionProps} />
    ))}
  </MenuList>
);

Menu.propTypes = {
  sections: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      imageUrl: PropTypes.string,
      id: PropTypes.number,
      linkUrl: PropTypes.string,
    }),
  ),
};

export default Menu;
