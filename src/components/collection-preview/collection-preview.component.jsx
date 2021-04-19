import React from 'react';
import PropTypes from 'prop-types';
import CollectionItem from 'components/collection-item';
import { collectionItemTypes } from 'utils/prop-types';

import './collection-preview.styles.scss';

const CollectionPreview = ({ title, items }) => (
  <div className="collection-preview">
    <h1 className="title">{title.toUpperCase()}</h1>
    <div className="preview">
      {items
        .filter((_, idx) => idx < 4)
        .map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
    </div>
  </div>
);

CollectionPreview.propTypes = {
  title: PropTypes.string,
  items: PropTypes.arrayOf(collectionItemTypes),
};

export default CollectionPreview;
