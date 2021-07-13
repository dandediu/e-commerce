import styled from 'styled-components';

const CartItemWrapper = styled.div`
  width: 100%;
  display: flex;
  height: 80px;
`;

const Image = styled.img`
  width: 30%;
`;

const CartItemDetails = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 10px 20px;
`;

const Label = styled.div`
  font-size: 16px;
`;

export { CartItemWrapper, Image, Label, CartItemDetails };
