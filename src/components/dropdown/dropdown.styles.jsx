import styled from 'styled-components';
import breakpoints from 'utils/styles/breakpoints';
import spacing from 'utils/styles/spacing';
import CustomButton from 'components/custom-button';
import { boxShadow, borders } from 'utils/styles/vars';

const DropdownInner = styled.div`
  position: absolute;
  padding: ${spacing.space};
  display: flex;
  flex-direction: column;
  background-color: white;
  z-index: 5;
  top: 0;
  left: 0;
  right: 0px;
  bottom: 0;

  @media ${breakpoints.tablet} {
    top: calc(${spacing.mdSpace}*2);
    transform: translate(-50%);
    right: 20px;
    width: 320px;
    height: 340px;
    padding: ${spacing.mdSpace};
    box-shadow: ${boxShadow.default};
    border-radius: ${borders.defaultRadius};
  }

  @media ${breakpoints.laptop} {
    transform: translate(-90%);
  }
`;

const CloseButton = styled(CustomButton)`
  position: absolute;
  right: 0;
  top: 0;
  padding: ${spacing.space};

  @media ${breakpoints.tablet} {
    display: none;
  }
`;

const Message = styled.span`
  font-size: 18px;
  margin: 50px auto;
`;

const List = styled.ul`
  height: 90%;
  display: flex;
  flex-direction: column;
  overflow: auto;

  @media ${breakpoints.tablet} {
    height: 240px;
  }
`;

const ListItem = styled.li`
  margin-bottom: ${spacing.space};
`;

const DropdownButton = styled(CustomButton)`
  margin-top: ${spacing.space};
`;

export { DropdownInner, CloseButton, List, ListItem, Message, DropdownButton };
