import userTypes from './user.types';

const googleSignInStart = () => ({ type: userTypes.GOOGLE_SIGN_IN_START });

const emailSignInStart = (userCredentials) => ({
  type: userTypes.EMAIL_SIGN_IN_START,
  payload: userCredentials,
});

const signInSuccess = (user) => ({ type: userTypes.SIGN_IN_SUCCESS, payload: user });

const signInFailure = (error) => ({ type: userTypes.SIGN_IN_FAILURE, payload: error });

const checkUserSession = () => ({ type: userTypes.CHECK_USER_SESSION });

export default {
  googleSignInStart,
  emailSignInStart,
  signInFailure,
  signInSuccess,
  checkUserSession,
};
