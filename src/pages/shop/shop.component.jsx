import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CollectionPreview from 'components/collection-preview';
import { collectionItemTypes } from 'utils/prop-types';
import { shopSelectors } from 'store/shop';

import './shop.styles.scss';

const Shop = ({ collections }) => (
  <div className="shop">
    {collections.map(({ id, ...otherCollectionProps }) => (
      <CollectionPreview key={id} {...otherCollectionProps} />
    ))}
  </div>
);

Shop.propTypes = {
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

export default connect(mapStateToProps)(Shop);
