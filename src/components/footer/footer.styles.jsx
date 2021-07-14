import styled from 'styled-components';
import spacing from 'utils/styles/spacing';

const FooterWrapper = styled.div`
  padding: ${spacing.mdSpace};
  margin-top: ${spacing.mdSpace};
  background-color: black;
  text-align: center;
`;

const Copyright = styled.span`
  color: white;
`;

export { FooterWrapper, Copyright };
