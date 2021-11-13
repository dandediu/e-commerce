import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { cartActions } from 'store/cart';
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

const CollectionCard = ({ item, width }) => {
  const dispatch = useDispatch();
  const { name, price, imageUrl } = item;

  const addItemHandler = () => dispatch(cartActions.addItem(item));

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
        <Button onClick={addItemHandler} type="button" isInverted>
          Add to cart
        </Button>
      </CardContent>
    </CollectionCardWrapper>
  );
};

CollectionCard.propTypes = {
  item: collectionItemTypes,
  width: PropTypes.number,
};

export default CollectionCard;
