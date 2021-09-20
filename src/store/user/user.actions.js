import userTypes from './user.types';

const googleSignInStart = () => ({ type: userTypes.GOOGLE_SIGN_IN_START });

const emailSignInStart = (userCredentials) => ({
  type: userTypes.EMAIL_SIGN_IN_START,
  payload: userCredentials,
});

const signInSuccess = (user) => ({ type: userTypes.SIGN_IN_SUCCESS, payload: user });

const signInFailure = (error) => ({ type: userTypes.SIGN_IN_FAILURE, payload: error });

const checkUserSession = () => ({ type: userTypes.CHECK_USER_SESSION });

const signOutStart = () => ({ type: userTypes.SIGN_OUT_START });

const signOutSuccess = () => ({ type: userTypes.SIGN_OUT_SUCCESS });

const signOutFailure = (error) => ({ type: userTypes.SIGN_IN_FAILURE, payload: error });

const signUpStart = (userCredentials) => ({
  type: userTypes.SIGN_UP_START,
  payload: userCredentials,
});

const signUpSuccess = ({ user, additionalData }) => ({
  type: userTypes.SIGN_UP_START,
  payload: { user, additionalData },
});

const signUpFailure = (error) => ({ type: userTypes.SIGN_UP_FAILURE, payload: error });

export default {
  googleSignInStart,
  emailSignInStart,
  signInFailure,
  signInSuccess,
  checkUserSession,
  signOutStart,
  signOutSuccess,
  signOutFailure,
  signUpStart,
  signUpSuccess,
  signUpFailure,
};
