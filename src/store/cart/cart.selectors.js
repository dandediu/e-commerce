import { createSelector } from 'reselect';

const getItemsCount = (cartItems) =>
  cartItems.reduce((accumulatedQuantity, item) => accumulatedQuantity + item.quantity, 0);

const getTotalPrice = (cartItems) =>
  cartItems.reduce(
    (accumulatedQuantity, item) => accumulatedQuantity + item.quantity * item.price,
    0,
  );

const selectCart = (state) => state.cart;

const selectCartItems = createSelector([selectCart], (cart) => cart.cartItems);

const selectCartHidden = createSelector([selectCart], (cart) => cart.hidden);

const selectCartItemsCount = createSelector([selectCartItems], (cartItems) =>
  getItemsCount(cartItems),
);

const selectCartTotal = createSelector([selectCartItems], (cartItems) => getTotalPrice(cartItems));

export default { selectCartItems, selectCartHidden, selectCartItemsCount, selectCartTotal };
