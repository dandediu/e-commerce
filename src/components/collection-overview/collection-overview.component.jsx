import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CollectionPreview from 'components/collection-preview';
import { shopSelectors } from 'store/shop';
import { collectionTypes } from 'utils/prop-types';

import './collection-overview.styles.scss';

const CollectionOverview = ({ collections }) => (
  <div className="collection-overview">
    {console.log(collections)}
    {collections.map(({ id, ...otherCollectionProps }) => (
      <CollectionPreview key={id} {...otherCollectionProps} />
    ))}
  </div>
);

CollectionOverview.propTypes = {
  collections: PropTypes.arrayOf(collectionTypes),
};

const mapStateToProps = createStructuredSelector({
  collections: shopSelectors.selectCollectionForPreview,
});

export default connect(mapStateToProps)(CollectionOverview);
