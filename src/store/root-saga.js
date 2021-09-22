import { all, call } from 'redux-saga/effects';

import { shopSagas } from 'store/shop';
import { userSagas } from 'store/user';
import { cartSagas } from 'store/cart';

export default function* rootSaga() {
  yield all([
    call(shopSagas.allShopSagas),
    call(userSagas.allUserSagas),
    call(cartSagas.allCartSagas),
  ]);
}
