import { takeLatest, put, all, call } from 'redux-saga/effects';
import { googleProvider, auth, createUserProfileDocument } from 'api/utils';

import userTypes from './user.types';
import userActions from './user.actions';

function* getSnapshotFromUserAuth(userAuth) {
  try {
    const userRef = yield call(createUserProfileDocument, userAuth);
    const userSnapshot = yield userRef.get();

    yield put(userActions.signInSuccess({ id: userSnapshot.id, ...userSnapshot.data() }));
  } catch (error) {
    yield put(userActions.signInFailure({ error }));
  }
}

function* signInWithGoogle() {
  try {
    const { user } = yield auth.signInWithPopup(googleProvider);

    yield getSnapshotFromUserAuth(user);
  } catch (error) {
    yield put(userActions.signInFailure({ error }));
  }
}

function* signInWithEmail({ payload: { email, password } }) {
  try {
    const { user } = yield auth.signInWithEmailAndPassword(email, password);

    yield getSnapshotFromUserAuth(user);
  } catch (error) {
    put(userActions.signInFailure(error));
  }
}

function* onGoogleSignInStart() {
  yield takeLatest(userTypes.GOOGLE_SIGN_IN_START, signInWithGoogle);
}

function* onEmailSignInStart() {
  yield takeLatest(userTypes.EMAIL_SIGN_IN_START, signInWithEmail);
}

function* allUserSagas() {
  yield all([call(onGoogleSignInStart), call(onEmailSignInStart)]);
}

export default { allUserSagas };
