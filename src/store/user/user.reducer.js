import userTypes from './user.types';

const INITIAL_STATE = {
  currentUser: null,
  error: null,
};

const userReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case userTypes.GOOGLE_SIGN_IN_SUCCESS:
    case userTypes.EMAIL_SIGN_IN_SUCCESS:
      return {
        ...state,
        currentUser: payload,
        error: null,
      };

    case userTypes.GOOGLE_SIGN_IN_FAILURE:
    case userTypes.EMAIL_SIGN_IN_FAILURE:
      return {
        ...state,
        error: payload,
      };

    default:
      return state;
  }
};

export default userReducer;
