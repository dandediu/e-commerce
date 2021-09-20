import { takeLatest, put, all, call } from 'redux-saga/effects';
import { googleProvider, auth, createUserProfileDocument, getCurrentUser } from 'api/utils';

import userTypes from './user.types';
import userActions from './user.actions';

function* getSnapshotFromUserAuth(userAuth, additionalData) {
  try {
    const userRef = yield call(createUserProfileDocument, userAuth, additionalData);
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
    yield put(userActions.signInFailure(error));
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

function* isUserAuthenticated() {
  try {
    const userAuth = yield getCurrentUser();

    if (!userAuth) return;
    yield getSnapshotFromUserAuth(userAuth);
  } catch (error) {
    yield put(userActions.signInFailure(error));
  }
}

function* onSingOut() {
  try {
    yield auth.signOut();
    yield put(userActions.signOutSuccess());
  } catch (error) {
    yield put(userActions.signOutFailure(error));
  }
}

function* singUp({ payload: { email, password, displayName } }) {
  try {
    const { user } = yield auth.createUserWithEmailAndPassword(email, password);

    yield put(userActions.signUpSuccess({ user, additionalData: { displayName } }));
  } catch (error) {
    yield put(userActions.signUpFailure(error));
  }
}

function* signInAfterSignUp({ payload: { user, additionalData } }) {
  yield getSnapshotFromUserAuth(user, additionalData);
}

function* onGoogleSignInStart() {
  yield takeLatest(userTypes.GOOGLE_SIGN_IN_START, signInWithGoogle);
}

function* onEmailSignInStart() {
  yield takeLatest(userTypes.EMAIL_SIGN_IN_START, signInWithEmail);
}

function* onCheckUserSession() {
  yield takeLatest(userTypes.CHECK_USER_SESSION, isUserAuthenticated);
}

function* onSingOutStart() {
  yield takeLatest(userTypes.SIGN_OUT_START, onSingOut);
}

function* onSingUpStart() {
  yield takeLatest(userTypes.SIGN_UP_START, singUp);
}

function* onSingUpSuccess() {
  yield takeLatest(userTypes.SIGN_UP_SUCCESS, signInAfterSignUp);
}

function* allUserSagas() {
  yield all([
    call(onGoogleSignInStart),
    call(onEmailSignInStart),
    call(onCheckUserSession),
    call(onSingOutStart),
    call(onSingUpStart),
    call(onSingUpSuccess),
  ]);
}

export default { allUserSagas };
