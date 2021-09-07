import userTypes from './user.types';

const googleSignInStart = () => ({ type: userTypes.GOOGLE_SIGN_IN_START });
const emailSignInStart = (user) => ({ type: userTypes.EMAIL_SIGN_IN_START, payload: user });
const signInSuccess = (user) => ({ type: userTypes.EMAIL_SIGN_IN_SUCCESS, payload: user });
const signInFailure = (error) => ({ type: userTypes.EMAIL_SIGN_IN_FAILURE, payload: error });

export default {
  googleSignInStart,
  emailSignInStart,
  signInFailure,
  signInSuccess,
};
