import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { cartActions } from 'store/cart';
import { collectionItemTypes } from 'utils/prop-types';

import CollectionCard from './collection-card.component';

const CollectionCardContainer = ({ item, width }) => {
  const dispatch = useDispatch();

  const addItemHandler = () => dispatch(cartActions.addItem(item));

  return <CollectionCard item={item} width={width} onAddItem={addItemHandler} />;
};

CollectionCardContainer.propTypes = {
  item: collectionItemTypes,
  width: PropTypes.number,
};

export default CollectionCardContainer;
