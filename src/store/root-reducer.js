import { combineReducers } from 'redux';

import { userReducer } from 'store/user';
import { cartReducer } from 'store/cart';

export default combineReducers({
  user: userReducer,
  cart: cartReducer,
});
