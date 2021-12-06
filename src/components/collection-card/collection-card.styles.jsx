import styled from 'styled-components';
import spacing from 'utils/styles/spacing';
import { borders, boxShadow } from 'utils/styles/vars';
import CustomButton from 'components/custom-button';

const CollectionCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  border-radius: ${borders.defaultRadius};
  box-shadow: ${boxShadow.default};
  box-sizing: border-box;
  width: 100%;
`;

const CardImageWrapper = styled.div`
  position: relative;
  padding-top: 100%; /* 1:1 Aspect Ratio */
`;

const CardImage = styled.img`
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
`;

const CardContent = styled.div`
  padding: ${spacing.mdSpace};
  width: 100%;
  background-color: rgb(255, 255, 255);
`;

const CardRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: ${spacing.smSpace};
`;

const Button = styled(CustomButton)`
  width: 100%;
`;

const Label = styled.span`
  font-size: 18px;
`;

export { CollectionCardWrapper, CardImageWrapper, CardImage, Button, CardContent, CardRow, Label };
