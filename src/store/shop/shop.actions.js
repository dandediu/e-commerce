import { fireStore, convertCollectionsToSnapshotMap } from 'api/utils';
import shopTypes from './shop.types';

const fetchCollectionsStart = () => ({
  type: shopTypes.FETCH_COLLECTION_START,
});

const fetchCollectionSuccess = (collectionMap) => ({
  type: shopTypes.FETCH_COLLECTION_SUCCESS,
  payload: collectionMap,
});

const fetchCollectionFailure = (errorMessage) => ({
  type: shopTypes.FETCH_COLLECTION_FAILURE,
  payload: errorMessage,
});

const fetchCollectionsStartAsync = () => (dispatch) => {
  const collectionRef = fireStore.collection('collections');

  dispatch(fetchCollectionsStart());
  collectionRef
    .get()
    .then((snapshot) => {
      const collectionMap = convertCollectionsToSnapshotMap(snapshot);

      dispatch(fetchCollectionSuccess(collectionMap));
    })
    .catch((error) => dispatch(fetchCollectionFailure(error.message)));
};

export default {
  fetchCollectionsStart,
  fetchCollectionSuccess,
  fetchCollectionFailure,
  fetchCollectionsStartAsync,
};
