import React from 'react';
import { connect } from 'react-redux';

import CollectionCard from 'components/collection-card';
import { shopSelectors } from 'store/shop';
import { collectionTypes } from 'utils/prop-types';
import uid from 'utils/uid';

import { CollectionWrapper, CollectionList, Title } from './collection.styles';

const Collection = ({ collection }) => {
  const { title, items } = collection;

  return (
    <CollectionWrapper>
      <Title>{title}</Title>
      <CollectionList>
        {items.map((item) => (
          <CollectionCard key={uid()} item={item} />
        ))}
      </CollectionList>
    </CollectionWrapper>
  );
};

Collection.propTypes = {
  collection: collectionTypes,
};

const mapStateToProps = (state, ownProps) => ({
  collection: shopSelectors.selectCollection(ownProps.match.params.collectionId)(state),
});

export default connect(mapStateToProps)(Collection);
