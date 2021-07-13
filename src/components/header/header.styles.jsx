import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import breakpoints from 'utils/styles/breakpoints';
import spacing from 'utils/styles/spacing';

const optionCommonStyles = css`
  text-transform: uppercase;
  cursor: pointer;
  display: inline-block;
  padding: ${spacing.smSpace} ${spacing.smSpace};
  border-bottom: 1px solid transparent;

  &:hover {
    border-bottom: 1px solid black;
  }

  @media ${breakpoints.laptop} {
    padding: ${spacing.smSpace} ${spacing.space};
  }
`;

export const HeaderContainer = styled.div`
  width: 100%;
  margin-bottom: ${spacing.lgSpace};
  display: flex;
  align-items: center;
  flex-direction: column;

  @media ${breakpoints.laptop} {
    justify-content: space-between;
    flex-direction: row;
    padding: 0 ${spacing.mdSpace};
  }
`;

export const LogoContainer = styled(Link)`
  cursor: pointer;
  margin: ${spacing.smSpace} 0;

  &:hover {
    opacity: 0.9;
  }
`;

export const NavList = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
`;

export const NavItem = styled.li`
  &:last-child {
    padding: 0 ${spacing.smSpace} ${spacing.xsSpace};
  }
`;

export const OptionLink = styled(Link)`
  ${optionCommonStyles}
`;

export const OptionDiv = styled.div`
  ${optionCommonStyles}
`;

export const DropDownWrapper = styled.div`
  @media ${breakpoints.tablet} {
    position: relative;
  }
`;
