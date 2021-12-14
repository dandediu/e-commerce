import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import CollectionCard from 'components/collection-card';
import { shopSelectors } from 'store/shop';
import uid from 'utils/uid';

import { CollectionWrapper, CollectionList, Title } from './collection.styles';

const CollectionPage = () => {
  const { collectionId } = useParams();
  const collection = useSelector(shopSelectors.selectCollection(collectionId));
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

export default CollectionPage;
