import React, { useEffect } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import { shopActions } from 'store/shop';
import CollectionPage from 'pages/collection';
import CollectionOverviewContainer from 'components/collection-overview';

const Shop = ({ match, fetchCollections }) => {
  useEffect(() => {
    fetchCollections();
  }, []);

  return (
    <>
      <Route exact path={`${match?.path}`} component={CollectionOverviewContainer} />
      <Route exact path={`${match?.path}/:collectionId`} component={CollectionPage} />
    </>
  );
};

const mapDispatchToProps = (dispatch) => ({
  fetchCollections: () => dispatch(shopActions.fetchCollectionsStartAsync()),
});

export default connect(null, mapDispatchToProps)(Shop);
