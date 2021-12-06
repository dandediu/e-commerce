import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { userSelectors, userActions } from 'store/user';
import MainPage from 'pages/main';

import './App.css';

const App = () => {
  const currentUser = useSelector(userSelectors.selectCurrentUser);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(userActions.checkUserSession());
  }, [dispatch]);

  return <MainPage currentUser={currentUser} />;
};

export default App;
