import styled from 'styled-components';
import breakpoints from 'utils/styles/breakpoints';
import spacing from 'utils/styles/spacing';

export const SignInWrapper = styled.div`
  flex: 1;
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: ${spacing.smSpace};

  button {
    width: 100%;
  }

  @media ${breakpoints.laptop} {
    flex-direction: row;
    column-gap: ${spacing.mdSpace};

    button {
      width: unset;
      flex: auto;
    }
  }
`;
