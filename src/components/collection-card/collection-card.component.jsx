import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
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

const CollectionCard = ({ item, width, addItem }) => {
  const { name, price, imageUrl } = item;
  const addItemHandler = () => addItem(item);

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
  addItem: PropTypes.func,
};

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(cartActions.addItem(item)),
});

export default connect(null, mapDispatchToProps)(CollectionCard);
