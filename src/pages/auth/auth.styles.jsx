import styled from 'styled-components';
import breakpoints from 'utils/styles/breakpoints';
import spacing from 'utils/styles/spacing';

const AuthWrapper = styled.div`
  margin: 0 auto;
  max-width: 768px;
  padding: ${spacing.space};
  display: flex;
  flex-direction: column;
  row-gap: ${spacing.space};

  @media ${breakpoints.tablet} {
    flex-direction: row;
    column-gap: ${spacing.mdSpace};
  }

  @media ${breakpoints.tablet} {
    column-gap: ${spacing.lgSpace};
  }
`;

export { AuthWrapper };
