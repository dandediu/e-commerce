import cartActionsTypes from './cart.types';

const toggleCartHidden = () => ({
  type: cartActionsTypes.TOGGLE_CART_HIDDEN,
});

const addItem = (item) => ({
  type: cartActionsTypes.ADD_ITEM,
  payload: item,
});

const removeItem = (item) => ({
  type: cartActionsTypes.REMOVE_ITEM,
  payload: item,
});

const clearItem = (item) => ({
  type: cartActionsTypes.CLEAR_ITEM_FROM_CART,
  payload: item,
});

const clearCart = () => ({ type: cartActionsTypes.CLEAR_CART });

export default { toggleCartHidden, addItem, clearItem, removeItem, clearCart };
