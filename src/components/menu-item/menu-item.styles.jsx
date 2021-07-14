import styled from 'styled-components';
import breakpoints from 'utils/styles/breakpoints';
import spacing from 'utils/styles/spacing';
import { borders } from 'utils/styles/vars';

const BackgroundImage = styled.div`
  height: 100%;
  width: 100%;
  background-position: center;
  background-size: cover;
  background-image: url(${(props) => props.imageUrl});
`;

const Content = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: white;
  padding: ${spacing.mdSpace};
  border-radius: ${borders.defaultRadius};
  opacity: 0.7;
`;

const MenuItemWrapper = styled.div`
  height: 200px;
  border-radius: ${borders.defaultRadius};
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  flex: auto;

  &:hover {
    cursor: pointer;

    ${BackgroundImage} {
      transform: scale(1.1);
      transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
    }

    ${Content} {
      opacity: 0.9;
    }
  }

  @media ${breakpoints.tablet} {
    height: 300px;
    width: calc(50% - 100 * ${spacing.mdSpace} / 100);
  }

  @media ${breakpoints.laptop} {
    ${({ isLarge }) => isLarge && `width: 50%`}

    width: calc(100%/3 - 100*${spacing.mdSpace}/100);
  }
`;

const Title = styled.h1`
  font-weight: bold;
  font-size: 22px;
  color: #4a4a4a;
  text-transform: uppercase;
`;

const SubTitle = styled.span`
  font-weight: lighter;
  font-size: 16px;
`;

export { MenuItemWrapper, BackgroundImage, Content, Title, SubTitle };
