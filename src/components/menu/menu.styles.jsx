import styled from 'styled-components';
import spacing from 'utils/styles/spacing';
import breakpoints from 'utils/styles/breakpoints';

const MenuList = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${spacing.mdSpace};

  @media ${breakpoints.tablet} {
    flex-direction: row;
    flex-wrap: wrap;
    padding: 0 ${spacing.mdSpace};
  }
`;

export { MenuList };
