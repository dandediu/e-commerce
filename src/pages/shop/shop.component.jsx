import React from 'react';
import { Route } from 'react-router-dom';

import CollectionOverview from 'components/collection-overview';
import Collection from 'pages/collection';

import './shop.styles.scss';

const Shop = ({ match }) => (
  <div className="shop">
    <Route exact path={`${match?.path}`}>
      <CollectionOverview />
    </Route>
    <Route
      exact
      path={`${match?.path}/:collectionId`}
      component={(props) => <Collection {...props} />}
    />
  </div>
);

Shop.propTypes = {};

export default Shop;
