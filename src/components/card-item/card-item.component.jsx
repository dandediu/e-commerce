import React from 'react';
import { cardItemTypes } from 'utils/prop-types';

import { CardItemWrapper, Image, Label, CardItemDetails } from './card-item.styles';

const CardItem = ({ cardItem: { imageUrl, price, name, quantity } }) => (
  <CardItemWrapper>
    <Image src={imageUrl} alt={name} />
    <CardItemDetails>
      <Label>{name}</Label>
      <Label>{`${quantity} x $${price}`}</Label>
    </CardItemDetails>
  </CardItemWrapper>
);

CardItem.propTypes = {
  cardItem: cardItemTypes,
};

export default React.memo(CardItem);
