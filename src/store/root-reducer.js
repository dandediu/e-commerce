import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { userReducer } from 'store/user';
import { cartReducer } from 'store/cart';

const persistConfig = { key: 'root', storage, whitelist: ['cart'] };

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
});

export default persistReducer(persistConfig, rootReducer);
