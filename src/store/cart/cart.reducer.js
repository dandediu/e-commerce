import cartAtionsTypes from './cart.types';

const { TOGGLE_CART_HIDDEN } = cartAtionsTypes;
const INITIAL_STATE = { hidden: false };

const cartReducer = (state = INITIAL_STATE, action) => {
  const { type } = action;

  switch (type) {
    case TOGGLE_CART_HIDDEN:
      return { ...state, hidden: !state.hidden };

    default:
      return state;
  }
};

export default cartReducer;
