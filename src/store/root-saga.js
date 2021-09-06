import { all, call } from 'redux-saga/effects';

import { shopSagas } from 'store/shop';

export default function* rootSaga() {
  yield all([call(shopSagas.fetchCollectionsStart)]);
}
