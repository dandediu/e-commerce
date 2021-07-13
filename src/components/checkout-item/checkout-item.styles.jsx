import styled from 'styled-components';
import breakpoints from 'utils/styles/breakpoints';
import spacing from 'utils/styles/spacing';
import { borders, boxShadow } from 'utils/styles/vars';

const CheckoutItemWrapper = styled.div`
  border-bottom: 1px solid darkgrey;
  padding: ${spacing.space};
  font-size: 20px;
  display: flex;
  column-gap: ${spacing.space};

  @media ${breakpoints.tablet} {
    align-items: center;
    padding: 0;
    column-gap: ${spacing.lgSpace};
  }
`;

const ImageContainer = styled.div`
  padding-top: 30%;
  position: relative;
  overflow: hidden;
  width: 30%;

  @media ${breakpoints.tablet} {
    width: 20%;
    padding-top: 20%;
  }
`;

const Image = styled.img`
  position: absolute;
  width: 100%;
  height: auto;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
`;

const CheckoutItemSection = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  position: relative;

  @media ${breakpoints.tablet} {
    flex-direction: row;
    flex: auto;
  }
`;

const RemoveButton = styled.div`
  cursor: pointer;
  text-align: center;
  position: absolute;
  right: 0;

  @media ${breakpoints.tablet} {
    position: static;
    flex: 0.5;
  }
`;

const Label = styled.div`
  flex: 1;
  display: flex;
  align-items: flex-start;
`;

const Arrow = styled.div`
  cursor: pointer;
`;

const Value = styled.div`
  margin: 0 ${spacing.smSpace};
`;

export {
  CheckoutItemWrapper,
  ImageContainer,
  Image,
  CheckoutItemSection,
  RemoveButton,
  Arrow,
  Value,
  Label,
};
