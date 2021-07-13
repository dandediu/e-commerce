import styled from 'styled-components';
import breakpoints from 'utils/styles/breakpoints';
import spacing from 'utils/styles/spacing';

export const CheckoutPageWrapper = styled.div`
  max-width: 768px;
  display: flex;
  flex-direction: column;
  margin: auto;
`;

export const CheckoutHeader = styled.h1`
  padding: ${spacing.lgSpace};
  border-bottom: 1px solid darkgrey;
  text-transform: uppercase;
  font-size: 32px;

  @media ${breakpoints.tablet} {
    padding: ${spacing.lgSpace} 0;
  }
`;

export const CheckoutFooter = styled.div`
  display: flex;
  align-items: flex-end;
  flex-direction: column;
  padding: ${spacing.spacing};
`;

export const CheckoutTotal = styled.div`
  margin: ${spacing.lgSpace} 0;
  font-size: 32px;
`;

export const WarningMessage = styled.div`
  text-align: center;
  margin-top: ${spacing.lgSpace};
  font-size: 24px;
  color: red;
`;
