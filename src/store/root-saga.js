import { all, call } from 'redux-saga/effects';

import { shopSagas } from 'store/shop';
import { userSagas } from 'store/user';

export default function* rootSaga() {
  yield all([call(shopSagas.fetchCollectionsStart), call(userSagas.allUserSagas)]);
}
