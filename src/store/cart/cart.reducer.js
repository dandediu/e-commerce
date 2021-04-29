import cartActionsTypes from './cart.types';
import { addItemToCart } from './cart.utils';

const { TOGGLE_CART_HIDDEN, ADD_ITEM, CLEAR_ITEM_FROM_CART } = cartActionsTypes;
const INITIAL_STATE = { hidden: false, cartItems: [] };

const cartReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case TOGGLE_CART_HIDDEN:
      return { ...state, hidden: !state.hidden };
    case ADD_ITEM:
      return { ...state, cartItems: addItemToCart(state.cartItems, payload) };
    case CLEAR_ITEM_FROM_CART:
      return { ...state, cartItems: state.cartItems.filter((item) => item.id !== payload.id) };

    default:
      return state;
  }
};

export default cartReducer;
