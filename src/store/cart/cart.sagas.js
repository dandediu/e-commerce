import { all, call, takeLatest, put } from 'redux-saga/effects';
import userTypes from 'store/user/user.types';
import cartActions from 'store/cart/cart.actions';

export function* clearCartOnSignOut() {
  yield put(cartActions.clearCart());
}

function* onSingOutSuccess() {
  yield takeLatest(userTypes.SIGN_OUT_SUCCESS, clearCartOnSignOut);
}

function* allCartSagas() {
  yield all([call(onSingOutSuccess)]);
}

export default { allCartSagas };
