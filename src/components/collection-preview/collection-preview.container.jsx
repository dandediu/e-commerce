import React from 'react';
import { useHistory, useRouteMatch } from 'react-router-dom';
import { collectionItemTypes } from 'utils/prop-types';
import PropTypes from 'prop-types';
import CollectionPreview from './collection-preview.component';

const CollectionPreviewContainer = ({ title, items, routeName }) => {
  const history = useHistory();
  const match = useRouteMatch();
  const onClickTileHandler = () => history.push(`${match.path}/${routeName}`);

  return (
    <CollectionPreview
      title={title}
      items={items}
      routeName={routeName}
      onClickTitles={onClickTileHandler}
    />
  );
};

CollectionPreviewContainer.propTypes = {
  title: PropTypes.string,
  items: PropTypes.arrayOf(collectionItemTypes),
  routeName: PropTypes.string,
};

export default CollectionPreviewContainer;
