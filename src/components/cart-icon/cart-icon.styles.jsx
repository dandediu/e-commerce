import styled from 'styled-components';
import { ReactComponent as ShoppingBag } from 'assets/shopping-bag.svg';
import spacing from 'utils/styles/spacing';

const Cart = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const ShoppingIcon = styled(ShoppingBag)`
  width: 24px;
  height: 24px;
`;

const ItemCount = styled.span`
  position: absolute;
  font-size: 12px;
  font-weight: bold;
  top: calc(${spacing.smSpace} - 2px);
`;

export { Cart, ItemCount, ShoppingIcon };
