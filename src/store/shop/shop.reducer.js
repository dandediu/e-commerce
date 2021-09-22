import shopTypes from './shop.types';

const INITIAL_STATE = {
  collections: null,
  isFetching: false,
  errorMessage: undefined,
};

const shopReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case shopTypes.FETCH_COLLECTION_START:
      return {
        ...state,
        isFetching: true,
      };
    case shopTypes.FETCH_COLLECTION_SUCCESS:
      return {
        ...state,
        isFetching: false,
        collections: payload,
      };
    case shopTypes.FETCH_COLLECTION_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorMessage: payload,
      };

    default:
      return state;
  }
};

export default shopReducer;
