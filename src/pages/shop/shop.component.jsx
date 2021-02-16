import React, { useState } from 'react';
import PropTypes from 'prop-types';
import SHOP_DATA from 'utils/const/shop.data';
import CollectionPreview from 'components/collection-preview';

import './shop.styles.scss';

const Shop = ({ collections = SHOP_DATA }) => (
  <div className="shop">
    {collections.map(({ id, ...otherCollectionProps }) => (
      <CollectionPreview key={id} {...otherCollectionProps} />
    ))}
  </div>
);

Shop.propTypes = {};

export default Shop;
