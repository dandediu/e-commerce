import React, { useEffect, useState } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import CollectionOverview from 'components/collection-overview';
import CollectionPage from 'pages/collection';
import { convertCollectionsToSnapshotMap, fireStore } from 'api/utils';
import { shopActions } from 'store/shop';
import WithSpinner from 'components/with-spinner';

const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

const Shop = ({ match, updateCollections }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const collectionRef = fireStore.collection('collections');

    const unsubscribeFromSnapshot = collectionRef.onSnapshot(async (snapshot) => {
      const collectionMap = await convertCollectionsToSnapshotMap(snapshot);

      updateCollections(collectionMap);
      setLoading(false);
    });

    return () => unsubscribeFromSnapshot();
  }, []);

  return (
    <>
      <Route
        exact
        path={`${match?.path}`}
        render={(props) => <CollectionOverviewWithSpinner isLoading={loading} {...props} />}
      />
      <Route
        exact
        path={`${match?.path}/:collectionId`}
        render={(props) => <CollectionPageWithSpinner isLoading={loading} {...props} />}
      />
    </>
  );
};

const mapDispatchToProps = (dispatch) => ({
  updateCollections: (collections) => dispatch(shopActions.updateCollections(collections)),
});

export default connect(null, mapDispatchToProps)(Shop);
