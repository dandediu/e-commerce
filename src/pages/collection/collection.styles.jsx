import styled from 'styled-components';
import spacing from 'utils/styles/spacing';
import breakpoints from 'utils/styles/breakpoints';

const CollectionWrapper = styled.div`
  padding: 0 ${spacing.lgSpace};
`;

const CollectionList = styled.ul`
  display: grid;
  row-gap ${spacing.mdSpace};

  @media ${breakpoints.tablet} {
    grid-template-rows: auto;
    grid-template-columns: 1fr 1fr;
    column-gap ${spacing.mdSpace};
    row-gap ${spacing.mdSpace};
  }

  @media ${breakpoints.laptop} {
    column-gap ${spacing.lgSpace};
    row-gap ${spacing.lgSpace};
    grid-template-columns: 1fr 1fr 1fr;
  }

   @media ${breakpoints.laptopL} {
    column-gap ${spacing.xlSpace};
    row-gap ${spacing.xlSpace};
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
`;

const Title = styled.h1`
  font-size: 28px;
  margin-bottom: ${spacing.mdSpace};
  text-transform: uppercase;

  /*   background: linear-gradient(to right, #c0c3c3, transparent);
  padding: ${spacing.smSpace}; */

  @media ${breakpoints.tablet} {
    margin-bottom: ${spacing.mdSpace};
  }
`;

export { CollectionWrapper, CollectionList, Title };
