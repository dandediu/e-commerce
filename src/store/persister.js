import { persistStore } from 'redux-persist';
import store from './store';

const persister = persistStore(store);

export default persister;
