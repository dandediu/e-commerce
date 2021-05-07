import React from 'react';
import { connect } from 'react-redux';

import CollectionItem from 'components/collection-item';
import { shopSelectors } from 'store/shop';
import { collectionTypes } from 'utils/prop-types';

import './collection.styles.scss';

const Collection = ({ collection }) => {
  const { title, items } = collection;

  return (
    <div className="collection">
      <h2>{title}</h2>
      <div className="items">
        {items.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

Collection.propTypes = {
  collection: collectionTypes,
};

const mapStateToProps = (state, ownProps) => ({
  collection: shopSelectors.selectCollection(ownProps.match.params.collectionId)(state),
});

export default connect(mapStateToProps)(Collection);
