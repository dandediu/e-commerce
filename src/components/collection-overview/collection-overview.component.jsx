import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CollectionPreview from 'components/collection-preview';
import { shopSelectors } from 'store/shop';
import { collectionItemTypes } from 'utils/prop-types';
import './collection-overview.styles.scss';

const CollectionOverview = ({ collections }) => (
  <div className="collection-overview">
    {collections.map(({ id, ...otherCollectionProps }) => (
      <CollectionPreview key={id} {...otherCollectionProps} />
    ))}
  </div>
);

CollectionOverview.propTypes = {
  collections: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
      routeName: PropTypes.string,
      items: PropTypes.arrayOf(collectionItemTypes),
    }),
  ),
};

const mapStateToProps = createStructuredSelector({
  collections: shopSelectors.selectShopCollections,
});

export default connect(mapStateToProps)(CollectionOverview);
