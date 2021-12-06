import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import APP_ROUTES from 'utils/const/app-routes';
import { cartSelectors, cartActions } from 'store/cart';
import DropDown from './dropdown.component';

const DropDownContainer = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const cartItems = useSelector(cartSelectors.selectCartItems);

  const onCloseHandler = () => dispatch(cartActions.toggleCartHidden());
  const goToCheckout = () => {
    history.push(APP_ROUTES.checkout);
    onCloseHandler();
  };

  return <DropDown cartItems={cartItems} onClose={onCloseHandler} onClickCheckout={goToCheckout} />;
};

export default DropDownContainer;
