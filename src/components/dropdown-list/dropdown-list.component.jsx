import React from 'react';
import PropTypes from 'prop-types';
import uid from 'utils/uid';
import CardItem from 'components/card-item';
import { cardItemTypes } from 'utils/prop-types';
import { List, ListItem } from './dropdown-list.styles';

const DropdownList = ({ cardItems = [] }) => (
  <List>
    {cardItems.map((item) => (
      <ListItem key={uid()}>
        <CardItem cardItem={item} />
      </ListItem>
    ))}
  </List>
);

DropdownList.propTypes = {
  cardItems: PropTypes.arrayOf(cardItemTypes),
};

export default DropdownList;
