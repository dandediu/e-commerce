import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { cartSelectors } from 'store/cart';
import { userSelectors, userActions } from 'store/user';
import Header from './header.component';

const HeaderContainer = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector(userSelectors.selectCurrentUser);
  const hidden = useSelector(cartSelectors.selectCartHidden);
  const signOutHandler = () => dispatch(userActions.signOutStart());

  return <Header onSingOut={signOutHandler} currentUser={currentUser} hidden={hidden} />;
};

export default HeaderContainer;
