import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CollectionPreview from 'components/collection-preview';
import { shopSelectors } from 'store/shop';
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

const mapStateToProps = createStructuredSelector({
  collections: shopSelectors.selectCollectionForPreview,
});

export default connect(mapStateToProps)(CollectionOverview);
