import styled from 'styled-components';
import breakpoints from 'utils/styles/breakpoints';
import spacing from 'utils/styles/spacing';
import { colors } from 'utils/styles/vars';

const CollectionPreviewWrapper = styled.div``;

const Title = styled.h1`
  font-size: 28px;
  margin: ${spacing.mdSpace};
  border-bottom: 2px solid;
  padding-bottom: ${spacing.mdSpace};

  &:hover {
    cursor: pointer;
    color: ${colors.neutral};
  }
`;

const CollectionPreviewList = styled.ul`
  padding-bottom: ${spacing.mdSpace};

  @media ${breakpoints.tablet} {
    display: flex;
    flex-wrap: wrap;
  }
`;

const CollectionPreviewListItem = styled.li`
  padding: ${spacing.mdSpace};
  display: flex;

  @media ${breakpoints.tablet} {
    width: 50%;
    flex-wrap: wrap;
  }

  @media ${breakpoints.laptop} {
    width: 33.3333%;
    flex-wrap: wrap;
  }

  @media ${breakpoints.laptopL} {
    width: 25%;
    flex-wrap: no-wrap;
  }
`;

export { CollectionPreviewWrapper, Title, CollectionPreviewList, CollectionPreviewListItem };
