import React from 'react';
import PropTypes from 'prop-types';
import { collectionItemTypes } from 'utils/prop-types';
import {
  CollectionCardWrapper,
  CardImageWrapper,
  CardImage,
  Button,
  CardContent,
  CardRow,
  Label,
} from './collection-card.styles';

const CollectionCard = ({ item, width, onAddItem }) => {
  const { name, price, imageUrl } = item;

  return (
    <CollectionCardWrapper width={width}>
      <CardImageWrapper imageSrc={imageUrl}>
        <CardImage src={imageUrl} alt="No image" />
      </CardImageWrapper>
      <CardContent>
        <CardRow>
          <Label>{name}</Label>
          <Label>{price}</Label>
        </CardRow>
        <Button onClick={onAddItem} type="button" isInverted>
          Add to cart
        </Button>
      </CardContent>
    </CollectionCardWrapper>
  );
};

CollectionCard.propTypes = {
  item: collectionItemTypes,
  width: PropTypes.number,
  onAddItem: PropTypes.func,
};

export default CollectionCard;
