import React, { useEffect } from 'react';
import { Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { shopActions } from 'store/shop';
import CollectionPage from 'pages/collection';
import CollectionOverviewContainer from 'components/collection-overview';

const Shop = ({ match }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(shopActions.fetchCollectionsStart());
  }, [dispatch]);

  return (
    <>
      <Route exact path={`${match?.path}`} component={CollectionOverviewContainer} />
      <Route exact path={`${match?.path}/:collectionId`} component={CollectionPage} />
    </>
  );
};

export default Shop;
