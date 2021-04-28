import { createSelector } from 'reselect';

const reduceCartItems = (cartItems) =>
  cartItems.reduce((accumulatedQuantity, item) => accumulatedQuantity + item.quantity, 0);

const selectCart = (state) => state.cart;

const selectCartItems = createSelector([selectCart], (cart) => cart.cartItems);

const selectCartHidden = createSelector([selectCart], (cart) => cart.hidden);

const selectCartItemsCount = createSelector([selectCartItems], (cartItems) =>
  reduceCartItems(cartItems),
);

export default { selectCartItems, selectCartHidden, selectCartItemsCount };
