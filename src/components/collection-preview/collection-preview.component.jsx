import React from 'react';
import PropTypes from 'prop-types';
import CollectionCard from 'components/collection-card';
import { useHistory, useRouteMatch } from 'react-router-dom';
import { collectionItemTypes } from 'utils/prop-types';
import uid from 'utils/uid';
import {
  CollectionPreviewWrapper,
  Title,
  CollectionPreviewList,
  CollectionPreviewListItem,
} from './collection-preview.styles';

const CollectionPreview = ({ title, items, routeName }) => {
  const history = useHistory();
  const match = useRouteMatch();
  const onClickHandler = () => history.push(`${match.path}/${routeName}`);

  return (
    <CollectionPreviewWrapper>
      <Title onClick={onClickHandler}>{title.toUpperCase()}</Title>
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
};

CollectionPreview.propTypes = {
  title: PropTypes.string,
  items: PropTypes.arrayOf(collectionItemTypes),
  routeName: PropTypes.string,
};

export default CollectionPreview;
