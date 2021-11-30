import styled from 'styled-components';
import breakpoints from 'utils/styles/breakpoints';
import spacing from 'utils/styles/spacing';

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

export { List, ListItem };
