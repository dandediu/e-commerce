import cartActionsTypes from './cart.types';

const toggleCartHidden = () => ({
  type: cartActionsTypes.TOGGLE_CART_HIDDEN,
});

export default { toggleCartHidden };
