import React from 'react';
import { Route } from 'react-router-dom';

import CollectionOverview from 'components/collection-overview';
import CollectionPage from 'pages/collection';

const Shop = ({ match }) => (
  <>
    <Route exact path={`${match?.path}`}>
      <CollectionOverview />
    </Route>
    <Route
      exact
      path={`${match?.path}/:collectionId`}
      component={(props) => <CollectionPage {...props} />}
    />
  </>
);

export default Shop;
