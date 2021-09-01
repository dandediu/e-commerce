import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import CollectionCard from 'components/collection-card';
import { collectionItemTypes } from 'utils/prop-types';
import uid from 'utils/uid';

import {
  CollectionPreviewWrapper,
  Title,
  CollectionPreviewList,
  CollectionPreviewListItem,
} from './collection-preview.styles';

const CollectionPreview = ({ title, items, history, match, routeName }) => (
  <CollectionPreviewWrapper>
    <Title onClick={() => history.push(`${match.path}/${routeName}`)}>{title.toUpperCase()}</Title>
    <CollectionPreviewList>
      {items
        .filter((_, idx) => idx < 4)
        .map((item) => (
          <CollectionPreviewListItem key={uid()}>
            <CollectionCard item={item} />
          </CollectionPreviewListItem>
        ))}
    </CollectionPreviewList>
  </CollectionPreviewWrapper>
);

CollectionPreview.propTypes = {
  title: PropTypes.string,
  items: PropTypes.arrayOf(collectionItemTypes),
  history: PropTypes.shape({}),
  match: PropTypes.shape({}),
  routeName: PropTypes.string,
};

export default withRouter(CollectionPreview);
