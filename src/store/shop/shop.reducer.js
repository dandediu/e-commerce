import shopTypes from './shop.types';

const { UPDATE_COLLECTION } = shopTypes;

const INITIAL_STATE = {
  collections: null,
};

const shopReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case UPDATE_COLLECTION:
      return {
        ...state,
        collections: payload,
      };

    default:
      return state;
  }
};

export default shopReducer;
