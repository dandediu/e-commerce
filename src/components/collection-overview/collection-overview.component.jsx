import React from 'react';
import PropTypes from 'prop-types';

import CollectionPreview from 'components/collection-preview';
import { collectionTypes } from 'utils/prop-types';

import { CollectionOverviewList } from './collection-overview.styles';

const CollectionOverview = ({ collections }) => (
  <CollectionOverviewList>
    {collections.map(({ id, ...otherCollectionProps }) => (
      <CollectionPreview key={id} {...otherCollectionProps} />
    ))}
  </CollectionOverviewList>
);

CollectionOverview.propTypes = {
  collections: PropTypes.arrayOf(collectionTypes),
};

export default CollectionOverview;
