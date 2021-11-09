import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

import CollectionPreview from 'components/collection-preview';
import { collectionTypes } from 'utils/prop-types';
import { shopSelectors } from 'store/shop';

import { CollectionOverviewList } from './collection-overview.styles';

const CollectionOverview = () => {
  const collections = useSelector(shopSelectors.selectCollectionForPreview);

  return (
    <CollectionOverviewList>
      {collections.map(({ id, ...otherCollectionProps }) => (
        <CollectionPreview key={id} {...otherCollectionProps} />
      ))}
    </CollectionOverviewList>
  );
};

CollectionOverview.propTypes = {
  collections: PropTypes.arrayOf(collectionTypes),
};

export default CollectionOverview;
