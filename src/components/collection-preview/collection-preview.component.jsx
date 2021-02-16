import React from 'react';
import PropTypes from 'prop-types';
import CollectionItem from 'components/collection-item';

import './collection-preview.styles.scss';

const CollectionPreview = ({ title, items }) => (
  <div className="collection-preview">
    <h1 className="title">{title.toUpperCase()}</h1>
    <div className="preview">
      {items
        .filter((item, idx) => idx < 4)
        .map(({ id, ...otherItemProps }) => (
          <CollectionItem key={id} {...otherItemProps} />
        ))}
    </div>
  </div>
);

CollectionPreview.propTypes = {};

export default CollectionPreview;
