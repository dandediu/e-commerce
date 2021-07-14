import styled from 'styled-components';
import breakpoints from 'utils/styles/breakpoints';

export const SignUpWrapper = styled.div`
  flex: 1;
  button {
    width: 100%;
  }

  @media ${breakpoints.laptop} {
    button {
      width: 50%;
    }
  }
`;
