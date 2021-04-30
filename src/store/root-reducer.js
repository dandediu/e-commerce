import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { userReducer } from 'store/user';
import { cartReducer } from 'store/cart';
import { directoryReducer } from 'store/directory';
import { shopReducer } from 'store/shop';

const persistConfig = { key: 'root', storage, whitelist: ['cart'] };

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
  directory: directoryReducer,
  shop: shopReducer,
});

export default persistReducer(persistConfig, rootReducer);
