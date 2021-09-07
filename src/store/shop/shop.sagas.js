import { takeLatest, call, put } from 'redux-saga/effects';

import { fireStore, convertCollectionsToSnapshotMap } from 'api/utils';
import shopTypes from './shop.types';
import shopActions from './shop.actions';

function* fetchCollectionAsync() {
  try {
    const collectionRef = fireStore.collection('collections');
    const snapshot = yield collectionRef.get();
    const collectionMap = yield call(convertCollectionsToSnapshotMap, snapshot);

    yield put(shopActions.fetchCollectionSuccess(collectionMap));
  } catch (error) {
    yield put(shopActions.fetchCollectionFailure(error.message));
  }
}

function* fetchCollectionsStart() {
  yield takeLatest(shopTypes.FETCH_COLLECTION_START, fetchCollectionAsync);
}

export default {
  fetchCollectionsStart,
};
