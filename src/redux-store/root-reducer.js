import { combineRducers } from 'redux';

import { userReducer } from 'redux-store/user';

export default combineRducers({
  user: userReducer,
});
