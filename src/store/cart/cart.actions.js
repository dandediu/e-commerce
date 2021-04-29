import cartActionsTypes from './cart.types';

const toggleCartHidden = () => ({
  type: cartActionsTypes.TOGGLE_CART_HIDDEN,
});

const addItem = (item) => ({ type: cartActionsTypes.ADD_ITEM, payload: item });

const clearItem = (item) => ({ type: cartActionsTypes.CLEAR_ITEM_FROM_CART, payload: item });

export default { toggleCartHidden, addItem, clearItem };
