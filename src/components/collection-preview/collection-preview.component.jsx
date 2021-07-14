import React from 'react';
import PropTypes from 'prop-types';

import CollectionItem from 'components/collection-card';
import { collectionItemTypes } from 'utils/prop-types';
import uid from 'utils/uid';

import {
  CollectionPreviewWrapper,
  Title,
  CollectionPreviewList,
  CollectionPreviewListItem,
} from './collection-preview.styles';

const CollectionPreview = ({ title, items }) => (
  <CollectionPreviewWrapper>
    <Title>{title.toUpperCase()}</Title>
    <CollectionPreviewList>
      {items
        .filter((_, idx) => idx < 4)
        .map((item) => (
          <CollectionPreviewListItem key={uid()}>
            <CollectionItem item={item} />
          </CollectionPreviewListItem>
        ))}
    </CollectionPreviewList>
  </CollectionPreviewWrapper>
);

CollectionPreview.propTypes = {
  title: PropTypes.string,
  items: PropTypes.arrayOf(collectionItemTypes),
};

export default CollectionPreview;
